"use client";

import { useEffect, useState } from "react";
import SectionHeading from "@/components/SectionHeading";

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
];

const INTRO =
  "Most items here are readily available to anyone who reads the main housing-law and legal-trade press. We gather them into one place so practitioners do not have to, and we pick the items that are most likely to matter to firms and fee earners working in housing disrepair. Where a piece covers a live consultation, a coming-into-force date or a tribunal or court development, we say so plainly.";

const FOOTER =
  "These are links to third-party websites, which open in a new tab. HDR Keel is not responsible for the content of any third-party site. Nothing on this page is legal advice to any firm's client, and it is not HDR Keel's own advice. Inclusion in this list is not an endorsement of the source, the article or the views expressed.";

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

  const grouped = items
    ? CATEGORY_ORDER.map((category) => ({
        category,
        list: items.filter((item) => item.category === category),
      })).filter((group) => group.list.length > 0)
    : [];

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeading kicker="What this is" title="A reading list, gathered for practitioners">
        <p>{INTRO}</p>
        <p className="mt-4">
          This reading list is prepared by the HDR Keel team. We review the
          main housing-law and legal-technology sources and add items as they
          publish.
        </p>
      </SectionHeading>

      {error ? (
        <p className="rounded-xl border border-white/10 bg-surface p-6 text-base text-muted">
          The reading list could not be loaded right now. Please try again
          shortly.
        </p>
      ) : !items ? (
        <p className="text-base text-muted">Loading the reading list...</p>
      ) : (
        <div className="space-y-12">
          {grouped.map((group) => (
            <div key={group.category}>
              <h2 className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent-2">
                {group.category}
              </h2>
              <ul className="space-y-4">
                {group.list.map((item) => (
                  <li
                    key={item.url}
                    className="rounded-xl border border-white/10 bg-surface p-6"
                  >
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="font-mono text-xs uppercase tracking-wider text-muted">
                        {item.date}
                      </span>
                      <span aria-hidden="true" className="hidden text-accent sm:inline">
                        ·
                      </span>
                      <span className="font-mono text-xs uppercase tracking-wider text-muted">
                        {item.source}
                      </span>
                    </div>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-2 block"
                    >
                      <h3 className="font-display text-xl font-medium text-text transition-colors group-hover:text-accent">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-base leading-relaxed text-muted">
                        {item.summary}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent-2">
                        External link
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          aria-hidden="true"
                        >
                          <path
                            d="M2 2h8v8M10 2L4 8"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      <blockquote className="mt-16 rounded-xl border-l-[3px] border-accent border-y border-r border-white/10 bg-surface p-6 text-base leading-relaxed text-muted sm:p-8">
        {FOOTER}
      </blockquote>
    </section>
  );
}
