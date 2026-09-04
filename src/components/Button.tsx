import Link from "next/link";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "inverse" | "inverse-secondary";
  size?: "default" | "compact";
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
};

const base =
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const sizes = {
  default: "min-h-11 px-5 py-2.5 text-base",
  compact: "min-h-10 px-3.5 py-2 text-sm",
};

const variants = {
  primary: "bg-accent text-on-accent hover:bg-accent/90",
  secondary:
    "border border-accent bg-transparent text-accent hover:bg-accent/10",
  inverse: "bg-on-accent text-accent hover:bg-surface",
  "inverse-secondary":
    "border border-on-accent/50 bg-transparent text-on-accent hover:bg-white/10",
};

export default function Button({
  href,
  variant = "primary",
  size = "default",
  children,
  type = "button",
  onClick,
  className = "",
}: ButtonProps) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`.trim();

  if (href) {
    if (href.startsWith("http")) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    if (href.startsWith("mailto:") || href.startsWith("tel:")) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
