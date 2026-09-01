"use client";

import { useEffect, useState } from "react";
import CategoryMarks from "@/components/CategoryMarks";

type NewsItem = {
  title: string;
  source: string;
  url: string;
  category: string;
  date: string;
  summary: string;
};

const CATEGORY_ORDER = [
  "Housing law",
  "Case law",
  "Regulation",
  "Legal tech",
  "Firm practice",
] as const;

const INTRO =
  "This page is a curated reading list. Each working day we read the legal, housing and legal-technology press and link to stories we think solicitors working in housing disrepair may want to read. It is a reading list, not legal advice and not HDR Keel's own commentary.";

const SECONDARY =
  "This reading list is prepared by the HDR Keel team. We review the main housing-law and legal-technology sources and add items as they publish.";

const FOOTER =
  "These are links to third-party websites, which open in a new tab. HDR Keel is not responsible for the content of any third-party site. Nothing on this page is legal advice to any firm's client, and it is not HDR Keel's own advice. Inclusion in this list is not an endorsement of the source, the article or the views expressed.";

function ExternalLink({ url }: { url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-accent-2 transition-colors hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent-2 focus:ring-offset-2 focus:ring-offset-surface"
    >
      External link
      <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
        <path
          d="M2 2h8v8M10 2L4 8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}

function StandardCard({ item }: { item: NewsItem }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-white/10 bg-surface p-6">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-wider text-muted">
        <span>{item.date}</span>
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
        <span>{item.source}</span>
      </div>
      <div className="mt-3 flex items-center gap-3">
        <CategoryMarks name={item.category as (typeof CATEGORY_ORDER)[number]} size={24} className="shrink-0" />
        <span className="font-mono text-[11px] uppercase tracking-wider text-accent-2">
          {item.category}
        </span>
      </div>
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-3 block focus:outline-none focus:ring-2 focus:ring-accent-2 focus:ring-offset-2 focus:ring-offset-surface"
      >
        <h3 className="font-display text-xl font-bold leading-snug text-text transition-transform group-hover:translate-x-0.5 group-hover:underline">
          {item.title}
        </h3>
      </a>
      <p className="mt-2 line-clamp-2 flex-1 text-base leading-relaxed text-muted">
        {item.summary}
      </p>
      <div className="mt-4">
        <ExternalLink url={item.url} />
      </div>
    </article>
  );
}

export default function NewsList() {
  const [items, setItems] = useState<NewsItem[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/news/items.json")
      .then((res) => {
        if (!res.ok) throw new Error("failed to load");
        return res.json();
      })
      .then((data) => setItems(data.items))
      .catch(() => setError(true));
  }, []);

  // First item is the featured broadcast; rest are segmented by category.
  const featured = items && items.length > 0 ? items[0] : null;
  const rest = items ? items.slice(1) : [];
  const grouped = CATEGORY_ORDER.map((category) => ({
    category,
    list: rest.filter((item) => item.category === category),
  })).filter((group) => group.list.length > 0);
  const earlier = items ? items.slice(1) : [];

  return (
    <>
      {/* Masthead band */}
      <section className="relative border-b-[3px] border-accent bg-background px-6 pt-12 sm:pt-16">
        {/* Ticker rail */}
        <div
          aria-hidden="true"
          className="mb-8 flex h-6 items-center overflow-hidden border-b border-white/10 bg-surface px-6"
        >
          <div className="flex shrink-0 items-center gap-6 whitespace-nowrap font-mono text-xs uppercase tracking-wider text-muted motion-safe:animate-ticker">
            {[...CATEGORY_ORDER, ...CATEGORY_ORDER, ...CATEGORY_ORDER].map(
              (cat, i) => (
                <span key={`${cat}-${i}`} className="flex items-center gap-6">
                  {cat}
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
              )
            )}
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_220px]">
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent-2">
              The news channel
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-text sm:text-5xl">
              Housing law, case law, regulation, legal tech and firm practice
            </h1>
            <p className="body-copy mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {INTRO}
            </p>
            <div className="mt-8 flex items-center gap-4">
              {CATEGORY_ORDER.map((cat) => (
                <CategoryMarks
                  key={cat}
                  name={cat}
                  size={32}
                  className="text-accent-2"
                />
              ))}
            </div>
          </div>
          {/* Broadcast texture (desktop only, fixed height so it never stretches the hero) */}
          <div
            aria-hidden="true"
            className="hidden flex-col items-end justify-center gap-4 lg:flex"
          >
            {CATEGORY_ORDER.map((cat) => (
              <CategoryMarks
                key={cat}
                name={cat}
                size={56}
                className="opacity-10"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        {error ? (
          <p className="rounded-xl border border-white/10 bg-surface p-6 text-base text-muted">
            The reading list could not be loaded right now. Please try again shortly.
          </p>
        ) : !items ? (
          <p className="text-base text-muted">Loading the reading list...</p>
        ) : (
          <div className="space-y-16">
            {/* Featured broadcast */}
            {featured && (
              <article className="overflow-hidden rounded-xl bg-surface">
                <div className="grid min-h-[220px] lg:grid-cols-[42%_1fr]">
                  <div
                    aria-hidden="true"
                    className="flex items-center justify-center bg-background p-8"
                  >
                    <CategoryMarks
                      name={featured.category as (typeof CATEGORY_ORDER)[number]}
                      size={96}
                      className="text-accent-2"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-3 p-8">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-wider text-muted">
                      <span>{featured.date}</span>
                      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>{featured.source}</span>
                      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
                      <span className="text-accent-2">{featured.category}</span>
                    </div>
                    <a
                      href={featured.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block focus:outline-none focus:ring-2 focus:ring-accent-2 focus:ring-offset-2 focus:ring-offset-surface"
                    >
                      <h2 className="font-display text-2xl font-bold leading-tight text-text sm:text-3xl">
                        {featured.title}
                      </h2>
                    </a>
                    <p className="text-base leading-relaxed text-muted sm:text-lg">
                      {featured.summary}
                    </p>
                    <div className="mt-2">
                      <ExternalLink url={featured.url} />
                    </div>
                  </div>
                </div>
              </article>
            )}

            {/* Category segments */}
            {grouped.map((group) => (
              <div key={group.category}>
                <div className="mb-6 flex items-center gap-4 border-b border-white/10 pb-4">
                  <CategoryMarks name={group.category} size={48} className="text-accent-2" />
                  <span className="font-mono text-[13px] uppercase tracking-wider text-accent-2">
                    {group.category}
                  </span>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  {group.list.map((item) => (
                    <StandardCard key={item.url} item={item} />
                  ))}
                </div>
              </div>
            ))}

            {/* Earlier items (archive) */}
            <div className="border-t border-white/10 pt-8">
              <p className="mb-6 font-mono text-[13px] uppercase tracking-wider text-muted">
                Earlier items
              </p>
              <ul className="divide-y divide-white/10">
                {earlier.map((item) => (
                  <li key={item.url} className="flex items-center gap-4 py-4">
                    <span className="shrink-0 font-mono text-xs uppercase tracking-wider text-muted">
                      {item.date}
                    </span>
                    <CategoryMarks
                      name={item.category as (typeof CATEGORY_ORDER)[number]}
                      size={24}
                      className="shrink-0 text-accent-2"
                    />
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-w-0 flex-1 font-display text-base font-medium text-text hover:underline focus:outline-none focus:ring-2 focus:ring-accent-2 focus:ring-offset-2 focus:ring-offset-surface"
                    >
                      {item.title}
                    </a>
                    <span className="hidden shrink-0 font-mono text-xs uppercase tracking-wider text-muted sm:inline">
                      {item.source}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="body-copy max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
              {SECONDARY}
            </p>

            <blockquote className="mt-10 rounded-xl border-l-[3px] border-accent border-y border-r border-white/10 bg-surface p-6 text-base leading-relaxed text-muted sm:p-8">
              {FOOTER}
            </blockquote>
          </div>
        )}
      </section>
    </>
  );
}
