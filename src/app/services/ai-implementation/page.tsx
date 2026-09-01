import type { Metadata } from "next";
import Button from "@/components/Button";
import Card from "@/components/Card";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { BOOKING_URL, PRODUCT_URL, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "AI Implementation for Legal Work",
  path: "/services/ai-implementation",
  description:
    "Set up and embed AI in a firm's workflow so fee earners work faster and more consistently. Consultancy for solicitors on reducing fee-earner time.",
});

const CONDUCT =
  "The instructing firm retains conduct of the matter and all responsibility to its client and to the regulator. HDR Keel works under the firm's instruction and supervision. All advice, correspondence and decisions are the firm's to make and sign off. Intake, disclosure, chronology, quantum, reporting and offers work is undertaken for the instructed firm and delivered for its sign-off. Nothing on this site constitutes legal advice to any firm's client.";

const JURISDICTION =
  "The applicable law depends on the jurisdiction of the client's case (RHWA 2016 in Wales; LTA 1985 and Awaab's Law in England).";

export default function AiImplementationPage() {
  return (
    <>
      <PageHero
        kicker="AI implementation"
        title="AI implementation for legal work, embedded so fee earners work faster and more consistently."
        primaryHref={BOOKING_URL}
        primaryLabel="Book a call"
        secondaryHref="/pricing"
        secondaryLabel="See pricing"
      >
        <p>
          Every firm knows AI is coming; few know how to embed it safely in
          fee-earner workflows. Shaine sets up and embeds AI tools so a team
          works faster and more consistently, without handing the file, the
          conduct, or the sign-off to a machine.
        </p>
      </PageHero>

      <section className="mx-auto max-w-5xl space-y-10 px-6 py-16">
        <SectionHeading kicker="What you get" title="A grounded implementation, under your instruction">
          <p>
            Delivered under the firm&apos;s instruction, with every output the
            firm reviews and signs off.
          </p>
        </SectionHeading>
        <div className="grid gap-6 md:grid-cols-3">
          <Card title="Workflow assessment">
            <p>
              Where AI actually removes fee-earner time on housing disrepair
              cases, mapped to the firm&apos;s own process.
            </p>
          </Card>
          <Card title="Tool setup and integration">
            <p>
              Choosing and configuring the tools, integrated into the
              firm&apos;s existing way of working.
            </p>
          </Card>
          <Card title="Prompt and key configuration">
            <p>
              Configuring the prompts and the keys so the output is consistent
              and the firm stays in control.
            </p>
          </Card>
          <Card title="Testing on your files">
            <p>
              The tools are tested on the firm&apos;s own files, so the result
              is real rather than theoretical.
            </p>
          </Card>
          <Card title="Team training">
            <p>
              Fee earners are trained to use the tools with the human sign-off
              intact.
            </p>
          </Card>
          <Card title="Ongoing consultation">
            <p>
              Advice on where AI continues to remove fee-earner time on housing
              disrepair cases.
            </p>
          </Card>
        </div>
      </section>

      <section className="bg-surface px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <SectionHeading kicker="Accountability" title="Shaine, not AI, is accountable">
            <p>
              Shaine, not AI, is accountable for the work. Any AI assistance
              produces drafts that Shaine reviews and the firm signs off. AI is
              a tool Shaine implements and trains on, not a replacement for the
              firm&apos;s conduct.
            </p>
            <p className="mt-4">
              Georgie handles the backend and administrative side of the work.
              Every deliverable is Shaine&apos;s to review and sign off before
              it reaches the firm.
            </p>
          </SectionHeading>
          <div className="mt-8 rounded-xl border border-white/10 bg-card p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-2">
              Pricing
            </p>
            <p className="mt-3 text-lg text-text">
              £700 per day. A five-day block is £2,800, a reduced rate for
              booking a full week.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <SectionHeading kicker="How it works" title="A scoped, step-by-step implementation">
          <ol className="body-copy mt-6 list-decimal space-y-2 pl-5 text-base leading-relaxed text-muted">
            <li>A call to scope the workflow and the tools.</li>
            <li>Shaine assesses and sets up the implementation.</li>
            <li>Fee earners are trained and the tools are tested on the firm&apos;s files.</li>
            <li>The firm retains conduct and signs off every output.</li>
          </ol>
          <p className="mt-8">
            For firms that want to keep the work in-house, HDR Compass is the
            self-serve software option. HDR Keel remains available for
            hands-on help.{" "}
            <a
              href={PRODUCT_URL}
              className="text-accent hover:underline"
            >
              About HDR Compass
            </a>
            .
          </p>
        </SectionHeading>
        <blockquote className="mt-12 rounded-xl border-l-[3px] border-accent border-y border-r border-white/10 bg-surface p-6 text-base leading-relaxed text-muted sm:p-8">
          <p>{CONDUCT}</p>
          <p className="mt-4">{JURISDICTION}</p>
        </blockquote>
      </section>

      <CtaBand title="Ready to embed AI safely?">
        <p>Scope the workflow and the tools with Shaine on a call.</p>
      </CtaBand>
    </>
  );
}
