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
      <svg
        width={mark}
        height={mark}
        viewBox="0 0 32 32"
        role="img"
        aria-labelledby="logo-title"
      >
        <title id="logo-title">HDR Keel</title>
        <polygon points="16,3 28,27 16,21 4,27" fill="#ff8c00" />
        <circle cx="16" cy="14" r="3.2" fill="#00f2ff" />
      </svg>
      <span>
        HDR <span className="text-accent">Keel</span>
      </span>
    </Link>
  );
}
