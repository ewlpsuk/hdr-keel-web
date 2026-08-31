import Link from "next/link";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
};

const base =
  "inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 font-display text-base font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-2";

const variants = {
  primary: "bg-accent text-background hover:brightness-110",
  secondary:
    "border border-accent bg-transparent text-accent hover:bg-accent/10",
};

export default function Button({
  href,
  variant = "primary",
  children,
  type = "button",
  onClick,
  className = "",
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`.trim();

  if (href) {
    if (href.startsWith("http")) {
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
