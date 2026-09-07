"use client";

import Card from "@/components/Card";
import { useMemo } from "react";
import { COURSE_LEVELS, type CourseLevel } from "@/lib/course";
import CourseAccessGate from "@/components/CourseAccessGate";
import CourseChat from "@/components/CourseChat";

function ModuleCards({ level }: { level: CourseLevel }) {
  return (
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
          <div className="mt-4 rounded-lg border border-l-accent bg-surface p-4">
            <p className="text-sm font-semibold text-accent">
              The line between what you prepare and what the firm conducts
            </p>
            <p className="mt-1 text-sm text-muted">{m.boundary}</p>
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
  );
}

/**
 * CourseModules - the modules + chat for a level, client-gated.
 *
 * Server-rendered pages must NOT ship the module teaching in the first paint
 * HTML (that would make it free/scrapable). Instead this client component
 * imports the module data and renders it ONLY after CourseAccessGate confirms
 * a valid grant for the level. Until then the learner sees the Locked panel.
 */
export default function CourseModules({ slug }: { slug: string }) {
  const level = useMemo(
    () => COURSE_LEVELS.find((l) => l.slug === slug),
    [slug],
  );

  if (!level) return null;

  return (
    <CourseAccessGate levelSlug={slug} requireLevel>
      <ModuleCards level={level} />
      <div className="mt-16">
        <CourseChat
          levelName={level.name}
          material={level.modules
            .map(
              (m) =>
                `${m.title} (stages ${m.stages}):\n${m.content}\nSkills: ${m.skills.join(
                  "; ",
                )}\nBoundary: ${m.boundary}`,
            )
            .join("\n\n")}
        />
      </div>
    </CourseAccessGate>
  );
}
