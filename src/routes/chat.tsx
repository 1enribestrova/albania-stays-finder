import { createFileRoute } from "@tanstack/react-router";
import { ChatAssistant } from "@/components/ChatAssistant";

export const Route = createFileRoute("/chat")({
  component: ChatPage,
});

function ChatPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <div className="mb-6">
        <h1 className="font-display text-3xl font-bold">AI Rental Assistant</h1>
        <p className="mt-1 text-muted-foreground">
          Describe your budget and what you're looking for — get personalized recommendations from our catalog.
        </p>
      </div>
      <ChatAssistant />
    </main>
  );
}
