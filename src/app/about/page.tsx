import type { Metadata } from "next";
import BrandVisual from "@/components/BrandVisual";
import Card from "@/components/Card";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { CONDUCT_NOTICE, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About",
  path: "/about",
  description:
    "HDR Keel is a housing disrepair consultancy for solicitors. The instructing firm keeps conduct of its cases.",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About HDR Keel"
        title="A specialist housing disrepair practice for solicitors"
        visualOnMobile
        visual={
          <BrandVisual
            src="/images/shaine-stead.jpg"
            alt="Shaine Stead, principal of HDR Keel"
            className="w-full"
            imgClassName="aspect-[4/5] object-top"
            caption="Shaine Stead, principal"
          />
        }
      >
        <p>
          HDR Keel is a consultancy for solicitor firms that need extra
          capacity on housing disrepair. The practice is led by Shaine Stead,
          with operations support.
        </p>
      </PageHero>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <SectionHeading kicker="Who we are" title="A team built from the work">
          <p>
            The practice exists to take housing disrepair case work off a
            firm&apos;s desks: the 26-stage file from vetting through to
            post-judgment, plus training and help embedding AI in the
            workflow. When a firm is short-staffed, on leave or simply
            overloaded, we step in under the firm&apos;s instruction.
          </p>
          <p className="mt-4">
            Shaine Stead leads the practice. He has personally handled housing
            disrepair claim work since 2013. Fee-earner work is reviewed before
            it reaches the instructing firm. Operations colleagues handle the
            administration that keeps an engagement running cleanly.
          </p>
          <p className="mt-4">
            Claimant files, including health and location information, are
            handled only under the instructing firm&apos;s documented
            instructions for each matter. The instructing firm is the data
            controller for the client&apos;s personal data. HDR Keel processes
            that data only as the firm&apos;s processor, under a written
            data-processing agreement under Article 28 of the UK GDPR.
          </p>
        </SectionHeading>
      </section>

      <section className="bg-surface px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading kicker="How we work" title="What does not change" />
          <div className="grid gap-6 md:grid-cols-3">
            <Card title="The firm keeps conduct">
              <p>
                We support the firm. The firm&apos;s responsibility to its
                client stays with the firm. HDR Keel works under instruction
                and supervision.
              </p>
            </Card>
            <Card title="Built from practice">
              <p>
                The team has run these cases. That experience is offered as
                case support, training and AI implementation, not as a
                sales overlay.
              </p>
            </Card>
            <Card title="Solicitors only">
              <p>
                We work for solicitors on housing disrepair and associated
                personal injury. We do not take consumer claims directly.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-accent-soft px-6 py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <BrandVisual
            src="/images/practice-street.jpg"
            alt="A British high street of terraced buildings"
            className="aspect-[4/3]"
            imgClassName="aspect-[4/3]"
          />
          <SectionHeading kicker="Where the work sits" title="England and Wales housing disrepair">
            <p>
              The files are housing disrepair and associated personal injury
              that arises from it. The applicable law depends on the
              jurisdiction of the client&apos;s case. The instructing firm
              keeps conduct throughout.
            </p>
          </SectionHeading>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <blockquote className="rounded-xl border border-line border-l-[3px] border-l-accent-2 bg-accent-soft p-6 text-base leading-relaxed text-muted sm:p-8">
          {CONDUCT_NOTICE}
        </blockquote>
      </section>

      <CtaBand title="If the firm needs housing disrepair capacity">
        <p>Tell us the caseload and we will tell you how we would staff it.</p>
      </CtaBand>
    </>
  );
}
