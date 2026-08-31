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
    <section className="relative px-6 pb-16 pt-16 sm:pb-20 sm:pt-20">
      <div
        className={`relative mx-auto ${
          visual
            ? "grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16"
            : "max-w-5xl"
        }`}
      >
        <div>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent-2">
            {kicker}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-text sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <div className="body-copy mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
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
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[3px] bg-accent"
      />
    </section>
  );
}
