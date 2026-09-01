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

const deskWork = [
  {
    title: "Intake triage",
    text: "Go/no-go on new files, so a firm knows early which matters are worth the time and cost.",
  },
  {
    title: "Disclosure reconciliation",
    text: "Reconciling disclosure against the pleaded defects, so gaps and admissions surface while the file is still the firm's to fix.",
  },
  {
    title: "Chronology and quantum",
    text: "Building the chronology and the quantum, from the rent record and the repair history to a defensible figure.",
  },
  {
    title: "Report drafting",
    text: "Drafting the reports and the letters of claim for the firm's review, sign-off and issue.",
  },
  {
    title: "Offers strategy",
    text: "Working the offers position, so the firm walks into negotiation with the numbers and the Part 36 logic in hand.",
  },
  {
    title: "Surveyor and expert instruction",
    text: "Supporting the instruction of surveyors and experts under the pre-action protocol, so the evidence is in place.",
  },
];

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

      <section className="bg-surface px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            kicker="What Shaine takes off the desk"
            title="The case work itself, on a monthly retainer"
          >
            <p>
              Each item below is a fee-earner task Shaine runs on live matters,
              delivered under the firm&apos;s instruction and capped at no more
              than 10 hours per week per client so he never over-commits.
            </p>
          </SectionHeading>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {deskWork.map((item) => (
              <Card key={item.title} title={item.title} heading="h3">
                <p>{item.text}</p>
              </Card>
            ))}
          </div>
          <p className="mt-8">
            <Button href="/pricing" variant="secondary">
              See the retainers
            </Button>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading
          kicker="Who it is for"
          title="Solicitors on housing disrepair, working under your conduct"
        >
          <p>
            HDR Keel works for solicitors on housing disrepair and associated
            personal injury that arises from it. It does not take consumer
            claims directly and does not work for claims management companies.
          </p>
        </SectionHeading>
        <div className="grid gap-6 md:grid-cols-2">
          <Card
            kicker="Is your firm the right fit"
            title="Who HDR Keel is for"
            heading="h2"
          >
            <p className="body-copy mt-6 flex-1 text-base leading-relaxed text-muted">
              The eligibility boundary, the exclusion list and the questions
              firms most often ask, answered directly.
            </p>
            <p className="mt-auto pt-6">
              <Button href="/for-solicitors" variant="secondary">
                Read who it is for
              </Button>
            </p>
          </Card>
          <Card
            kicker="How an engagement runs"
            title="How it works"
            heading="h2"
          >
            <p className="body-copy mt-6 flex-1 text-base leading-relaxed text-muted">
              From the first call to the retainer, the Article 28 data
              agreement, conduct and the first month of work.
            </p>
            <p className="mt-auto pt-6">
              <Button href="/how-it-works" variant="secondary">
                See how it works
              </Button>
            </p>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(16rem,22rem)_1fr]">
          <BrandVisual
            src="/images/shaine-stead.jpg"
            alt="Shaine Stead, housing disrepair fee earner"
            className="aspect-[4/5] w-full border-t-[3px] border-t-accent"
            imgClassName="object-top"
          />
          <div>
            <SectionHeading
              kicker="Meet Shaine"
              title="A fee earner who has run these cases"
            >
              <p>
                You will talk to a housing disrepair fee earner who has
                personally handled housing disrepair claim work since 2013,
                not a sales team. He is supported by Georgie on the backend,
                and every deliverable is Shaine&apos;s to review and sign off
                before it reaches the firm.
              </p>
              <p className="mt-4">
                The instructing firm retains conduct of the matter and all
                responsibility to its client and to the regulator. HDR Keel
                works under the firm&apos;s instruction and supervision.
              </p>
            </SectionHeading>
            <div className="flex flex-wrap gap-3">
              <Button href="/about" variant="secondary">
                About HDR Keel
              </Button>
            </div>
          </div>
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
