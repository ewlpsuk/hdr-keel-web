import type { Metadata } from "next";
import Card from "@/components/Card";
import CheckoutButton from "@/components/CheckoutButton";
import CourseHubAccess from "@/components/CourseHubAccess";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import BrandVisual from "@/components/BrandVisual";
import { BOOKING_URL, CONDUCT_NOTICE, pageMetadata } from "@/lib/site";
import { COURSE_LEVELS, COURSE_PACKAGE } from "@/lib/course";
import Link from "next/link";

export const metadata: Metadata = pageMetadata({
  title: "Running Housing Disrepair Claims",
  path: "/course",
  description:
    "The self-serve, multi-level course for fee earners and support staff at solicitors' firms who run housing disrepair claims in England. Buy the level you need, when you need it.",
});

export default function CoursePage() {
  return (
    <>
      <PageHero
        kicker="The course"
        title="Running housing disrepair claims"
        primaryHref="/course/fundamentals"
        primaryLabel="Start with Fundamentals"
        secondaryHref={BOOKING_URL}
        secondaryLabel="Talk about training a team"
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
          A self-serve, multi-level curriculum for the people who already work
          housing disrepair claims: new fee earners, experienced staff and the
          senior fee earners who supervise them. Buy the level you need, when
          you need it. No subscription, no lock-in.
        </p>
      </PageHero>

      <CourseHubAccess />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <SectionHeading
          kicker="Why it exists"
          title="Built for the people who run the files"
        >
          <p>
            Housing disrepair work is learned in the daily grind of a file, not
            in a lecture. This course turns the 26-stage claim pathway into a
            structured curriculum, with the reasoning taught through scenarios
            and a chat that explains the material you bought.
          </p>
          <p className="mt-4">
            It is professional training for fee earners and support staff at
            solicitors&apos; firms. It is not legal advice to consumers and not a
            claims management service.
          </p>
        </SectionHeading>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <SectionHeading
          kicker="The three levels"
          title="Fundamentals, Craft, Command"
        >
          <p>
            Three levels mapped onto the 26 stages of the claim pathway. Each is
            a standalone course you can buy on its own, at £199, or take the full
            passage for £499.
          </p>
        </SectionHeading>
        <div className="grid gap-6 md:grid-cols-3">
          {COURSE_LEVELS.map((level) => (
            <Card key={level.slug} kicker={`Stages ${level.stages}`} title={level.name}>
              <p className="text-sm font-medium text-accent">{level.stageLabel}</p>
              <p className="mt-2 text-muted">{level.overview}</p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                {level.objectives.slice(0, 3).map((o) => (
                  <li key={o} className="flex gap-2">
                    <span className="text-accent">-</span>
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <Link
                  href={`/course/${level.slug}`}
                  className="mb-3 inline-block text-sm font-semibold text-accent hover:underline"
                >
                  See the modules
                </Link>
                <div className="flex flex-wrap items-center gap-3">
                  <CheckoutButton levelSlug={level.slug} price={level.price} label={level.name} />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-surface px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <SectionHeading kicker="The full passage" title="All three levels, one reduced price">
            <p>
              Take the whole arc in order and the foundation gates into the
              craft, which gates into command. The full package costs £499
              against £597 if bought separately: a genuine discount for
              committing to the full ladder.
            </p>
          </SectionHeading>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <CheckoutButton levelSlug="package" price={COURSE_PACKAGE.price} label="The full passage" full />
            <p className="text-sm text-muted">
              {COURSE_LEVELS.map((l) => l.name).join(", ")}. Normally £597, now £499.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <SectionHeading kicker="Ask the material" title="A chat that teaches, over the material you bought">
          <p>
            Every level bundles a chat you run with your own AI key. Put your own
            case scenarios to the section&apos;s reference material, understand the
            reasoning behind a model answer, and interrogate the drafting as you
            learn. Your key, your conversation; the material stays with you.
          </p>
          <p className="mt-4">
            The chat is an explainer over the course material. It never gives
            consumer legal advice and does not replace the fee earner&apos;s
            judgement or the firm&apos;s oversight.
          </p>
        </SectionHeading>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <SectionHeading kicker="For firms" title="Put a whole team through it">
          <p>
            If you want to train a team at scale, get in touch and we will agree a
            per-seat or flat team rate. Your firm keeps conduct, sign-off and
            regulation; the course trains your people to run the files.
          </p>
          <div className="mt-6">
            <a
              href={BOOKING_URL}
              className="inline-flex items-center justify-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-bg transition hover:bg-accent-2"
            >
              Talk about team training
            </a>
          </div>
        </SectionHeading>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <blockquote className="rounded-xl border border-line border-l-[3px] border-l-accent bg-surface p-6 text-base leading-relaxed text-muted sm:p-8">
          <p>{CONDUCT_NOTICE}</p>
          <p className="mt-4">
            Practitioner-led course content, not a CPD certification unless one
            is later confirmed as evidenced.
          </p>
        </blockquote>
      </section>

      <CtaBand title="Ready to start the passage?">
        <p>Begin with Fundamentals, or take the whole arc at the reduced rate.</p>
      </CtaBand>
    </>
  );
}
