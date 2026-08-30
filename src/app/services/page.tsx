import type { Metadata } from "next";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { BOOKING_URL, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  path: "/services",
  description:
    "Outsourced housing disrepair case support, staff training, and AI implementation for solicitors. The firm always keeps conduct of its cases.",
});

const CONDUCT =
  "The instructing firm retains conduct of the matter and all responsibility to its client and to the regulator. HDR Keel works under the firm's instruction and supervision. All advice, correspondence and decisions are the firm's to make and sign off. Intake, disclosure, chronology, quantum, reporting and offers work is undertaken for the instructed firm and delivered for its sign-off. Nothing on this site constitutes legal advice to any firm's client.";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Services"
        title="Case support, training and AI implementation for solicitors"
      >
        <p>
          HDR Keel helps solicitors with outsourced housing disrepair case
          work, staff training, and AI implementation. The firm always keeps
          conduct of its cases.
        </p>
      </PageHero>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="rounded-xl border border-white/10 bg-surface p-8">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent-2">
            Service A
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-text">
            Outsourced case support
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Shaine steps in when a firm is short-staffed, on annual leave, or
            simply overloaded. He does intake triage, disclosure
            reconciliation, chronology, quantum, report drafting and offers
            strategy on housing disrepair cases. The firm retains conduct.
            Shaine is the outsourced fee earner. Capped at about 10 hours per
            week per client so he never over-commits.
          </p>
          <p className="mt-6 text-sm leading-relaxed text-muted">{CONDUCT}</p>
          <div className="mt-8">
            <Button href="/pricing" variant="primary">
              See pricing
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="rounded-xl border border-white/10 bg-surface p-8">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent-2">
            Service B
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-text">
            Training
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Staff training on housing disrepair and on AI for legal work, from
            new fee earners to experienced practitioners. A group session
            counts as one booking, so a firm can send a whole team at no extra
            cost. Daily rate for one-offs, reduced for a weekly block.
          </p>
          <div className="mt-8">
            <Button href={BOOKING_URL} variant="primary">
              Book a training day
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="rounded-xl border border-white/10 bg-surface p-8">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent-2">
            Service C
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-text">
            AI implementation and efficiency consulting
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Setting up and embedding AI tools in a firm&apos;s workflow so fee
            earners work faster and more consistently, and consulting on how to
            reduce fee-earner time on housing disrepair cases.
          </p>
          <div className="mt-8">
            <Button href={BOOKING_URL} variant="primary">
              Talk to Shaine
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <SectionHeading
          kicker="Self-serve"
          title="HDR Compass is the option for firms that want to do it themselves"
        >
          <p>
            If the firm wants to keep the work in-house, HDR Compass is the
            software product for that route. HDR Keel remains available for
            outsourced help.
          </p>
        </SectionHeading>
        <Button href="/hdr-compass" variant="secondary">
          About HDR Compass
        </Button>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold text-text">
            Book a call
          </h2>
          <div className="mt-8">
            <Button href={BOOKING_URL} variant="primary">
              Book a call
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
