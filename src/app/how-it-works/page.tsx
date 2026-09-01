import type { Metadata } from "next";
import Button from "@/components/Button";
import Card from "@/components/Card";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { BOOKING_URL, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "How it works",
  path: "/how-it-works",
  description:
    "From the first call to the retainer, the Article 28 data agreement and the first month of work. HDR Keel works under the firm's conduct.",
});

const steps = [
  {
    step: "1",
    title: "Talk it through",
    text: "You speak to Shaine, a housing disrepair fee earner, on a short call. You agree the scope, the hours and the retainer tier that fits.",
  },
  {
    step: "2",
    title: "Agree the retainer",
    text: "You agree the scope, hours and monthly retainer, and the firm's conduct and sign-off are affirmed in writing.",
  },
  {
    step: "3",
    title: "Processing under Article 28",
    text: "HDR Keel processes claimant data only as the firm's processor, under a written data-processing agreement under Article 28 of the UK GDPR.",
  },
  {
    step: "4",
    title: "Shaine does the work",
    text: "Shaine works under your instruction, capped at no more than 10 hours per week per client, and delivers for your sign-off.",
  },
  {
    step: "5",
    title: "The firm keeps conduct",
    text: "The instructing firm retains conduct and makes the decisions throughout. Everything is the firm's to approve and issue.",
  },
];

const referredBack = [
  "Advocacy",
  "Court attendance",
  "Issuing",
  "Anything the firm must hold itself",
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        kicker="How it works"
        title="A clear, predictable engagement"
      >
        <p>
          From the first call to the retainer, the Article 28 data agreement
          and the first month of work. The firm keeps conduct and makes the
          decisions throughout.
        </p>
      </PageHero>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <SectionHeading kicker="The process" title="Five steps, no surprises" />
        <ol className="space-y-6">
          {steps.map((item) => (
            <li
              key={item.step}
              className="flex gap-6 rounded-xl border border-white/10 bg-surface p-6"
            >
              <span className="font-display text-3xl font-bold text-accent">
                {item.step}
              </span>
              <div>
                <h3 className="font-display text-xl font-medium text-text">
                  {item.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted">
                  {item.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-surface px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <SectionHeading kicker="Scope" title="What is in and out of scope">
            <p>
              Intake go/no-go triage, letter of claim preparation, disclosure
              reconciliation, chronology, quantum, surveyor or expert
              instruction support, report drafting and offers strategy are
              undertaken for the instructed firm and delivered for its sign-off.
            </p>
          </SectionHeading>
          <Card title="Referred back to the instructing firm" heading="h2">
            <p className="mb-4">
              These are held by the firm itself and are not undertaken by HDR
              Keel:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              {referredBack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-4">
              If a matter passes beyond these boundaries, or outside England
              and Wales housing disrepair plus associated personal injury
              arising from it, it is referred back to the instructing firm.
            </p>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <blockquote className="rounded-xl border-l-[3px] border-accent border-y border-r border-white/10 bg-surface p-6 text-base leading-relaxed text-muted sm:p-8">
          The instructing firm retains conduct of the matter and all
          responsibility to its client and to the regulator. HDR Keel works
          under the firm&apos;s instruction and supervision. All advice,
          correspondence and decisions are the firm&apos;s to make and sign off.
          Nothing on this site constitutes legal advice to any firm&apos;s
          client.
        </blockquote>
      </section>

      <CtaBand title="Start with a call">
        <p>
          Tell Shaine the jurisdiction of the caseload, the matter count, the
          capacity gap and whether you need ongoing support or a time-boxed
          piece of work.
        </p>
      </CtaBand>
    </>
  );
}
