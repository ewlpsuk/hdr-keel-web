export const site = {
  name: "HDR Keel",
  description:
    "Shaine Stead's housing disrepair consultancy for solicitors: case support, training and AI implementation.",
  url: "https://hdrkeel.co.uk",
};

/**
 * Calendar booking link for "Book a call" CTAs. Google Calendar appointment
 * schedule; auto-attaches a Google Meet link. Override via NEXT_PUBLIC_BOOKING_URL.
 * NOTE: the default currently points at Shaine's shared booking slot; swap to a
 * dedicated HDR Keel slot once one is created.
 */
export const BOOKING_URL =
  process.env.NEXT_PUBLIC_BOOKING_URL || "https://calendar.app.google/Z7C6iRfHa6n6d5aK7";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/hdr-compass", label: "HDR Compass" },
  { href: "/contact", label: "Contact" },
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
      images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description: input.description,
      images: ["/og-image.svg"],
    },
  };
}
