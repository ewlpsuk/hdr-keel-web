"use client";

import { useEffect, useState } from "react";
import BrandVisual from "@/components/BrandVisual";
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
  "A curated reading list. Each working day we read the legal, housing and legal-technology press and link to stories solicitors working in housing disrepair may want to read. It is a reading list, not legal advice and not HDR Keel's own commentary.";

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
      className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-accent hover:underline focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface"
    >
      Read the source
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
    <article className="flex h-full flex-col rounded-xl border border-line bg-surface p-6">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs uppercase tracking-wider text-muted">
        <span>{item.date}</span>
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent-2" />
        <span>{item.source}</span>
      </div>
      <div className="mt-3 flex items-center gap-3">
        <CategoryMarks name={item.category as (typeof CATEGORY_ORDER)[number]} size={24} className="shrink-0" />
        <span className="text-[11px] font-semibold uppercase tracking-wider text-accent-2">
          {item.category}
        </span>
      </div>
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-3 block focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface"
      >
        <h3 className="font-display text-xl font-semibold leading-snug text-text group-hover:underline">
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

  const featured = items && items.length > 0 ? items[0] : null;
  const rest = items ? items.slice(1) : [];
  const grouped = CATEGORY_ORDER.map((category) => ({
    category,
    list: rest.filter((item) => item.category === category),
  })).filter((group) => group.list.length > 0);

  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-background px-6 pl-8 pt-12 sm:pl-10 sm:pt-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-2 bg-accent sm:w-2.5"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-2 w-1.5 bg-accent-2 sm:left-2.5"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 pb-16 lg:grid-cols-2">
          <div>
            <p className="inline-block rounded-sm bg-accent-2-soft px-2 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-2">
              Reading list
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-text sm:text-5xl">
              Housing law, case law, regulation, legal tech and firm practice
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {INTRO}
            </p>
          </div>
          <BrandVisual
            src="/images/workflow-desk.jpg"
            alt="A fee-earner's desk with organised case papers"
            className="aspect-[4/3]"
            imgClassName="aspect-[4/3]"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        {error ? (
          <p className="rounded-xl border border-line bg-surface p-6 text-base text-muted">
            The reading list could not be loaded right now. Please try again shortly.
          </p>
        ) : !items ? (
          <p className="text-base text-muted">Loading the reading list...</p>
        ) : (
          <div className="space-y-16">
            {featured && (
              <article className="overflow-hidden rounded-xl border border-line border-t-[3px] border-t-accent-2 bg-surface">
                <div className="flex flex-col justify-center gap-3 p-8">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs uppercase tracking-wider text-muted">
                    <span>{featured.date}</span>
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent-2" />
                    <span>{featured.source}</span>
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent-2" />
                    <span className="text-accent-2">{featured.category}</span>
                  </div>
                  <a
                    href={featured.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface"
                  >
                    <h2 className="font-display text-2xl font-semibold leading-tight text-text sm:text-3xl">
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
              </article>
            )}

            {grouped.map((group) => (
              <div key={group.category}>
                <div className="mb-6 flex items-center gap-4 border-b border-line pb-4">
                  <CategoryMarks name={group.category} size={36} className="text-accent" />
                  <span className="text-[13px] font-semibold uppercase tracking-wider text-accent-2">
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

            <p className="max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
              {SECONDARY}
            </p>

            <blockquote className="rounded-xl border border-line border-l-[3px] border-l-accent bg-surface p-6 text-base leading-relaxed text-muted sm:p-8">
              {FOOTER}
            </blockquote>
          </div>
        )}
      </section>
    </>
  );
}
