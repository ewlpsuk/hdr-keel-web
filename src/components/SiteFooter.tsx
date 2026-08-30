import Link from "next/link";
import Logo from "@/components/Logo";
import { navItems, PRODUCT_URL } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-background">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <Logo size="footer" />
          <p className="mt-4 text-sm text-muted">
            Shaine Stead&apos;s housing disrepair consultancy for solicitors
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display text-sm text-muted hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="text-sm text-muted">
          <a
            href={PRODUCT_URL}
            className="text-accent-2 hover:text-accent"
          >
            HDR Compass product site
          </a>
          <p className="mt-4">HDR Keel is operated by Shaine Stead</p>
          <p className="mt-2">
            HDR Keel is not a claims management company, not an SRA-regulated
            law firm and not a provider of legal advice to consumers.
          </p>
          <p className="mt-2">© 2026 HDR Keel</p>
        </div>
      </div>
    </footer>
  );
}
