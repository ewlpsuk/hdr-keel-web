import Link from "next/link";
import Logo from "@/components/Logo";
import { CONTACT_EMAIL, PRODUCT_URL, PRIVACY_EMAIL, footerNavItems } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <Logo size="footer" />
          <p className="mt-4 max-w-xs text-base text-muted">
            Housing disrepair consultancy for solicitor firms in England and
            Wales.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-col gap-2">
          {footerNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base text-muted hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="text-base text-muted">
          <p>
            Enquiries:{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-accent hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
          <p className="mt-2">
            <a
              href={PRODUCT_URL}
              className="text-accent hover:underline"
            >
              HDR Compass product site
            </a>
          </p>
          <p className="mt-6">
            HDR Keel is not a claims management company, not an SRA-regulated
            law firm and not a provider of legal advice to consumers.
          </p>
          <p className="mt-2">
            Controller contact:{" "}
            <a
              href={`mailto:${PRIVACY_EMAIL}`}
              className="text-accent hover:underline"
            >
              {PRIVACY_EMAIL}
            </a>
          </p>
          <p className="mt-4">© {new Date().getFullYear()} HDR Keel</p>
          <p className="mt-2">
            <Link href="/privacy" className="text-accent hover:underline">
              Privacy notice
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
