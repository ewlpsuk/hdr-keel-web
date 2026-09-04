import type { Metadata } from "next";
import BrandVisual from "@/components/BrandVisual";
import Card from "@/components/Card";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { BOOKING_URL, CONDUCT_NOTICE, pageMetadata } from "@/lib/site";
import { TRAINING_LEVELS } from "@/lib/training-schedule";
import { AI_TRAINING_LEVELS } from "@/lib/ai-training-schedule";

export const metadata: Metadata = pageMetadata({
  title: "Housing Disrepair and AI Training",
  path: "/services/training",
  description:
    "Staff training on housing disrepair and on AI for legal work, from new fee earners to experienced practitioners. A group counts as one booking.",
});

export default function TrainingPage() {
  return (
    <>
      <PageHero
        kicker="Training"
        title="Housing disrepair and AI training, from new fee earners to experienced practitioners"
        primaryHref={BOOKING_URL}
        primaryLabel="Book a training day"
        secondaryHref="/contact"
        secondaryLabel="Talk about a booking"
        visualOnMobile
        visual={
          <BrandVisual
            src="/images/training-room.jpg"
            alt="A training table with packs in a legal office"
            className="h-full min-h-[18rem]"
            imgClassName="aspect-[4/3] lg:aspect-auto lg:h-full"
          />
        }
      >
        <p>
          Training gives the in-house team the process and the confidence to
          run a disrepair file from intake to quantum, on housing disrepair
          and on AI for legal work.
        </p>
      </PageHero>

      <section className="mx-auto max-w-5xl space-y-10 px-6 py-16">
        <SectionHeading kicker="The two tracks" title="Two kinds of training, kept separate">
          <p>
            Both are practitioner-led and grounded in how we run live housing
            disrepair matters. Nominate the subject and the audience level
            when you book.
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
              <p className="mt-6 border-t border-line pt-4 text-sm text-text">
                <span className="font-semibold text-accent">Outcome: </span>
                {t.outcome}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <SectionHeading kicker="AI for legal work" title="How a full week of AI training runs">
          <p>
            The same shape as the housing disrepair block, for the firm that
            wants its fee earners to use AI well and stay within the
            SRA&apos;s expectations. Book one level for a day, or run the arc
            over a full week.
          </p>
        </SectionHeading>
        <div className="grid gap-6 md:grid-cols-3">
          {AI_TRAINING_LEVELS.map((t) => (
            <Card key={t.level} kicker={t.days} title={t.level}>
              <p className="text-muted">{t.overview}</p>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted">
                {t.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
              <p className="mt-6 border-t border-line pt-4 text-sm text-text">
                <span className="font-semibold text-accent">Outcome: </span>
                {t.outcome}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-surface px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <SectionHeading kicker="Group sessions" title="A whole team, as one booking">
            <p>
              A group session counts as one booking, so a firm can send a whole
              team without a per-head fee. Fees are agreed when you book.
            </p>
          </SectionHeading>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <SectionHeading kicker="How it works" title="A straightforward day">
          <ol className="mt-6 list-decimal space-y-2 pl-5 text-base leading-relaxed text-muted">
            <li>Book a training day (or a five-day block).</li>
            <li>Nominate the subject and the audience level.</li>
            <li>We run the session; one booking covers the room.</li>
            <li>The team leaves with process they can apply to live files.</li>
          </ol>
          <p className="mt-8">
            Practitioner-led guidance, not a CPD certification unless one is
            later confirmed as evidenced.
          </p>
        </SectionHeading>
        <blockquote className="mt-12 rounded-xl border border-line border-l-[3px] border-l-accent bg-surface p-6 text-base leading-relaxed text-muted sm:p-8">
          <p>{CONDUCT_NOTICE}</p>
          <p className="mt-4">
            The applicable law depends on the jurisdiction of the
            client&apos;s case (the Renting Homes (Wales) Act 2016 in Wales;
            the Landlord and Tenant Act 1985 and Awaab&apos;s Law in England).
          </p>
        </blockquote>
      </section>

      <CtaBand title="Ready to train the team?">
        <p>Pick a day, tell us the subject and the audience, and send the room.</p>
      </CtaBand>
    </>
  );
}
