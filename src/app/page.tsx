import type { Metadata } from "next";
import Button from "@/components/Button";
import Card from "@/components/Card";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { BOOKING_URL, pageMetadata, PRODUCT_URL, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "HDR Keel",
  path: "/",
  description:
    "Shaine Stead's housing disrepair consultancy for solicitors: case support, training and AI implementation under the firm's instruction.",
});

function CaseIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" role="img" aria-labelledby="case-icon">
      <title id="case-icon">Outsourced case support</title>
      <rect x="4" y="7" width="20" height="15" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M10 7V6a4 4 0 0 1 8 0v1" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function TrainIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" role="img" aria-labelledby="train-icon">
      <title id="train-icon">Training</title>
      <circle cx="14" cy="9" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M6 22c1.5-4 5-6 8-6s6.5 2 8 6" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function AiIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" role="img" aria-labelledby="ai-icon">
      <title id="ai-icon">AI implementation</title>
      <rect x="6" y="6" width="16" height="16" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M10 14h8M14 10v8" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

const organisationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  founder: {
    "@type": "Person",
    name: "Shaine Stead",
  },
  description: site.description,
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationJsonLd) }}
      />
      <PageHero
        kicker="HDR Keel"
        title="Shaine Stead's housing disrepair consultancy for solicitors"
        primaryHref={BOOKING_URL}
        primaryLabel="Book a call"
        secondaryHref="/services"
        secondaryLabel="See the services"
      >
        <p>
          Give your fee earners their time back. An experienced housing
          disrepair fee earner takes case work off their desks and delivers it
          reliably, working under your firm&apos;s conduct.
        </p>
      </PageHero>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <p className="max-w-3xl text-lg leading-relaxed text-muted">
          When your team is short-staffed or overloaded, Shaine brings real
          capacity without the burden and delay of recruiting another
          permanent fee earner. He is a housing disrepair fee earner who has
          personally handled housing disrepair claim work since 2013, offering
          solicitors case support on a monthly retainer, practical training and
          help implementing AI. The instructing firm keeps conduct of its
          cases.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <SectionHeading kicker="What we do" title="Three ways HDR Keel helps firms">
          <p>
            Case support on a monthly retainer, training on housing disrepair
            and AI, and AI implementation inside the firm&apos;s own workflow.
          </p>
        </SectionHeading>
        <div className="grid gap-6 md:grid-cols-3">
          <Card title="Outsourced case support" icon={<CaseIcon />}>
            <p>
              Shaine steps in when firms are short-staffed. Intake, disclosure
              reconciliation, chronology, reports and offers strategy, on a
              monthly retainer.
            </p>
            <p className="mt-4">
              <Button href="/pricing" variant="secondary">
                See pricing
              </Button>
            </p>
          </Card>
          <Card title="Training" icon={<TrainIcon />}>
            <p>
              Staff training on housing disrepair and on AI, from new fee
              earners to experienced practitioners. Individuals or a group at
              no extra cost.
            </p>
            <p className="mt-4">
              <Button href="/services" variant="secondary">
                See services
              </Button>
            </p>
          </Card>
          <Card title="AI implementation" icon={<AiIcon />}>
            <p>
              Setting up AI in a firm&apos;s workflow and consulting on how to
              reduce fee-earner time on housing disrepair cases.
            </p>
            <p className="mt-4">
              <Button href="/services" variant="secondary">
                See services
              </Button>
            </p>
          </Card>
        </div>
      </section>

      <section className="bg-surface px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            kicker="Self-serve option"
            title="HDR Compass, for firms that want to do it themselves"
          >
            <p>
              HDR Compass is the software product for firms that want to keep
              the work in-house. It reads the folder, scores the acceptance
              gate, reconciles disclosure and drafts the report. The firm keeps
              the file, the AI key and the sign-off.
            </p>
          </SectionHeading>
          <div className="flex flex-wrap gap-3">
            <Button href="/hdr-compass" variant="primary">
              About HDR Compass
            </Button>
            <a
              href={PRODUCT_URL}
              className="inline-flex items-center font-display text-sm text-accent-2 hover:text-accent"
            >
              Visit hdrcompass.co.uk
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold text-text">
            Book a call with Shaine
          </h2>
          <p className="mt-4 text-muted">
            Talk through caseload, training or AI implementation. You will
            speak to a housing disrepair fee earner, not a sales team.
          </p>
          <div className="mt-8">
            <Button href={BOOKING_URL} variant="primary">
              Book a call
            </Button>
          </div>
        </div>
      </section>

      <div className="border-t border-white/10 px-6 py-6">
        <ul className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono text-xs uppercase tracking-wider text-muted">
          <li>Solicitors only</li>
          <li aria-hidden="true" className="text-accent">
            ·
          </li>
          <li>Firm keeps conduct</li>
          <li aria-hidden="true" className="text-accent">
            ·
          </li>
          <li>A fee earner who has run the cases</li>
          <li aria-hidden="true" className="text-accent">
            ·
          </li>
          <li>Training and AI support</li>
        </ul>
      </div>
    </>
  );
}
