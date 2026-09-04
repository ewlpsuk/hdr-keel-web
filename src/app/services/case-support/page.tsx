import type { Metadata } from "next";
import BrandVisual from "@/components/BrandVisual";
import Button from "@/components/Button";
import Card from "@/components/Card";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { LIFECYCLE_PHASES, REFERRED_BACK } from "@/lib/case-lifecycle";
import { BOOKING_URL, CONDUCT_NOTICE, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Outsourced Housing Disrepair Case Support",
  path: "/services/case-support",
  description:
    "Housing disrepair case support from vetting through to post-judgment. The 26-stage file, under the instructing firm's conduct.",
});

export default function CaseSupportPage() {
  return (
    <>
      <PageHero
        kicker="Case support"
        title="The housing disrepair file, from vetting through to post-judgment"
        primaryHref={BOOKING_URL}
        primaryLabel="Book a call"
        secondaryHref="/how-it-works"
        secondaryLabel="How it works"
        visualOnMobile
        visual={
          <BrandVisual
            src="/images/case-files.jpg"
            alt="Case files and a chronology on a fee-earner's desk"
            className="h-full min-h-[18rem]"
            imgClassName="aspect-[4/3] lg:aspect-auto lg:h-full"
          />
        }
      >
        <p>
          When a firm is short-staffed, on leave, or simply overloaded, the
          case work still has to run. We work the file under instruction, for
          the whole lifecycle or the stage that is blocking the desk, and
          deliver every piece for the firm&apos;s sign-off.
        </p>
      </PageHero>

      <section className="bg-accent-soft px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <p className="max-w-3xl text-base leading-relaxed text-text sm:text-lg">
            Housing disrepair files in this practice run on a 26-stage
            lifecycle: pre-action, issue, case management, evidence, trial
            preparation, then settlement and enforcement. Every deliverable is
            for the firm&apos;s sign-off. The firm stays on the record.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading
          kicker="The 26-stage file"
          title="What we run, in the order the work actually lands"
        >
          <p>
            Instruct us for the whole matter, for a phase, or for overflow on
            the stages that are blocking the team. Administrative support on
            the same files is included where that is what the matter needs.
          </p>
        </SectionHeading>

        <div className="space-y-20">
          {LIFECYCLE_PHASES.map((phase) => {
            const kickerClass =
              phase.tone === "copper"
                ? "bg-accent-2 text-on-accent"
                : "bg-accent text-on-accent";
            const badgeClass =
              phase.tone === "copper"
                ? "bg-accent-2 text-on-accent"
                : "bg-accent text-on-accent";
            const ruleClass =
              phase.tone === "copper" ? "border-accent-2/30" : "border-accent/20";
            const cardEdge =
              phase.tone === "copper"
                ? "border-l-accent-2"
                : "border-l-accent";

            return (
              <div key={phase.range}>
                <div
                  className={`mb-6 flex flex-wrap items-end justify-between gap-4 border-b pb-4 ${ruleClass}`}
                >
                  <div>
                    <p
                      className={`inline-block rounded-sm px-2 py-1 text-xs font-semibold uppercase tracking-[0.16em] ${kickerClass}`}
                    >
                      {phase.kicker}
                    </p>
                    <h2 className="mt-3 font-display text-2xl font-semibold text-text sm:text-3xl">
                      {phase.title}
                    </h2>
                  </div>
                </div>
                <div
                  className={`mb-6 ${
                    phase.visual
                      ? "grid items-start gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(14rem,18rem)]"
                      : ""
                  }`}
                >
                  <p className="max-w-3xl text-base leading-relaxed text-muted">
                    {phase.intro}
                  </p>
                  {phase.visual ? (
                    <BrandVisual
                      src={phase.visual.src}
                      alt={phase.visual.alt}
                      className="aspect-[4/3]"
                      imgClassName="aspect-[4/3]"
                    />
                  ) : null}
                </div>
                <ol className="grid gap-4 sm:grid-cols-2">
                  {phase.stages.map((stage) => (
                    <li
                      key={stage.n}
                      className={`flex gap-4 rounded-xl border border-line border-l-[3px] bg-surface p-5 ${cardEdge}`}
                    >
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md font-display text-sm font-semibold ${badgeClass}`}
                      >
                        {stage.n}
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-text">
                          {stage.title}
                        </h3>
                        <p className="mt-1 text-base leading-relaxed text-muted">
                          {stage.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-surface px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <SectionHeading kicker="How it is scoped" title="The whole file, a phase, or the blockage">
            <ol className="mt-6 list-decimal space-y-2 pl-5 text-base leading-relaxed text-muted">
              <li>Talk it through with the practice on a call.</li>
              <li>
                We agree whether this is a whole-file engagement, a named
                phase, or overflow, and the hours and fee to that work.
              </li>
              <li>
                The team works under your instruction and delivers for your
                sign-off.
              </li>
              <li>
                The firm retains conduct and makes the decisions throughout.
              </li>
            </ol>
          </SectionHeading>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Card title="What is in scope" featured>
              <p>
                The 26-stage housing disrepair lifecycle above, including
                preparing the issue pack, default judgment, trial bundle,
                Part 36 and enforcement papers for the firm to sign off and
                take. Administrative support on those files where that is what
                the matter needs.
              </p>
            </Card>
            <Card title="What stays with the firm">
              <p className="mb-4">
                The instructing firm remains the solicitor on the record. We
                do not appear as advocate, we do not attend court and we do
                not issue:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                {REFERRED_BACK.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-4">
                If a matter passes outside England and Wales housing disrepair
                plus associated personal injury arising from it, it is referred
                back.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <SectionHeading kicker="What happens next" title="What to bring to the first call">
          <p>
            The jurisdiction of the caseload, the matter count, where the file
            sits in the lifecycle, and whether the firm needs the whole matter
            run or a defined stage. From that, we recommend how to staff it.
          </p>
          <p className="mt-4">
            <Button href={BOOKING_URL} variant="primary">
              Book a call
            </Button>
          </p>
        </SectionHeading>
        <blockquote className="mt-12 rounded-xl border border-line border-l-[3px] border-l-accent-2 bg-accent-soft p-6 text-base leading-relaxed text-muted sm:p-8">
          <p>{CONDUCT_NOTICE}</p>
          <p className="mt-4">
            The applicable law depends on the jurisdiction of the
            client&apos;s case (the Renting Homes (Wales) Act 2016 in Wales;
            the Landlord and Tenant Act 1985 and Awaab&apos;s Law in England).
            HDR Keel assists with personal injury only where it arises from
            housing disrepair and only under the instructed firm. HDR Keel
            works as the firm&apos;s processor under a written
            data-processing agreement under Article 28 of the UK GDPR.
          </p>
        </blockquote>
      </section>

      <CtaBand title="Need a disrepair file run?">
        <p>
          From a first vetting through to post-judgment, or the stage that is
          stuck. Talk it through with the practice.
        </p>
      </CtaBand>
    </>
  );
}
