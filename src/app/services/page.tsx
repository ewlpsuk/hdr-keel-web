import type { Metadata } from "next";
import BrandVisual from "@/components/BrandVisual";
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

const CONDUCT =
  "The instructing firm retains conduct of the matter and all responsibility to its client and to the regulator. HDR Keel works under the firm's instruction and supervision. All advice, correspondence and decisions are the firm's to make and sign off. Intake, disclosure, chronology, quantum, reporting and offers work is undertaken for the instructed firm and delivered for its sign-off. Nothing on this site constitutes legal advice to any firm's client.";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Services"
        title="Case support, training and AI implementation for solicitors"
        visual={
          <BrandVisual
            src="/images/service-case.png"
            alt=""
            decorative
            className="h-full min-h-[22rem]"
          />
        }
      >
        <p>
          HDR Keel helps solicitors with outsourced housing disrepair case
          work, staff training, and AI implementation. The firm always keeps
          conduct of its cases.
        </p>
      </PageHero>

      <section className="mx-auto max-w-5xl space-y-10 px-6 py-16">
        <Card
          kicker="Case support"
          title="Outsourced case support"
          heading="h2"
          split
          image={{
            src: "/images/service-case.png",
            alt: "Geometric case-file mark for outsourced case support",
          }}
        >
          <p>
            Shaine steps in when a firm is short-staffed, on annual leave, or
            simply overloaded. He is a housing disrepair fee earner who has
            personally handled housing disrepair claim work since 2013. He does
            intake triage, disclosure reconciliation, chronology, quantum,
            report drafting and offers strategy on housing disrepair cases. The
            firm retains conduct. Shaine is the outsourced fee earner. Capped
            at no more than 10 hours per week per client so he never
            over-commits.
          </p>
          <p className="mt-6">{CONDUCT}</p>
          <p className="mt-8">
            <Button href="/pricing" variant="primary">
              See pricing
            </Button>
          </p>
        </Card>

        <Card
          kicker="Training"
          title="Training"
          heading="h2"
          split
          image={{
            src: "/images/service-training.png",
            alt: "Geometric board mark for training",
          }}
        >
          <p>
            Staff training on housing disrepair and on AI for legal work, from
            new fee earners to experienced practitioners. A group session
            counts as one booking, so a firm can send a whole team at no extra
            cost. Daily rate for one-offs, reduced for a weekly block.
          </p>
          <p className="mt-8">
            <Button href={BOOKING_URL} variant="primary">
              Book a training day
            </Button>
          </p>
        </Card>

        <Card
          kicker="AI implementation"
          title="AI implementation and efficiency consulting"
          heading="h2"
          split
          image={{
            src: "/images/service-ai.png",
            alt: "Geometric node mark for AI implementation",
          }}
        >
          <p>
            Setting up and embedding AI tools in a firm&apos;s workflow so fee
            earners work faster and more consistently, and consulting on how to
            reduce fee-earner time on housing disrepair cases.
          </p>
          <p className="mt-8">
            <Button href={BOOKING_URL} variant="primary">
              Book a call
            </Button>
          </p>
        </Card>
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
