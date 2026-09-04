import type { Metadata } from "next";
import BrandVisual from "@/components/BrandVisual";
import Card from "@/components/Card";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { REFERRED_BACK } from "@/lib/case-lifecycle";
import { CONDUCT_NOTICE, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "How it works",
  path: "/how-it-works",
  description:
    "From the first call to the first month of work. HDR Keel works under the instructing firm's conduct.",
});

const steps = [
  {
    step: "1",
    title: "Talk it through",
    text: "A short call with the practice. You set out the caseload, the capacity gap and whether you need ongoing support, a defined piece of work, or training.",
  },
  {
    step: "2",
    title: "Agree the engagement",
    text: "We agree the scope, the hours and the fee to the work, including where the need is administrative rather than fee-earner. Conduct, sign-off and the Article 28 data-processing agreement are confirmed in writing.",
  },
  {
    step: "3",
    title: "The team does the work",
    text: "We work under your instruction and deliver for your sign-off. Capacity is agreed so we never over-commit.",
  },
  {
    step: "4",
    title: "The firm keeps conduct",
    text: "The instructing firm retains conduct and makes the decisions throughout. Everything is the firm's to approve and issue.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        kicker="How it works"
        title="A clear, predictable engagement"
        visualOnMobile
        visual={
          <BrandVisual
            src="/images/practice-street.jpg"
            alt="A British high street of terraced buildings"
            className="h-full min-h-[18rem]"
            imgClassName="aspect-[4/3] lg:aspect-auto lg:h-full"
          />
        }
      >
        <p>
          From the first call to the first month of work. The firm keeps
          conduct and makes the decisions throughout.
        </p>
      </PageHero>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <SectionHeading kicker="The process" title="Four steps, no surprises" />
        <ol className="space-y-6">
          {steps.map((item) => (
            <li
              key={item.step}
              className="flex gap-6 rounded-xl border border-line border-l-[3px] border-l-accent bg-surface p-6"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-accent font-display text-xl font-semibold text-on-accent">
                {item.step}
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-text">
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
              The 26-stage housing disrepair file (from vetting through issue,
              evidence, trial preparation, Part 36 and post-judgment) is
              undertaken for the instructed firm and delivered for its
              sign-off. Administrative support on those files is included where
              that is what the matter needs.
            </p>
          </SectionHeading>
          <div className="grid items-start gap-8 lg:grid-cols-2">
            <BrandVisual
              src="/images/issue-pack.jpg"
              alt="An issue pack prepared for the instructing firm to sign off"
              className="aspect-[4/3]"
              imgClassName="aspect-[4/3]"
            />
            <Card title="Referred back to the instructing firm" heading="h2">
              <p className="mb-4">
                The instructing firm remains the solicitor on the record. We do
                not appear as advocate, we do not attend court and we do not
                issue:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                {REFERRED_BACK.map((item) => (
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
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <blockquote className="rounded-xl border border-line border-l-[3px] border-l-accent bg-surface p-6 text-base leading-relaxed text-muted sm:p-8">
          {CONDUCT_NOTICE}
        </blockquote>
      </section>

      <CtaBand title="Start with a call">
        <p>
          Tell us the jurisdiction of the caseload, the matter count, the
          capacity gap and whether you need ongoing support or a time-boxed
          piece of work.
        </p>
      </CtaBand>
    </>
  );
}
