import { Link } from "@tanstack/react-router";
import { MapPin, BedDouble, Tag } from "lucide-react";
import type { Listing } from "@/lib/listings-store";

export function ListingCard({ listing }: { listing: Listing }) {
  return (
    <Link
      to="/listings/$id"
      params={{ id: listing.id }}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-hover)]"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        {listing.image ? (
          <img
            src={listing.image}
            alt={listing.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-muted-foreground">
            No image
          </div>
        )}
        <div className="absolute right-3 top-3 rounded-full bg-background/90 px-3 py-1 text-sm font-semibold text-primary backdrop-blur">
          €{listing.price}<span className="text-xs text-muted-foreground">/night</span>
        </div>
        {!listing.available && (
          <div className="absolute left-3 top-3 rounded-full bg-destructive px-2 py-0.5 text-xs font-medium text-destructive-foreground">
            Unavailable
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="line-clamp-1 font-display text-lg font-semibold">{listing.title}</h3>
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" /> {listing.area}
        </div>
        <div className="mt-auto flex items-center gap-3 pt-2 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><BedDouble className="h-3.5 w-3.5" /> {listing.rooms} room{listing.rooms > 1 ? "s" : ""}</span>
          <span className="flex items-center gap-1"><Tag className="h-3.5 w-3.5" /> {listing.type}</span>
        </div>
      </div>
    </Link>
  );
}
