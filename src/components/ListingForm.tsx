import { useState, type FormEvent } from "react";
import type { Listing } from "@/lib/listings-store";

export type ListingFormValues = Omit<Listing, "id">;

const empty: ListingFormValues = {
  title: "",
  price: 50,
  area: "",
  address: "",
  rooms: 1,
  type: "Apartment",
  available: true,
  description: "",
  contact: "",
  nearSea: false,
  nearMountain: false,
  nearCenter: false,
  image: "",
};

export function ListingForm({
  initial,
  submitLabel,
  onSubmit,
}: {
  initial?: ListingFormValues;
  submitLabel: string;
  onSubmit: (data: ListingFormValues) => void;
}) {
  const [form, setForm] = useState<ListingFormValues>(initial ?? empty);

  const update = <K extends keyof ListingFormValues>(k: K, v: ListingFormValues[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.title.trim() || !form.area.trim() || !form.address.trim()) return;
    onSubmit(form);
  };

  const input =
    "w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30";
  const label = "text-sm font-medium text-foreground";

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <label className={label}>Listing title *</label>
        <input className={input} value={form.title} onChange={(e) => update("title", e.target.value)} required />
      </div>

      <div>
        <label className={label}>Price (€/night) *</label>
        <input type="number" min={0} className={input} value={form.price}
          onChange={(e) => update("price", Number(e.target.value))} required />
      </div>

      <div>
        <label className={label}>Number of rooms *</label>
        <input type="number" min={1} className={input} value={form.rooms}
          onChange={(e) => update("rooms", Number(e.target.value))} required />
      </div>

      <div>
        <label className={label}>Area / City *</label>
        <input className={input} value={form.area} onChange={(e) => update("area", e.target.value)}
          placeholder="Tirana, Sarandë, Vlorë…" required />
      </div>

      <div>
        <label className={label}>Property type *</label>
        <select className={input} value={form.type}
          onChange={(e) => update("type", e.target.value as Listing["type"])}>
          {["Apartment", "House", "Studio", "Villa", "Room"].map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <label className={label}>Full address *</label>
        <input className={input} value={form.address} onChange={(e) => update("address", e.target.value)}
          placeholder="Street, City, Albania" required />
      </div>

      <div className="sm:col-span-2">
        <label className={label}>Image URL</label>
        <input className={input} value={form.image ?? ""} onChange={(e) => update("image", e.target.value)}
          placeholder="https://…" />
      </div>

      <div className="sm:col-span-2">
        <label className={label}>Description</label>
        <textarea className={input + " min-h-[100px]"} value={form.description}
          onChange={(e) => update("description", e.target.value)} />
      </div>

      <div>
        <label className={label}>Contact</label>
        <input className={input} value={form.contact} onChange={(e) => update("contact", e.target.value)}
          placeholder="+355 …" />
      </div>

      <div className="flex items-end">
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={form.available}
            onChange={(e) => update("available", e.target.checked)} />
          Available now
        </label>
      </div>

      <div className="sm:col-span-2 flex flex-wrap gap-4">
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={!!form.nearSea}
            onChange={(e) => update("nearSea", e.target.checked)} />
          Near the sea
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={!!form.nearMountain}
            onChange={(e) => update("nearMountain", e.target.checked)} />
          Near the mountains
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={!!form.nearCenter}
            onChange={(e) => update("nearCenter", e.target.checked)} />
          Near city centre
        </label>
      </div>

      <div className="sm:col-span-2">
        <button type="submit"
          className="w-full rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
