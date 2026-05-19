export type Filters = {
  query: string;
  type: string;
  maxPrice: number;
  area: string;
};

export const emptyFilters: Filters = { query: "", type: "All", maxPrice: 500, area: "All" };

export function SearchFilters({
  filters,
  onChange,
  areas,
}: {
  filters: Filters;
  onChange: (f: Filters) => void;
  areas: string[];
}) {
  const set = <K extends keyof Filters>(k: K, v: Filters[K]) =>
    onChange({ ...filters, [k]: v });

  const input =
    "w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30";

  return (
    <div className="grid gap-3 rounded-xl border border-border bg-card p-4 sm:grid-cols-4"
      style={{ boxShadow: "var(--shadow-card)" }}>
      <input
        className={input}
        placeholder="Search title or description…"
        value={filters.query}
        onChange={(e) => set("query", e.target.value)}
      />
      <select className={input} value={filters.area} onChange={(e) => set("area", e.target.value)}>
        <option value="All">All areas</option>
        {areas.map((a) => <option key={a} value={a}>{a}</option>)}
      </select>
      <select className={input} value={filters.type} onChange={(e) => set("type", e.target.value)}>
        {["All", "Apartment", "House", "Studio", "Villa", "Room"].map((t) =>
          <option key={t} value={t}>{t}</option>)}
      </select>
      <label className="flex flex-col text-xs text-muted-foreground">
        Max price: €{filters.maxPrice}
        <input type="range" min={10} max={500} value={filters.maxPrice}
          onChange={(e) => set("maxPrice", Number(e.target.value))} className="accent-primary" />
      </label>
    </div>
  );
}
