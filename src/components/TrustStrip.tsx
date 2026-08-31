const items = [
  "Solicitors only",
  "Firm keeps conduct",
  "A fee earner who has run the cases",
  "Training and AI support",
] as const;

export default function TrustStrip() {
  return (
    <div className="border-t-[3px] border-accent bg-surface px-6 py-8">
      <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-5 gap-y-3 font-mono text-xs uppercase tracking-[0.16em] text-muted sm:text-sm">
        {items.map((item, index) => (
          <li key={item} className="flex items-center gap-5">
            {index > 0 ? (
              <span aria-hidden="true" className="hidden text-accent sm:inline">
                ·
              </span>
            ) : null}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
