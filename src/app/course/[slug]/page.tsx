import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Card from "@/components/Card";
import CheckoutButton from "@/components/CheckoutButton";
import CourseChat from "@/components/CourseChat";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { pageMetadata } from "@/lib/site";
import { COURSE_LEVELS } from "@/lib/course";
import Link from "next/link";

export const dynamicParams = false;

export function generateStaticParams() {
  return COURSE_LEVELS.map((level) => ({ slug: level.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const level = COURSE_LEVELS.find((l) => l.slug === slug);
  if (!level) return {};
  return pageMetadata({
    title: `${level.name} - Running Housing Disrepair Claims`,
    path: `/course/${level.slug}`,
    description: `${level.name}: stages ${level.stages} of the housing disrepair claim pathway (${level.stageLabel}). For fee earners and support staff at solicitors' firms. £199.`,
  });
}

export default async function CourseLevelPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const level = COURSE_LEVELS.find((l) => l.slug === slug);
  if (!level) return notFound();

  const material = level.modules
    .map((m) => `${m.title} (stages ${m.stages}):\n${m.content}\nSkills: ${m.skills.join("; ")}`)
    .join("\n\n");

  const index = COURSE_LEVELS.findIndex((l) => l.slug === level.slug);
  const prev = index > 0 ? COURSE_LEVELS[index - 1] : null;
  const next = index < COURSE_LEVELS.length - 1 ? COURSE_LEVELS[index + 1] : null;

  return (
    <>
      <PageHero
        kicker={`Stages ${level.stages}`}
        title={level.name}
        secondaryHref="/course"
        secondaryLabel="Back to the course"
        visualOnMobile={false}
      >
        <p>{level.stageLabel}.</p>
        <p className="mt-3">{level.overview}</p>
        <p className="mt-3 font-mono text-sm text-accent">£{level.price} one-time. No subscription.</p>
      </PageHero>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <SectionHeading kicker="Who it is for" title="The fee earners this level is built for">
          <p>{level.audience}</p>
        </SectionHeading>

        <div className="mt-8">
          <SectionHeading kicker="What you learn" title="By the end of this level">
            <ul className="mt-4 space-y-2">
              {level.objectives.map((o) => (
                <li key={o} className="flex gap-3 text-muted">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </SectionHeading>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <SectionHeading kicker="The modules" title={`What ${level.name} covers`}>
          <p>
            Each module owns a slice of the pathway, with a scenario drill and a
            knowledge check, and links to the reference material that underpins
            it.
          </p>
        </SectionHeading>
        <div className="mt-8 space-y-6">
          {level.modules.map((m, i) => (
            <Card key={m.id} kicker={`Module ${i + 1} - stages ${m.stages}`} title={m.title}>
              <p className="text-muted">{m.content}</p>
              <div className="mt-4">
                <p className="text-sm font-semibold text-text">Skills taught</p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {m.skills.map((s) => (
                    <li key={s} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 rounded-lg border border-line bg-bg p-4">
                <p className="text-sm font-semibold text-accent">Scenario drill</p>
                <p className="mt-1 text-sm text-muted">{m.drill}</p>
              </div>
              <div className="mt-4">
                <p className="text-sm font-semibold text-text">Reference material</p>
                <ul className="mt-2 space-y-1">
                  {m.libraryLinks.map((ref) => (
                    <li key={ref} className="text-sm text-muted">
                      - {ref}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <SectionHeading kicker="Ask the material" title="Chat with this level's content">
          <p>
            Bring your own AI key and put your own case scenarios to this
            level&apos;s material. The chat explains the reasoning; it does not give
            consumer legal advice.
          </p>
        </SectionHeading>
        <div className="mt-8">
          <CourseChat levelName={level.name} material={material} />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <CheckoutButton levelSlug={level.slug} price={level.price} label={`Buy ${level.name}`} full />
          <div className="flex gap-6 text-sm">
            {prev ? (
              <Link href={`/course/${prev.slug}`} className="text-muted transition hover:text-accent">
                &larr; {prev.name}
              </Link>
            ) : null}
            {next ? (
              <Link href={`/course/${next.slug}`} className="text-muted transition hover:text-accent">
                {next.name} &rarr;
              </Link>
            ) : null}
          </div>
        </div>
      </section>

      <CtaBand title="Ready to start the passage?">
        <p>Begin with Fundamentals, or take the whole arc at the reduced rate.</p>
      </CtaBand>
    </>
  );
}
