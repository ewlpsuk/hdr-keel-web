import type { Metadata } from "next";
import Button from "@/components/Button";
import Card from "@/components/Card";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { BOOKING_URL, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  path: "/services",
  description:
    "Outsourced housing disrepair case support, staff training, and AI implementation for solicitors. The firm always keeps conduct of its cases.",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Services"
        title="Case support, training and AI implementation for solicitors"
      >
        <p>
          HDR Keel helps solicitors with outsourced housing disrepair case
          work, staff training, and AI implementation. The firm always keeps
          conduct of its cases.
        </p>
        <p className="mt-4">
          For the latest housing-disrepair case law, regulation and legal
          technology, see our{" "}
          <a
            href="/news"
            className="text-accent underline hover:text-text"
          >
            housing disrepair news and legal updates
          </a>
          .
        </p>
      </PageHero>

      <section className="mx-auto max-w-5xl space-y-10 px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <Card
            kicker="Case support"
            title="Outsourced case support"
            heading="h2"
            image={{
              src: "/images/service-case.png",
              alt: "Geometric case-file mark for outsourced case support",
            }}
          >
            <p>
              Shaine steps in when a firm is short-staffed, on annual leave, or
              simply overloaded. Intake triage, disclosure reconciliation,
              chronology, quantum, report drafting and offers strategy, on a
              monthly retainer.
            </p>
            <p className="mt-auto pt-6">
              <Button href="/services/case-support" variant="secondary">
                Learn more
              </Button>
            </p>
          </Card>
          <Card
            kicker="Training"
            title="Training"
            heading="h2"
            image={{
              src: "/images/service-training.png",
              alt: "Geometric board mark for training",
            }}
          >
            <p>
              Staff training on housing disrepair and on AI for legal work, from
              new fee earners to experienced practitioners. A group session
              counts as one booking.
            </p>
            <p className="mt-auto pt-6">
              <Button href="/services/training" variant="secondary">
                Learn more
              </Button>
            </p>
          </Card>
          <Card
            kicker="AI implementation"
            title="AI implementation and efficiency consulting"
            heading="h2"
            image={{
              src: "/images/service-ai.png",
              alt: "Geometric node mark for AI implementation",
            }}
          >
            <p>
              Setting up and embedding AI tools in a firm&apos;s workflow so fee
              earners work faster and more consistently, with the human sign-off
              intact.
            </p>
            <p className="mt-auto pt-6">
              <Button href="/services/ai-implementation" variant="secondary">
                Learn more
              </Button>
            </p>
          </Card>
        </div>
      </section>

      <section className="bg-surface px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            kicker="Self-serve"
            title="HDR Compass is the option for firms that want to do it themselves"
          >
            <p>
              If the firm wants to keep the work in-house, HDR Compass is the
              software product for that route. HDR Keel remains available for
              outsourced help.
            </p>
          </SectionHeading>
          <Button href="/hdr-compass" variant="secondary">
            About HDR Compass
          </Button>
        </div>
      </section>

      <CtaBand title="Book a call" />
    </>
  );
}
