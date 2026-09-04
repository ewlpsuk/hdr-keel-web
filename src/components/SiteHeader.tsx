"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "@/components/Button";
import Logo from "@/components/Logo";
import { BOOKING_URL, navItems } from "@/lib/site";

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/" || pathname === "";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3.5">
          <Logo size="header" />
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-base ${
                  isActive(pathname, item.href)
                    ? "font-semibold text-accent underline decoration-accent-2 decoration-2 underline-offset-8"
                    : "text-muted hover:text-text"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button href={BOOKING_URL} variant="primary">
              Book a call
            </Button>
          </nav>
          <div className="flex items-center gap-2 lg:hidden">
            <Button href={BOOKING_URL} variant="primary" size="compact">
              Book a call
            </Button>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-text"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? (
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>
      {open ? (
        <nav
          id="mobile-nav"
          className="fixed inset-x-0 bottom-0 top-[57px] z-30 flex flex-col gap-1 overflow-y-auto border-t border-line bg-background px-6 py-6 lg:hidden"
          aria-label="Mobile"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-md px-3 py-3 text-lg ${
                isActive(pathname, item.href)
                  ? "bg-accent-soft font-semibold text-accent"
                  : "text-muted hover:text-text"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </>
  );
}
