export function MapSection({ address, title }: { address: string; title?: string }) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <iframe
        title={title ? `Map of ${title}` : "Map"}
        src={src}
        className="h-[360px] w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
        target="_blank"
        rel="noreferrer"
        className="block border-t border-border bg-secondary px-4 py-2 text-center text-sm text-foreground/80 hover:bg-secondary/80"
      >
        Open in Google Maps →
      </a>
    </div>
  );
}
