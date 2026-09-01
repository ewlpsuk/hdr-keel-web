import type { Metadata } from "next";
import BrandVisual from "@/components/BrandVisual";
import Card from "@/components/Card";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About",
  path: "/about",
  description:
    "HDR Keel is Shaine Stead's housing disrepair consultancy for solicitors. The instructing firm keeps conduct of its cases.",
});

const CONDUCT =
  "The instructing firm retains conduct of the matter and all responsibility to its client and to the regulator. HDR Keel works under the firm's instruction and supervision. All advice, correspondence and decisions are the firm's to make and sign off.";

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About HDR Keel"
        title="A housing disrepair fee earner, since 2013"
        visualOnMobile
        visual={
          <div>
            <BrandVisual
              src="/images/shaine-stead.jpg"
              alt="Shaine Stead, housing disrepair fee earner"
              className="aspect-[4/5] w-full border-t-[3px] border-t-accent"
              imgClassName="object-top"
            />
            <p className="mt-3 font-mono text-xs uppercase tracking-[0.16em] text-muted">
              Shaine Stead
            </p>
          </div>
        }
      >
        <p>
          HDR Keel is Shaine Stead&apos;s housing disrepair consultancy for
          solicitors. Shaine is a fee earner who has personally handled
          housing disrepair claim work since 2013, and he offers that practice
          to firms that need extra capacity.
        </p>
      </PageHero>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <SectionHeading kicker="Who we are" title="Shaine Stead, with Georgie on the backend">
          <p>
            Shaine is a housing disrepair fee earner who has run real cases and
            personally handled housing disrepair claim work since 2013. When a
            firm is short-staffed, on leave or simply overloaded, he steps in
            to take the case work off the desk: intake, disclosure
            reconciliation, chronology, quantum and report drafting, on a clear
            monthly retainer.
          </p>
          <p className="mt-4">
            He is supported by Georgie, who handles the backend and
            administrative side of the work. Every deliverable is Shaine&apos;s
            to review and sign off before it reaches the firm. The instructing
            firm keeps conduct of its cases at all times, and everything is the
            firm&apos;s to approve.
          </p>
          <p className="mt-4">
            Shaine handles claimant files, including health and location
            information, only under the instructing firm&apos;s documented
            instructions for each matter. The instructing firm is the data
            controller for the client&apos;s personal data and keeps conduct of
            the matter. HDR Keel processes that data, including any health or
            location information, only as the firm&apos;s processor, under a
            written data-processing agreement under Article 28 of the UK GDPR.
          </p>
          <p className="mt-4">
            HDR Keel is a consultancy for solicitors: case support, training
            and AI implementation on a monthly retainer. HDR Compass is a
            separate software product for firms that want to do the work
            themselves. HDR Keel works for solicitors and is not a claims
            management company; it assists with personal injury only where it
            arises from housing disrepair.
          </p>
        </SectionHeading>
      </section>

      <section className="bg-surface px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading kicker="How we work" title="Principles" />
          <div className="grid gap-6 md:grid-cols-3">
            <Card title="The firm keeps conduct">
              <p>
                Shaine supports the firm. The firm&apos;s responsibility to its
                client stays with the firm. HDR Keel works under instruction and
                supervision.
              </p>
            </Card>
            <Card title="Built from practice">
              <p>
                A fee earner who has run the cases, offering that experience to
                other firms as case support, training and AI implementation.
              </p>
            </Card>
            <Card title="Solicitors only">
              <p>
                HDR Keel works for solicitors on housing disrepair and associated
                personal injury. It does not take consumer claims directly.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <blockquote className="rounded-xl border-l-[3px] border-accent border-y border-r border-white/10 bg-surface p-6 text-base leading-relaxed text-muted sm:p-8">
          {CONDUCT}
        </blockquote>
      </section>

      <CtaBand title="Book a call">
        <p>If your firm needs extra housing disrepair capacity, talk it through.</p>
      </CtaBand>
    </>
  );
}
