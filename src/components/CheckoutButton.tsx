/**
 * Stripe Checkout for the HDR Keel course.
 *
 * The site is a static export (Cloudflare Pages, output: "export"), so there
 * is no server to create Checkout Sessions. We use Stripe Payment Links:
 * each purchasable item (three levels + the full package) has a Payment Link
 * created in the Stripe dashboard, and the buttons below are plain links to
 * those URLs. This is the zero-backend pattern that fits the static export.
 *
 * The Payment Link URLs are env-overridable (NEXT_PUBLIC_COURSE_*_URL). Until
 * live keys are in, they default to a placeholder that tells the visitor the
 * checkout is coming online. Set the env vars in Cloudflare Pages when the
 * HDR Compass Stripe account is live.
 */

export const COURSE_PAYMENT_LINKS = {
  fundamentals:
    process.env.NEXT_PUBLIC_COURSE_FUNDAMENTALS_URL ||
    "https://buy.stripe.com/PLACEHOLDER_FUNDAMENTALS",
  craft:
    process.env.NEXT_PUBLIC_COURSE_CRAFT_URL ||
    "https://buy.stripe.com/PLACEHOLDER_CRAFT",
  command:
    process.env.NEXT_PUBLIC_COURSE_COMMAND_URL ||
    "https://buy.stripe.com/PLACEHOLDER_COMMAND",
  package:
    process.env.NEXT_PUBLIC_COURSE_PACKAGE_URL ||
    "https://buy.stripe.com/PLACEHOLDER_PACKAGE",
};

function isLive(url: string): boolean {
  return url.includes("buy.stripe.com") && !url.includes("PLACEHOLDER");
}

export default function CheckoutButton({
  levelSlug,
  price,
  label,
  full,
}: {
  levelSlug: keyof typeof COURSE_PAYMENT_LINKS;
  price: number;
  label: string;
  full?: boolean;
}) {
  const url = COURSE_PAYMENT_LINKS[levelSlug];
  const live = isLive(url);

  if (!live) {
    return (
      <span className="inline-flex cursor-not-allowed items-center justify-center rounded-xl border border-line bg-surface px-5 py-3 text-sm font-semibold text-muted">
        {label} - checkout online shortly
      </span>
    );
  }

  return (
    <a
      href={url}
      className={`inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition ${
        full ? "bg-accent text-bg hover:bg-accent-2" : "border border-accent text-accent hover:bg-accent/10"
      }`}
    >
      {label} - £{price}
    </a>
  );
}
