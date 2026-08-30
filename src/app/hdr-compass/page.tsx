import type { Metadata } from "next";
import Button from "@/components/Button";
import Card from "@/components/Card";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "HDR Compass",
  path: "/hdr-compass",
  description:
    "HDR Compass is the self-serve software option for housing disrepair firms that want to do the work themselves. HDR Keel remains the consultancy.",
});

const QUALIFIER =
  "This describes how the product is designed to work, not a certification.";

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "HDR Compass",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://hdrcompass.co.uk",
  description:
    "A case-review tool for housing disrepair and conditions claims. The fee earner reviews and confirms outputs before export.",
};

export default function HdrCompassPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <PageHero
        kicker="HDR Compass"
        title="The self-serve software option for housing disrepair firms"
      >
        <p>
          HDR Compass is for firms that want to take the heavy lifting off
          their own fee earners&apos; desks. HDR Keel remains the consultancy
          for firms that prefer outsourced help.
        </p>
      </PageHero>

      <section className="bg-surface px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            kicker="Framing"
            title="For firms that want to do it themselves"
          >
            <p>
              HDR Compass is a case-review tool for housing disrepair and
              conditions claims. It is one route. HDR Keel (Shaine&apos;s
              consultancy) is also available for firms that prefer outsourced
              case support, training or AI implementation.
            </p>
          </SectionHeading>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading kicker="Product" title="What HDR Compass does">
          <p>
            Known design facts only. The tool drafts. The firm&apos;s own fee
            earner confirms before anything is exported.
          </p>
        </SectionHeading>
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Reads the folder">
            <p>
              Scores the acceptance gate, reconciles disclosure and drafts the
              report so the fee earner can review a consistent pack.
            </p>
          </Card>
          <Card title="Deterministic and reproducible">
            <p>
              Reviews are designed to be deterministic and reproducible, so the
              same folder produces a consistent result.
            </p>
          </Card>
          <Card title="Zero retention">
            <p>
              Case data is handled with zero retention: it is not stored.
              {` ${QUALIFIER}`}
            </p>
          </Card>
          <Card title="Bring your own key">
            <p>
              Prompts go from the firm to the provider. Built for fee earners
              who are not necessarily technical.
            </p>
          </Card>
          <Card title="Human in the loop">
            <p>
              The fee earner reviews and confirms outputs before anything is
              exported. The tool drafts. The firm signs off.
            </p>
          </Card>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <h2 className="font-display text-3xl font-bold text-text">
            Visit the product site, or talk to HDR Keel
          </h2>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Button href="https://hdrcompass.co.uk" variant="primary">
              Visit hdrcompass.co.uk
            </Button>
            <Button href="/services" variant="secondary">
              Talk to HDR Keel instead
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
