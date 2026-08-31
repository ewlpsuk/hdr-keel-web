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
      <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent-2">
        {kicker}
      </p>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-text">
        {title}
      </h2>
      {children ? (
        <div className="body-copy mt-4 text-base leading-relaxed text-muted sm:text-lg">
          {children}
        </div>
      ) : null}
    </div>
  );
}
