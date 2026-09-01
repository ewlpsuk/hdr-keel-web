import Link from "next/link";
import Logo from "@/components/Logo";
import { navItems, PRODUCT_URL } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-background">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <Logo size="footer" />
          <p className="mt-4 text-base text-muted">
            Shaine Stead&apos;s housing disrepair consultancy for solicitors
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display text-base text-muted hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/for-solicitors"
            className="font-display text-base text-muted hover:text-accent"
          >
            Who it is for
          </Link>
          <Link
            href="/how-it-works"
            className="font-display text-base text-muted hover:text-accent"
          >
            How it works
          </Link>
          <Link
            href="/news"
            className="font-display text-base text-muted hover:text-accent"
          >
            News
          </Link>
        </nav>
        <div className="text-base text-muted">
          <a
            href={PRODUCT_URL}
            className="text-accent-2 hover:text-accent"
          >
            HDR Compass product site
          </a>
          <p className="mt-4">HDR Keel is operated by Shaine Stead</p>
          <p className="mt-2">
            Controller contact:{" "}
            <a
              href="mailto:privacy@hdrkeel.co.uk"
              className="text-accent-2 hover:text-accent"
            >
              privacy@hdrkeel.co.uk
            </a>
          </p>
          <p className="mt-2">
            HDR Keel is not a claims management company, not an SRA-regulated
            law firm and not a provider of legal advice to consumers.
          </p>
          <p className="mt-2">© 2026 HDR Keel</p>
          <p className="mt-2">
            <Link href="/privacy" className="text-accent-2 hover:text-accent">
              Privacy notice
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
