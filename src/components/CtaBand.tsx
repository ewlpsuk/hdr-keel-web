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
    <section className="border-t-[3px] border-accent bg-surface px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-bold text-text">{title}</h2>
        {children ? (
          <div className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {children}
          </div>
        ) : null}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href={primaryHref} variant="primary">
            {primaryLabel}
          </Button>
          {secondaryHref && secondaryLabel ? (
            <Button href={secondaryHref} variant="secondary">
              {secondaryLabel}
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
