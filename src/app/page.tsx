import type { Metadata } from "next";
import BrandVisual from "@/components/BrandVisual";
import Button from "@/components/Button";
import Card from "@/components/Card";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import TrustStrip from "@/components/TrustStrip";
import { LIFECYCLE_PHASES } from "@/lib/case-lifecycle";
import { BOOKING_URL, CONDUCT_NOTICE, pageMetadata, PRODUCT_URL, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "HDR Keel",
  path: "/",
  description:
    "Housing disrepair consultancy for solicitors: case support from vetting to post-judgment, training and AI implementation, under the instructing firm's conduct.",
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
        kicker="Housing disrepair consultancy"
        title="Capacity for solicitor firms, under your conduct"
        primaryHref={BOOKING_URL}
        primaryLabel="Book a call"
        secondaryHref="/services"
        secondaryLabel="See the services"
        visualOnMobile
        visual={
          <BrandVisual
            src="/images/practice-street.jpg"
            alt="A wet terrace of red-brick houses on a British street"
            className="h-full min-h-[18rem]"
            imgClassName="aspect-[16/10] lg:aspect-auto lg:min-h-[22rem]"
          />
        }
      >
        <p>
          We work the file under instruction, from the first vetting through
          to post-judgment, or the stage that is blocking the desk, and
          deliver every piece for the firm&apos;s sign-off. Your firm stays on
          the record.
        </p>
      </PageHero>

      <TrustStrip />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <BrandVisual
            src="/images/case-files.jpg"
            alt="Housing disrepair case files and a chronology on a desk"
            className="aspect-[4/3]"
            imgClassName="aspect-[4/3]"
          />
          <div>
            <SectionHeading
              kicker="Case support"
              title="The 26-stage file, not a handful of tasks"
            >
              <p>
                When a team is short-staffed or overloaded, HDR Keel adds
                housing disrepair capacity without the delay of recruiting. We
                work live matters under the instructing firm&apos;s instruction:
                the whole lifecycle, a named phase, or overflow.
              </p>
            </SectionHeading>
            <Button href="/services/case-support" variant="primary">
              See the full lifecycle
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-accent-soft px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            kicker="What we take off the desk"
            title="Six phases, from intake to enforcement"
          >
            <p>
              Each phase is work the team already runs on live matters, under
              the firm&apos;s instruction. Scope and hours are agreed before we
              start.
            </p>
          </SectionHeading>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {LIFECYCLE_PHASES.map((phase) => (
              <Card
                key={phase.range}
                kicker={phase.kicker}
                title={phase.title}
                heading="h3"
                featured={phase.tone === "copper"}
              >
                <p>{phase.intro}</p>
              </Card>
            ))}
          </div>
          <p className="mt-8">
            <Button href="/services/case-support" variant="secondary">
              All 26 stages
            </Button>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading
          kicker="Who it is for"
          title="Solicitor firms on housing disrepair"
        >
          <p>
            We work for solicitors on housing disrepair and associated personal
            injury that arises from it. We do not take consumer claims directly
            and we do not work for claims management companies.
          </p>
        </SectionHeading>
        <div className="grid gap-6 md:grid-cols-2">
          <Card
            kicker="Is your firm the right fit"
            title="Who we work with"
            heading="h2"
          >
            <p className="mt-6 flex-1 text-base leading-relaxed text-muted">
              Who we work for, who we will not, and the questions firms most
              often ask, answered directly.
            </p>
            <p className="mt-auto pt-6">
              <Button href="/for-solicitors" variant="secondary">
                Who it is for
              </Button>
            </p>
          </Card>
          <Card
            kicker="How an engagement runs"
            title="From the first call to the first month"
            heading="h2"
          >
            <p className="mt-6 flex-1 text-base leading-relaxed text-muted">
              The call, the agreement, the data-processing terms, and how work
              reaches the firm for sign-off.
            </p>
            <p className="mt-auto pt-6">
              <Button href="/how-it-works" variant="secondary">
                How it works
              </Button>
            </p>
          </Card>
        </div>
      </section>

      <section className="border-y border-line bg-surface px-6 py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <BrandVisual
            src="/images/practice-street.jpg"
            alt="A British high street of terraced buildings"
            className="aspect-[4/3]"
            imgClassName="aspect-[4/3]"
          />
          <div>
            <SectionHeading kicker="The practice" title="A specialist team, not a sales desk">
              <p>
                HDR Keel is a housing disrepair consultancy for solicitors. The
                practice is led by Shaine Stead, with operations support. You
                speak to the practice, not a sales team. Every deliverable is
                reviewed before it reaches the firm.
              </p>
              <p className="mt-4">{CONDUCT_NOTICE}</p>
            </SectionHeading>
            <Button href="/about" variant="secondary">
              About the practice
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              kicker="Self-serve option"
              title="HDR Compass, if the firm wants to keep the work in-house"
            >
              <p>
                HDR Compass is a separate software product for firms that want
                to run the review themselves. The tool drafts; the firm&apos;s
                own fee earner confirms before anything is exported.
              </p>
            </SectionHeading>
            <div className="flex flex-wrap gap-3">
              <Button href="/hdr-compass" variant="secondary">
                About HDR Compass
              </Button>
              <a
                href={PRODUCT_URL}
                className="inline-flex items-center text-base text-accent hover:underline"
              >
                Visit hdrcompass.co.uk
              </a>
            </div>
          </div>
          <BrandVisual
            src="/images/workflow-desk.jpg"
            alt="A fee-earner's desk with a laptop and organised case papers"
            className="aspect-[4/3]"
            imgClassName="aspect-[4/3]"
          />
        </div>
      </section>

      <CtaBand title="Talk through the caseload">
        <p>
          Case support, training or AI implementation: we will tell you
          honestly whether we are the right fit, and how the work would be
          scoped.
        </p>
      </CtaBand>
    </>
  );
}
