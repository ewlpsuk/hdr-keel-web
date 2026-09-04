type SectionHeadingProps = {
  kicker: string;
  title: string;
  children?: React.ReactNode;
};

export default function SectionHeading({
  kicker,
  title,
  children,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="inline-block rounded-sm bg-accent-2-soft px-2 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-2">
        {kicker}
      </p>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text">
        {title}
      </h2>
      {children ? (
        <div className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          {children}
        </div>
      ) : null}
    </div>
  );
}
