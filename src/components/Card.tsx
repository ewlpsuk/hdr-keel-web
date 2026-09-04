type CardProps = {
  title?: string;
  icon?: React.ReactNode;
  image?: { src: string; alt: string };
  featured?: boolean;
  kicker?: string;
  heading?: "h2" | "h3";
  split?: boolean;
  children: React.ReactNode;
  className?: string;
};

export default function Card({
  title,
  icon,
  image,
  featured = false,
  kicker,
  heading = "h3",
  split = false,
  children,
  className = "",
}: CardProps) {
  const HeadingTag = heading;
  const frame = `overflow-hidden rounded-xl border border-t-[3px] bg-surface motion-safe:transition motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 ${
    featured
      ? "border-accent border-t-accent-2"
      : "border-line border-t-accent hover:border-accent/50"
  } ${className}`.trim();

  const headingBlock = (
    <>
      {kicker ? (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-2">
          {kicker}
        </p>
      ) : null}
      {title ? (
        <HeadingTag className="mb-3 font-display text-xl font-semibold text-text sm:text-2xl">
          {title}
        </HeadingTag>
      ) : null}
    </>
  );

  if (image && split) {
    return (
      <article
        className={`grid h-full min-h-0 md:grid-cols-[minmax(12rem,18rem)_1fr] ${frame}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image.src}
          alt={image.alt}
          className="h-48 w-full object-cover md:h-full md:min-h-[14rem]"
        />
        <div className="p-6 sm:p-8">
          {headingBlock}
          <div className="text-base leading-relaxed text-muted">{children}</div>
        </div>
      </article>
    );
  }

  if (image) {
    return (
      <article className={`flex h-full flex-col ${frame}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image.src}
          alt={image.alt}
          className="h-44 w-full object-cover"
        />
        <div className="flex flex-1 flex-col p-6">
          {headingBlock}
          <div className="text-base leading-relaxed text-muted">{children}</div>
        </div>
      </article>
    );
  }

  return (
    <article className={`flex h-full flex-col ${frame} p-6`}>
      {icon ? <div className="mb-4 text-accent">{icon}</div> : null}
      {headingBlock}
      <div className="flex flex-1 flex-col text-base leading-relaxed text-muted">
        {children}
      </div>
    </article>
  );
}
