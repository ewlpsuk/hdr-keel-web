import Button from "@/components/Button";
import { BOOKING_URL } from "@/lib/site";

type CtaBandProps = {
  title: string;
  children?: React.ReactNode;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export default function CtaBand({
  title,
  children,
  primaryHref = BOOKING_URL,
  primaryLabel = "Book a call",
  secondaryHref,
  secondaryLabel,
}: CtaBandProps) {
  return (
    <section className="relative bg-accent px-6 py-20 text-on-accent">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1.5 bg-accent-2" />
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-semibold">{title}</h2>
        {children ? (
          <div className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-on-accent/85 sm:text-lg">
            {children}
          </div>
        ) : null}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href={primaryHref} variant="inverse">
            {primaryLabel}
          </Button>
          {secondaryHref && secondaryLabel ? (
            <Button href={secondaryHref} variant="inverse-secondary">
              {secondaryLabel}
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
