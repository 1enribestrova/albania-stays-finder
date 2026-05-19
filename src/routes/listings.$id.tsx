import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, BedDouble, MapPin, Phone, Tag, Pencil, Trash2 } from "lucide-react";
import { listingsStore, type Listing } from "@/lib/listings-store";
import { MapSection } from "@/components/MapSection";

export const Route = createFileRoute("/listings/$id")({
  component: ListingDetails,
});

function ListingDetails() {
  const { id } = Route.useParams();
  const navigate = useNavigate();
  const [listing, setListing] = useState<Listing | undefined>();

  useEffect(() => {
    setListing(listingsStore.get(id));
  }, [id]);

  if (!listing) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h1 className="font-display text-2xl font-bold">Listing not found</h1>
        <Link to="/listings" className="mt-4 inline-block text-primary hover:underline">
          ← Back to listings
        </Link>
      </main>
    );
  }

  const handleDelete = () => {
    if (confirm(`Delete "${listing.title}"? This cannot be undone.`)) {
      listingsStore.remove(listing.id);
      navigate({ to: "/listings" });
    }
  };

  const tags = [
    listing.nearSea && "Near the sea",
    listing.nearMountain && "Near the mountains",
    listing.nearCenter && "Near city centre",
  ].filter(Boolean) as string[];

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Link to="/listings" className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> Back to listings
      </Link>

      <div className="overflow-hidden rounded-xl border border-border bg-card" style={{ boxShadow: "var(--shadow-card)" }}>
        {listing.image && (
          <div className="aspect-[16/7] overflow-hidden bg-muted">
            <img src={listing.image} alt={listing.title} className="h-full w-full object-cover" />
          </div>
        )}
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="font-display text-3xl font-bold">{listing.title}</h1>
              <div className="mt-2 flex items-center gap-1.5 text-muted-foreground">
                <MapPin className="h-4 w-4" /> {listing.address}
              </div>
            </div>
            <div className="text-right">
              <div className="font-display text-3xl font-bold text-primary">€{listing.price}</div>
              <div className="text-xs text-muted-foreground">per night</div>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            <Badge icon={<BedDouble className="h-3.5 w-3.5" />}>{listing.rooms} room{listing.rooms > 1 ? "s" : ""}</Badge>
            <Badge icon={<Tag className="h-3.5 w-3.5" />}>{listing.type}</Badge>
            <Badge>{listing.available ? "✓ Available" : "✗ Unavailable"}</Badge>
            {tags.map((t) => <Badge key={t}>{t}</Badge>)}
          </div>

          <div className="mt-6">
            <h2 className="font-display text-xl font-semibold">Description</h2>
            <p className="mt-2 whitespace-pre-line text-foreground/80">{listing.description}</p>
          </div>

          {listing.contact && (
            <div className="mt-6 flex items-center gap-2 rounded-md bg-secondary px-4 py-3 text-sm">
              <Phone className="h-4 w-4 text-primary" />
              <span className="font-medium">Contact:</span> {listing.contact}
            </div>
          )}

          <div className="mt-8">
            <h2 className="mb-3 font-display text-xl font-semibold">Location</h2>
            <MapSection address={listing.address} title={listing.title} />
          </div>

          <div className="mt-8 flex gap-3 border-t border-border pt-6">
            <Link to="/edit/$id" params={{ id: listing.id }}
              className="flex items-center gap-2 rounded-md bg-secondary px-4 py-2 text-sm font-medium hover:bg-secondary/70">
              <Pencil className="h-4 w-4" /> Edit
            </Link>
            <button onClick={handleDelete}
              className="flex items-center gap-2 rounded-md bg-destructive px-4 py-2 text-sm font-medium text-destructive-foreground hover:bg-destructive/90">
              <Trash2 className="h-4 w-4" /> Delete
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

function Badge({ children, icon }: { children: React.ReactNode; icon?: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
      {icon}{children}
    </span>
  );
}
