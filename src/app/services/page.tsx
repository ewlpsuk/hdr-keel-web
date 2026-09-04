import type { Metadata } from "next";
import BrandVisual from "@/components/BrandVisual";
import Button from "@/components/Button";
import Card from "@/components/Card";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  path: "/services",
  description:
    "Outsourced housing disrepair case support from vetting to post-judgment, staff training, and AI implementation for solicitors.",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Services"
        title="Case support, training and AI implementation"
        visualOnMobile
        visual={
          <BrandVisual
            src="/images/issue-pack.jpg"
            alt="An issue pack prepared on a desk"
            className="h-full min-h-[18rem]"
            imgClassName="aspect-[4/3] lg:aspect-auto lg:h-full"
          />
        }
      >
        <p>
          HDR Keel helps solicitor firms with outsourced housing disrepair
          case work: we work the file under instruction, plus staff training
          and AI implementation. The firm always keeps conduct of its cases.
        </p>
      </PageHero>

      <section className="mx-auto max-w-6xl space-y-10 px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <Card
            kicker="Case support"
            title="The file, under instruction"
            heading="h2"
            image={{
              src: "/images/case-files.jpg",
              alt: "Case files and a chronology on a fee-earner's desk",
            }}
          >
            <p>
              The 26-stage housing disrepair lifecycle, from vetting a new
              claim through issue, evidence, trial preparation, Part 36 and
              post-judgment. Or the stage that is blocking the desk.
            </p>
            <p className="mt-auto pt-6">
              <Button href="/services/case-support" variant="secondary">
                Case support
              </Button>
            </p>
          </Card>
          <Card
            kicker="Training"
            title="Housing disrepair and AI training"
            heading="h2"
            image={{
              src: "/images/training-room.jpg",
              alt: "A training table with packs and notebooks in a legal office",
            }}
          >
            <p>
              Staff training on housing disrepair and on AI for legal work,
              from new fee earners to experienced practitioners. A group
              session counts as one booking.
            </p>
            <p className="mt-auto pt-6">
              <Button href="/services/training" variant="secondary">
                Training
              </Button>
            </p>
          </Card>
          <Card
            kicker="AI implementation"
            title="Embedding AI in the workflow"
            heading="h2"
            image={{
              src: "/images/workflow-desk.jpg",
              alt: "A fee-earner's desk with a laptop and organised case papers",
            }}
          >
            <p>
              Setting up and embedding AI tools in a firm&apos;s workflow so
              fee earners work faster and more consistently, with the human
              sign-off intact.
            </p>
            <p className="mt-auto pt-6">
              <Button href="/services/ai-implementation" variant="secondary">
                AI implementation
              </Button>
            </p>
          </Card>
        </div>
      </section>

      <section className="bg-accent-soft px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            kicker="Self-serve"
            title="HDR Compass, if the firm wants to do it themselves"
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

      <CtaBand title="Talk through what the firm needs" />
    </>
  );
}
