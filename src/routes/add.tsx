import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ListingForm } from "@/components/ListingForm";
import { listingsStore } from "@/lib/listings-store";

export const Route = createFileRoute("/add")({
  component: AddListingPage,
});

function AddListingPage() {
  const navigate = useNavigate();

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="font-display text-3xl font-bold">Add a new listing</h1>
      <p className="mt-1 text-muted-foreground">
        Share your apartment, villa or room with travelers across Albania.
      </p>

      <div className="mt-8 rounded-xl border border-border bg-card p-6" style={{ boxShadow: "var(--shadow-card)" }}>
        <ListingForm
          submitLabel="Publish listing"
          onSubmit={(data) => {
            const created = listingsStore.create(data);
            navigate({ to: "/listings/$id", params: { id: created.id } });
          }}
        />
      </div>
    </main>
  );
}
