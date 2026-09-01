import type { Metadata } from "next";
import Button from "@/components/Button";
import Card from "@/components/Card";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { BOOKING_URL, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Outsourced Housing Disrepair Case Support",
  path: "/services/case-support",
  description:
    "A senior housing disrepair fee earner for firms short on capacity. Intake, disclosure, chronology, quantum, reporting and offers work, on a monthly retainer, under the firm's instruction.",
});

const CONDUCT =
  "The instructing firm retains conduct of the matter and all responsibility to its client and to the regulator. HDR Keel works under the firm's instruction and supervision. All advice, correspondence and decisions are the firm's to make and sign off. Intake, disclosure, chronology, quantum, reporting and offers work is undertaken for the instructed firm and delivered for its sign-off. Nothing on this site constitutes legal advice to any firm's client.";

const JURISDICTION =
  "The applicable law depends on the jurisdiction of the client's case (RHWA 2016 in Wales; LTA 1985 and Awaab's Law in England).";

export default function CaseSupportPage() {
  return (
    <>
      <PageHero
        kicker="Case support"
        title="Outsourced housing disrepair case support for firms short on capacity."
        primaryHref={BOOKING_URL}
        primaryLabel="Book a call"
        secondaryHref="/pricing"
        secondaryLabel="See pricing"
      >
        <p>
          When a firm is short-staffed, on annual leave, or simply overloaded,
          the case work still has to run. Shaine steps in to take it off the
          desk. He is a housing disrepair fee earner who has personally handled
          housing disrepair claim work since 2013.
        </p>
      </PageHero>

      <section className="mx-auto max-w-5xl space-y-10 px-6 py-16">
        <SectionHeading kicker="What you get" title="Fee-earner work, on a monthly retainer">
          <p>
            Each item below is a fee-earner task Shaine already runs on live
            matters, delivered under the firm&apos;s instruction and capped at
            no more than 10 hours per week per client so he never
            over-commits.
          </p>
        </SectionHeading>
        <div className="grid gap-6 md:grid-cols-3">
          <Card title="Intake triage">
            <p>
              Go/no-go triage on new files, so a firm knows early which matters
              are worth the time and cost.
            </p>
          </Card>
          <Card title="Disclosure reconciliation">
            <p>
              Reconciling the disclosure against the pleaded defects, so gaps
              and admissions surface while the file is still the firm&apos;s to
              fix.
            </p>
          </Card>
          <Card title="Chronology and quantum">
            <p>
              Building the chronology and the quantum, from the rent record and
              the repair history to a defensible figure.
            </p>
          </Card>
          <Card title="Report drafting">
            <p>
              Drafting the reports and the letters of claim for the
              firm&apos;s review, sign-off and issue.
            </p>
          </Card>
          <Card title="Offers strategy">
            <p>
              Working the offers position, so the firm walks into negotiation
              with the numbers and the Part 36 logic in hand.
            </p>
          </Card>
          <Card title="Surveyor or expert instruction support">
            <p>
              Supporting the instruction of surveyors and experts under the
              pre-action protocol, so the evidence is in place.
            </p>
          </Card>
        </div>
      </section>

      <section className="bg-surface px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <SectionHeading kicker="How it works" title="A clear, predictable process">
            <ol className="body-copy mt-6 list-decimal space-y-2 pl-5 text-base leading-relaxed text-muted">
              <li>Talk it through with Shaine on a call.</li>
              <li>You agree the scope, hours and monthly retainer.</li>
              <li>Shaine works under your instruction and delivers for your sign-off.</li>
              <li>Unused hours roll over into the next month within the same quarter.</li>
              <li>The firm retains conduct and makes the decisions throughout.</li>
            </ol>
          </SectionHeading>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Card title="What is in scope">
              <p>
                Intake go/no-go triage, letter of claim preparation, disclosure
                reconciliation, chronology, quantum, surveyor or expert
                instruction support, report drafting, and offers strategy.
              </p>
            </Card>
            <Card title="What is out of scope">
              <p>
                Advocacy, court attendance, issuing, and anything the firm must
                hold itself. If a matter passes beyond these boundaries, or
                outside England and Wales housing disrepair plus associated
                personal injury arising from it, it is referred back to the
                instructing firm.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <SectionHeading kicker="What happens next" title="What to bring to the first call">
          <p>
            The jurisdiction of the caseload, the matter count, the capacity gap
            (in-house cover or a defined project), and whether the firm needs
            ongoing support or a time-boxed piece of work. From that, Shaine
            recommends the retainer tier or a day rate.
          </p>
          <p className="mt-4">
            <Button href={BOOKING_URL} variant="primary">
              Book a call
            </Button>
          </p>
        </SectionHeading>
        <blockquote className="mt-12 rounded-xl border-l-[3px] border-accent border-y border-r border-white/10 bg-surface p-6 text-base leading-relaxed text-muted sm:p-8">
          <p>{CONDUCT}</p>
          <p className="mt-4">{JURISDICTION}</p>
          <p className="mt-4">
            HDR Keel assists with personal injury only where it arises from
            housing disrepair and only under the instructed firm. HDR Keel
            works as the firm&apos;s processor under a written
            data-processing agreement under Article 28 of the UK GDPR.
          </p>
        </blockquote>
      </section>

      <CtaBand title="Need capacity on a disrepair file?">
        <p>Talk it through with Shaine and agree the scope, hours and retainer.</p>
      </CtaBand>
    </>
  );
}
