import type { Metadata } from "next";
import BrandVisual from "@/components/BrandVisual";
import Button from "@/components/Button";
import Card from "@/components/Card";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import TrustStrip from "@/components/TrustStrip";
import { BOOKING_URL, pageMetadata, PRODUCT_URL, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "HDR Keel",
  path: "/",
  description:
    "Shaine Stead's housing disrepair consultancy for solicitors: case support, training and AI implementation under the firm's instruction.",
});

const organisationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  founder: {
    "@type": "Person",
    name: "Shaine Stead",
  },
  description: site.description,
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationJsonLd) }}
      />
      <PageHero
        kicker="HDR Keel"
        title="Shaine Stead's housing disrepair consultancy for solicitors"
        primaryHref={BOOKING_URL}
        primaryLabel="Book a call"
        secondaryHref="/services"
        secondaryLabel="See the services"
        visual={
          <BrandVisual
            src="/images/hero-terrace.png"
            alt=""
            decorative
            className="h-full min-h-[22rem]"
            imgClassName="object-center"
          />
        }
      >
        <p>
          Give your fee earners their time back. An experienced housing
          disrepair fee earner takes case work off their desks and delivers it
          reliably, working under your firm&apos;s conduct.
        </p>
      </PageHero>

      <TrustStrip />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="body-copy max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
          When your team is short-staffed or overloaded, Shaine brings real
          capacity without the burden and delay of recruiting another
          permanent fee earner. He is a housing disrepair fee earner who has
          personally handled housing disrepair claim work since 2013, offering
          solicitors case support on a monthly retainer, practical training and
          help implementing AI. The instructing firm keeps conduct of its
          cases.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <SectionHeading kicker="What we do" title="Three ways HDR Keel helps firms">
          <p>
            Case support on a monthly retainer, training on housing disrepair
            and AI, and AI implementation inside the firm&apos;s own workflow.
          </p>
        </SectionHeading>
        <div className="grid gap-6 md:grid-cols-3">
          <Card
            title="Outsourced case support"
            image={{
              src: "/images/service-case.png",
              alt: "Geometric case-file mark for outsourced case support",
            }}
          >
            <p>
              Shaine steps in when firms are short-staffed. Intake, disclosure
              reconciliation, chronology, reports and offers strategy, on a
              monthly retainer.
            </p>
            <p className="mt-4">
              <Button href="/pricing" variant="secondary">
                See pricing
              </Button>
            </p>
          </Card>
          <Card
            title="Training"
            image={{
              src: "/images/service-training.png",
              alt: "Geometric board mark for training",
            }}
          >
            <p>
              Staff training on housing disrepair and on AI, from new fee
              earners to experienced practitioners. Individuals or a group at
              no extra cost.
            </p>
            <p className="mt-4">
              <Button href="/services" variant="secondary">
                See services
              </Button>
            </p>
          </Card>
          <Card
            title="AI implementation"
            image={{
              src: "/images/service-ai.png",
              alt: "Geometric node mark for AI implementation",
            }}
          >
            <p>
              Setting up AI in a firm&apos;s workflow and consulting on how to
              reduce fee-earner time on housing disrepair cases.
            </p>
            <p className="mt-4">
              <Button href="/services" variant="secondary">
                See services
              </Button>
            </p>
          </Card>
        </div>
      </section>

      <section className="bg-surface px-6 py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              kicker="Self-serve option"
              title="HDR Compass, for firms that want to do it themselves"
            >
              <p>
                HDR Compass is the software product for firms that want to keep
                the work in-house. It reads the folder, scores the acceptance
                gate and reconciles disclosure. The tool drafts the report. The
                firm&apos;s own fee earner confirms before anything is exported.
                The firm keeps the file, the AI key and the sign-off.
              </p>
            </SectionHeading>
            <div className="flex flex-wrap gap-3">
              <Button href="/hdr-compass" variant="primary">
                About HDR Compass
              </Button>
              <a
                href={PRODUCT_URL}
                className="inline-flex items-center font-display text-base text-accent-2 hover:text-accent"
              >
                Visit hdrcompass.co.uk
              </a>
            </div>
          </div>
          <BrandVisual
            src="/images/compass-motif.png"
            alt="Compass rose mark for the HDR Compass self-serve option"
            className="min-h-[16rem]"
          />
        </div>
      </section>

      <CtaBand title="Book a call with Shaine">
        <p>
          Talk through caseload, training or AI implementation. You will
          speak to a housing disrepair fee earner, not a sales team.
        </p>
      </CtaBand>
    </>
  );
}
