import "@tanstack/react-start";
import { createFileRoute } from "@tanstack/react-router";
import { generateText } from "ai";
import { createLovableAiGatewayProvider } from "@/lib/ai-gateway";

type Listing = {
  id: string;
  title: string;
  price: number;
  area: string;
  address: string;
  rooms: number;
  type: string;
  available: boolean;
  description: string;
  nearSea?: boolean;
  nearMountain?: boolean;
  nearCenter?: boolean;
};

type Body = {
  message: string;
  listings: Listing[];
  history?: { role: "user" | "assistant"; content: string }[];
};

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }: { request: Request }) => {
        const { message, listings, history = [] } = (await request.json()) as Body;
        if (!message) return new Response("Missing message", { status: 400 });

        const key = process.env.LOVABLE_API_KEY;
        if (!key) return new Response("Missing LOVABLE_API_KEY", { status: 500 });

        const gateway = createLovableAiGatewayProvider(key);
        const model = gateway("google/gemini-3-flash-preview");

        const catalog = listings
          .map(
            (l) =>
              `#${l.id} | ${l.title} | ${l.area} | ${l.type} | ${l.rooms} room(s) | €${l.price}/night | ${
                [
                  l.nearSea && "near sea",
                  l.nearMountain && "near mountain",
                  l.nearCenter && "near city centre",
                ]
                  .filter(Boolean)
                  .join(", ") || "—"
              } | ${l.description}`
          )
          .join("\n");

        const system = `You are a friendly Albanian rental assistant for the "Stay Albania" platform.
You help travelers and students find the best rental from the catalog below.
Always recommend ONLY listings from this catalog (use their titles and price).
Be concise, warm, and explain WHY each recommendation matches the user's needs (budget, location, vibe).
Format the answer with short bullets. If nothing fits, say so honestly.

CATALOG:
${catalog}`;

        try {
          const { text } = await generateText({
            model,
            system,
            messages: [
              ...history.map((h) => ({ role: h.role, content: h.content })),
              { role: "user" as const, content: message },
            ],
          });
          return Response.json({ reply: text });
        } catch (err: unknown) {
          const msg = err instanceof Error ? err.message : "AI request failed";
          return new Response(msg, { status: 500 });
        }
      },
    },
  },
});
