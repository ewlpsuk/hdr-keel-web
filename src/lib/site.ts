export const site = {
  name: "HDR Keel",
  description:
    "Housing disrepair consultancy for solicitors: case support, training and AI implementation, under the instructing firm's conduct.",
  url: "https://hdrkeel.co.uk",
};

/**
 * Public pricing lock (04/09/2026): there is no public rate card.
 * Do not publish monthly retainer tiers, indicative Home prices, or a
 * /pricing rate card. /pricing may exist as a noindex stub with no figures.
 * Conversion is the booking slot and hello@hdrkeel.co.uk. The 31/08
 * onboarding four-tier lock is superseded.
 */

/**
 * Calendar booking link for "Book a call" CTAs. Google Calendar appointment
 * schedule; auto-attaches a Google Meet link. Override via NEXT_PUBLIC_BOOKING_URL.
 */
export const BOOKING_URL =
  process.env.NEXT_PUBLIC_BOOKING_URL || "https://calendar.app.google/35S3MsowmvkoSJ9d8";

/**
 * The HDR Compass software product site. Override via NEXT_PUBLIC_PRODUCT_URL.
 */
export const PRODUCT_URL =
  process.env.NEXT_PUBLIC_PRODUCT_URL || "https://hdrcompass.co.uk";

export const CONTACT_EMAIL = "hello@hdrkeel.co.uk";
export const PRIVACY_EMAIL = "privacy@hdrkeel.co.uk";

export const CONDUCT_NOTICE =
  "The instructing firm retains conduct of the matter and all responsibility to its client and to the regulator. HDR Keel works under the firm's instruction and supervision. All advice, correspondence and decisions are the firm's to make and sign off. Nothing on this site constitutes legal advice to any firm's client.";

export const navItems = [
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerNavItems = [
  ...navItems,
  { href: "/for-solicitors", label: "Who it is for" },
  { href: "/news", label: "News" },
  { href: "/hdr-compass", label: "HDR Compass" },
] as const;

export function pageUrl(path: string) {
  const normalised = path === "/" ? "/" : path.replace(/\/$/, "");
  return new URL(normalised, site.url).toString();
}

export function pageMetadata(input: {
  title: string;
  description: string;
  path: string;
}) {
  const url = pageUrl(input.path);
  const title =
    input.path === "/" ? site.name : `${input.title} | ${site.name}`;
  return {
    title,
    description: input.description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: input.description,
      url,
      siteName: site.name,
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description: input.description,
      images: ["/og-image.png"],
    },
  };
}
