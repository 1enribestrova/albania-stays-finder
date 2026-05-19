import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useListings } from "@/hooks/use-listings";
import { ListingCard } from "@/components/ListingCard";
import { SearchFilters, emptyFilters, type Filters } from "@/components/SearchFilters";
import { Plus } from "lucide-react";

export const Route = createFileRoute("/listings")({
  component: ListingsPage,
});

function ListingsPage() {
  const listings = useListings();
  const [filters, setFilters] = useState<Filters>(emptyFilters);

  const areas = useMemo(
    () => Array.from(new Set(listings.map((l) => l.area))).sort(),
    [listings]
  );

  const filtered = listings.filter((l) => {
    const q = filters.query.toLowerCase();
    if (q && !l.title.toLowerCase().includes(q) && !l.description.toLowerCase().includes(q)) return false;
    if (filters.type !== "All" && l.type !== filters.type) return false;
    if (filters.area !== "All" && l.area !== filters.area) return false;
    if (l.price > filters.maxPrice) return false;
    return true;
  });

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-display text-3xl font-bold">All listings</h1>
          <p className="text-sm text-muted-foreground">{filtered.length} of {listings.length} stays</p>
        </div>
        <Link to="/add"
          className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
          <Plus className="h-4 w-4" /> Add listing
        </Link>
      </div>

      <SearchFilters filters={filters} onChange={setFilters} areas={areas} />

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((l) => <ListingCard key={l.id} listing={l} />)}
      </div>

      {filtered.length === 0 && (
        <div className="mt-12 rounded-xl border border-dashed border-border bg-card p-12 text-center text-muted-foreground">
          No listings match your filters.
        </div>
      )}
    </main>
  );
}
