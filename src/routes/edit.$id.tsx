import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ListingForm, type ListingFormValues } from "@/components/ListingForm";
import { listingsStore } from "@/lib/listings-store";

export const Route = createFileRoute("/edit/$id")({
  component: EditListingPage,
});

function EditListingPage() {
  const { id } = Route.useParams();
  const navigate = useNavigate();
  const [initial, setInitial] = useState<ListingFormValues | null>(null);
  const [missing, setMissing] = useState(false);

  useEffect(() => {
    const l = listingsStore.get(id);
    if (!l) setMissing(true);
    else {
      const { id: _id, ...rest } = l;
      setInitial(rest);
    }
  }, [id]);

  if (missing) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h1 className="font-display text-2xl font-bold">Listing not found</h1>
        <Link to="/listings" className="mt-4 inline-block text-primary hover:underline">
          ← Back to listings
        </Link>
      </main>
    );
  }

  if (!initial) return <main className="px-4 py-10 text-center text-muted-foreground">Loading…</main>;

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="font-display text-3xl font-bold">Edit listing</h1>
      <div className="mt-8 rounded-xl border border-border bg-card p-6" style={{ boxShadow: "var(--shadow-card)" }}>
        <ListingForm
          initial={initial}
          submitLabel="Save changes"
          onSubmit={(data) => {
            listingsStore.update(id, data);
            navigate({ to: "/listings/$id", params: { id } });
          }}
        />
      </div>
    </main>
  );
}
