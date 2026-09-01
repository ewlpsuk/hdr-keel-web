import Link from "next/link";

type LogoProps = {
  size?: "header" | "footer";
};

export default function Logo({ size = "header" }: LogoProps) {
  const mark = size === "header" ? 28 : 22;
  const text = size === "header" ? "text-lg" : "text-base";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 font-display font-medium text-text ${text}`}
    >
      <svg width={mark} height={mark} viewBox="0 0 64 64" aria-hidden="true">
        {/* The Load: firm's conduct and control (cyan) */}
        <path d="M13,7 L51,7 L43,24 L32,31 L21,24 Z" fill="#00f2ff" />
        {/* The Keel: firm baseline (orange) */}
        <rect x="5" y="32" width="54" height="3.5" rx="1.75" fill="#ff8c00" />
        {/* The Counterweight: HDR Keel below (orange) */}
        <path
          d="M20,45 L32,36 L44,45 L52,57 L32,60 L12,57 Z"
          fill="#ff8c00"
        />
      </svg>
      <span>
        HDR <span className="text-accent">Keel</span>
      </span>
    </Link>
  );
}
