const items = [
  "Solicitors only",
  "Your firm keeps conduct",
  "A specialist team",
  "England and Wales",
] as const;

export default function TrustStrip() {
  return (
    <div className="bg-accent px-6 py-6">
      <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-semibold uppercase tracking-[0.14em] text-on-accent sm:text-sm">
        {items.map((item, index) => (
          <li key={item} className="flex items-center gap-6">
            {index > 0 ? (
              <span aria-hidden="true" className="hidden text-accent-2-soft sm:inline">
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
