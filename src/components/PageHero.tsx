import Button from "@/components/Button";

type PageHeroProps = {
  kicker: string;
  title: string;
  children: React.ReactNode;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  visual?: React.ReactNode;
  visualOnMobile?: boolean;
};

export default function PageHero({
  kicker,
  title,
  children,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  visual,
  visualOnMobile = false,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pl-8 pt-14 sm:pb-20 sm:pl-10 sm:pt-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-2 bg-accent sm:w-2.5"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-2 w-1.5 bg-accent-2 sm:left-2.5"
      />
      <div
        className={`relative mx-auto ${
          visual
            ? "grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16"
            : "max-w-5xl"
        }`}
      >
        <div>
          <p className="inline-block rounded-sm bg-accent-2-soft px-2 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-2">
            {kicker}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.15] tracking-tight text-text sm:text-5xl lg:text-[3.35rem]">
            {title}
          </h1>
          <div className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
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
        {visual ? (
          <div
            className={
              visualOnMobile
                ? "min-h-[16rem] lg:min-h-[22rem]"
                : "hidden min-h-[16rem] lg:block"
            }
          >
            {visual}
          </div>
        ) : null}
      </div>
    </section>
  );
}
