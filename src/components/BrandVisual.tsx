type BrandVisualProps = {
  src: string;
  alt: string;
  decorative?: boolean;
  className?: string;
  imgClassName?: string;
};

export default function BrandVisual({
  src,
  alt,
  decorative = false,
  className = "",
  imgClassName = "",
}: BrandVisualProps) {
  return (
    <figure
      className={`overflow-hidden rounded-xl border border-white/10 bg-surface ${className}`.trim()}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={decorative ? "" : alt}
        aria-hidden={decorative || undefined}
        className={`h-full w-full object-cover ${imgClassName}`.trim()}
      />
    </figure>
  );
}
