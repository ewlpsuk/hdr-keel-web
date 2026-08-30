import Button from "@/components/Button";

type PageHeroProps = {
  kicker: string;
  title: string;
  children: React.ReactNode;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export default function PageHero({
  kicker,
  title,
  children,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden px-6 py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 0%, rgba(255,140,0,0.16), transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(0,242,255,0.1), transparent 45%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent-2">
          {kicker}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-text sm:text-5xl">
          {title}
        </h1>
        <div className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          {children}
        </div>
        {(primaryHref || secondaryHref) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {primaryHref && primaryLabel ? (
              <Button href={primaryHref} variant="primary">
                {primaryLabel}
              </Button>
            ) : null}
            {secondaryHref && secondaryLabel ? (
              <Button href={secondaryHref} variant="secondary">
                {secondaryLabel}
              </Button>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}
