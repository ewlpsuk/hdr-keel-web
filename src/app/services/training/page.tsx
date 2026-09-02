import type { Metadata } from "next";
import Button from "@/components/Button";
import Card from "@/components/Card";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { BOOKING_URL, pageMetadata } from "@/lib/site";
import { TRAINING_LEVELS } from "@/lib/training-schedule";

export const metadata: Metadata = pageMetadata({
  title: "Housing Disrepair and AI Training",
  path: "/services/training",
  description:
    "Staff training on housing disrepair and on AI for legal work, from new fee earners to experienced practitioners. A group counts as one booking.",
});

const CONDUCT =
  "The instructing firm retains conduct of the matter and all responsibility to its client and to the regulator. HDR Keel works under the firm's instruction and supervision. All advice, correspondence and decisions are the firm's to make and sign off. Intake, disclosure, chronology, quantum, reporting and offers work is undertaken for the instructed firm and delivered for its sign-off. Nothing on this site constitutes legal advice to any firm's client.";

const JURISDICTION =
  "The applicable law depends on the jurisdiction of the client's case (RHWA 2016 in Wales; LTA 1985 and Awaab's Law in England).";

export default function TrainingPage() {
  return (
    <>
      <PageHero
        kicker="Training"
        title="Housing disrepair and AI training, from new fee earners to experienced practitioners."
        primaryHref={BOOKING_URL}
        primaryLabel="Book a training day"
        secondaryHref="/pricing"
        secondaryLabel="See pricing"
      >
        <p>
          A trained fee earner who can run a disrepair file from intake to
          quantum is cheaper than repeat-outsourcing. Training gives your team
          the process and the confidence to take the repetition off your desk,
          on housing disrepair and on AI for legal work.
        </p>
      </PageHero>

      <section className="mx-auto max-w-5xl space-y-10 px-6 py-16">
        <SectionHeading kicker="The two tracks" title="Two kinds of training, kept separate">
          <p>
            Both are practitioner-led and grounded in how EWLPS runs real
            matters. Nominate the subject and the audience level when you book.
          </p>
        </SectionHeading>
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Housing disrepair training">
            <p>
              The claim lifecycle, disclosure reconciliation, chronology,
              quantum, reporting and offers strategy. From new fee earners who
              need the process, to experienced practitioners who want the
              detail sharpened.
            </p>
          </Card>
          <Card title="AI for legal work training">
            <p>
              Using AI tools across a firm&apos;s workflow so fee earners work
              faster and more consistently, with the human sign-off intact.
            </p>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <SectionHeading kicker="The five-day block" title="How a full week of housing disrepair training runs">
          <p>
            Nominate one level for a single day, or book the full week and run
            the arc in order. A five-day block takes a team from new fee
            earner to senior practitioner level, one level per stage.
          </p>
        </SectionHeading>
        <div className="grid gap-6 md:grid-cols-3">
          {TRAINING_LEVELS.map((t) => (
            <Card key={t.level} kicker={t.days} title={t.level}>
              <p className="text-muted">{t.overview}</p>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted">
                {t.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
              <p className="mt-6 border-t border-white/10 pt-4 text-sm text-text">
                <span className="font-semibold text-accent">Outcome: </span>
                {t.outcome}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-surface px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <SectionHeading kicker="Group sessions" title="A whole team, at no extra cost">
            <p>
              A group session counts as one booking, so a firm can send a whole
              team at no extra cost.
            </p>
          </SectionHeading>
          <div className="mt-8 rounded-xl border border-white/10 bg-card p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-2">
              Pricing
            </p>
            <p className="mt-3 text-lg text-text">
              £700 per day. A five-day block is £2,800, a reduced rate for
              booking a full week. A group session counts as one booking so a
              firm can send a whole team at no extra cost.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <SectionHeading kicker="How it works" title="A straightforward day">
          <ol className="body-copy mt-6 list-decimal space-y-2 pl-5 text-base leading-relaxed text-muted">
            <li>Book a training day (or a five-day block).</li>
            <li>Nominate the subject and the audience level.</li>
            <li>Shaine runs the session, one booking covers the room.</li>
            <li>The team leaves with process they can apply to live files.</li>
          </ol>
          <p className="mt-8">
            Practitioner-led guidance, not a CPD certification unless one is
            later confirmed as evidenced.
          </p>
        </SectionHeading>
        <blockquote className="mt-12 rounded-xl border-l-[3px] border-accent border-y border-r border-white/10 bg-surface p-6 text-base leading-relaxed text-muted sm:p-8">
          <p>{CONDUCT}</p>
          <p className="mt-4">{JURISDICTION}</p>
        </blockquote>
      </section>

      <CtaBand title="Ready to train the team?">
        <p>Pick a day, tell Shaine the subject and the audience, and send the room.</p>
      </CtaBand>
    </>
  );
}
