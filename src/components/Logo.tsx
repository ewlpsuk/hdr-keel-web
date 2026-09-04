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
      className={`inline-flex items-center gap-2 font-display font-semibold text-text ${text}`}
    >
      <svg width={mark} height={mark} viewBox="0 0 64 64" aria-hidden="true">
        <path d="M13,7 L51,7 L43,24 L32,31 L21,24 Z" fill="#1f4f4a" />
        <rect x="5" y="32" width="54" height="3.5" rx="1.75" fill="#9a3412" />
        <path
          d="M20,45 L32,36 L44,45 L52,57 L32,60 L12,57 Z"
          fill="#9a3412"
        />
      </svg>
      <span>
        HDR <span className="text-accent">Keel</span>
      </span>
    </Link>
  );
}
