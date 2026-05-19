import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, MapPin, Search } from "lucide-react";
import { useListings } from "@/hooks/use-listings";
import { ListingCard } from "@/components/ListingCard";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  const listings = useListings();
  const featured = listings.slice(0, 3);

  return (
    <main>
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1542640244-7e672d6cef4e?w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }} />
        <div className="relative mx-auto max-w-6xl px-4 py-24 text-center text-primary-foreground sm:py-32">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> AI-powered rental search
          </div>
          <h1 className="font-display text-5xl font-bold leading-tight sm:text-6xl">
            Find your perfect stay <br /> across Albania
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/80">
            From the turquoise beaches of Ksamil to the Alps of Theth — discover
            apartments, villas and rooms with maps and a smart AI assistant.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/listings"
              className="flex items-center gap-2 rounded-md bg-background px-5 py-2.5 text-sm font-semibold text-primary hover:bg-background/90">
              <Search className="h-4 w-4" /> Browse listings
            </Link>
            <Link to="/chat"
              className="flex items-center gap-2 rounded-md border border-white/40 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/20">
              <Sparkles className="h-4 w-4" /> Ask the AI assistant
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold">Featured stays</h2>
            <p className="mt-1 text-muted-foreground">Hand-picked spots across Albania</p>
          </div>
          <Link to="/listings" className="text-sm font-medium text-primary hover:underline">View all →</Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((l) => <ListingCard key={l.id} listing={l} />)}
        </div>
      </section>

      <section className="border-t border-border bg-secondary/50">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:grid-cols-3">
          {[
            { icon: Search, title: "Smart filters", text: "Filter by area, price, type and proximity to sea, mountain or city centre." },
            { icon: MapPin, title: "Real locations", text: "Every property includes a Google Maps view so you know exactly where you'll stay." },
            { icon: Sparkles, title: "AI Assistant", text: "Tell the AI your budget and vibe — it recommends the best matches from our catalog." },
          ].map((f) => (
            <div key={f.title} className="rounded-xl bg-card p-6" style={{ boxShadow: "var(--shadow-card)" }}>
              <f.icon className="h-7 w-7 text-primary" />
              <h3 className="mt-3 font-display text-lg font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
