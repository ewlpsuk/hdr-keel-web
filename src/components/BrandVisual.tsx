type BrandVisualProps = {
  src: string;
  alt: string;
  decorative?: boolean;
  className?: string;
  imgClassName?: string;
  caption?: string;
};

export default function BrandVisual({
  src,
  alt,
  decorative = false,
  className = "",
  imgClassName = "",
  caption,
}: BrandVisualProps) {
  return (
    <figure
      className={`overflow-hidden rounded-xl border border-line border-t-[3px] border-t-accent-2 bg-surface ${className}`.trim()}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={decorative ? "" : alt}
        aria-hidden={decorative || undefined}
        className={`h-full w-full object-cover ${imgClassName}`.trim()}
      />
      {caption ? (
        <figcaption className="border-t border-line px-4 py-3 text-sm text-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
