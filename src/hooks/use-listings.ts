import { useEffect, useState } from "react";
import { listingsStore, type Listing } from "@/lib/listings-store";

export function useListings() {
  const [listings, setListings] = useState<Listing[]>([]);

  useEffect(() => {
    const sync = () => setListings(listingsStore.getAll());
    sync();
    window.addEventListener("listings:changed", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("listings:changed", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return listings;
}
