import type { Metadata } from "next";
import Button from "@/components/Button";
import Card from "@/components/Card";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { BOOKING_URL, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About",
  path: "/about",
  description:
    "HDR Keel is Shaine Stead's housing disrepair consultancy for solicitors, assisted by Georgie. The instructing firm keeps conduct of its cases.",
});

const CONDUCT =
  "The instructing firm retains conduct of the matter and all responsibility to its client and to the regulator. HDR Keel works under the firm's instruction and supervision. All advice, correspondence and decisions are the firm's to make and sign off.";

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About HDR Keel"
        title="Shaine Stead: a housing disrepair fee earner, offering his services to solicitors"
      >
        <p>
          HDR Keel is Shaine Stead&apos;s housing disrepair consultancy for
          solicitors. Shaine is a fee earner who has handled these claims since
          2013, and he offers that practice to firms that need extra capacity.
        </p>
      </PageHero>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <SectionHeading kicker="Who we are" title="Shaine Stead, assisted by Georgie">
          <p>
            Shaine is a housing disrepair fee earner who has run real cases and
            handled disrepair claims since 2013. When a firm is short-staffed,
            on leave or simply overloaded, he steps in to take the case work off
            the desk: intake, disclosure reconciliation, chronology, quantum and
            report drafting, on a clear monthly retainer.
          </p>
          <p className="mt-4">
            He is assisted by Georgie. The instructing firm keeps conduct of its
            cases at all times, and every deliverable is the firm&apos;s to review,
            approve and sign off. Shaine supports the firm rather than replacing
            its responsibility to the client or the regulator.
          </p>
          <p className="mt-4">
            Shaine handles claimant files, including health and location
            information, only under the instructing firm&apos;s documented
            instructions for each matter. Your data protection and confidentiality
            obligations to the client stay with your firm, and HDR Keel works on
            that basis from day one.
          </p>
          <p className="mt-4">
            HDR Compass is a separate software product for firms that want to do
            the work themselves. HDR Keel is not a software company, not a
            claims management company, and not a general personal injury
            practice. It assists with personal injury only where caused by
            housing disrepair.
          </p>
        </SectionHeading>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <SectionHeading kicker="How we work" title="Principles" />
        <div className="grid gap-6 md:grid-cols-2">
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
              HDR Keel works for solicitors. It does not work for claims
              management companies.
            </p>
          </Card>
          <Card title="Honest about scope">
            <p>
              Not a general personal injury practice. Assists with personal
              injury only where caused by housing disrepair.
            </p>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <blockquote className="rounded-xl border border-white/10 bg-surface p-6 text-base leading-relaxed text-muted">
          {CONDUCT}
        </blockquote>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold text-text">
            Book a call
          </h2>
          <p className="mt-4 text-muted">
            If your firm needs extra housing disrepair capacity, talk it through.
          </p>
          <div className="mt-8">
            <Button href={BOOKING_URL} variant="primary">
              Book a call
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
