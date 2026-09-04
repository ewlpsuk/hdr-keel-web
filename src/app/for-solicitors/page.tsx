import type { Metadata } from "next";
import BrandVisual from "@/components/BrandVisual";
import Card from "@/components/Card";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { BOOKING_URL, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Who it is for",
  path: "/for-solicitors",
  description:
    "HDR Keel works for solicitors on housing disrepair and associated personal injury arising from it, under the instructing firm's conduct.",
});

const questions = [
  {
    question: "Does HDR Keel take consumer claims directly?",
    answer:
      "No. HDR Keel does not take consumer claims directly. It works only under an instructed solicitor firm.",
  },
  {
    question: "Does HDR Keel work for claims management companies?",
    answer:
      "No. HDR Keel works for solicitors and authorised firms acting on housing disrepair. It does not work for claims management companies.",
  },
  {
    question: "What jurisdiction does HDR Keel cover?",
    answer:
      "The applicable law depends on the jurisdiction of the client's case. That is the Renting Homes (Wales) Act 2016 in Wales, and the Landlord and Tenant Act 1985 and Awaab's Law in England.",
  },
  {
    question: "Does HDR Keel handle general personal injury work?",
    answer:
      "HDR Keel assists with personal injury only where it arises from housing disrepair, and only under the instructed firm.",
  },
  {
    question: "What is referred back to the instructing firm?",
    answer:
      "Advocacy at hearings, court attendance, issuing, and anything the instructing firm must hold as the solicitor on the record. Preparing the issue pack, the trial bundle and the rest of the 26-stage file is in scope, for the firm's sign-off. If a matter passes outside England and Wales housing disrepair plus associated personal injury arising from it, it is referred back to the instructing firm.",
  },
];

export default function ForSolicitorsPage() {
  return (
    <>
      <PageHero
        kicker="Who it is for"
        title="Solicitor firms on housing disrepair, under your conduct"
        visualOnMobile
        visual={
          <BrandVisual
            src="/images/hero-terrace-day.jpg"
            alt="A row of English terraced houses"
            className="h-full min-h-[18rem]"
            imgClassName="aspect-[16/10] lg:aspect-auto lg:h-full"
          />
        }
      >
        <p>
          HDR Keel works for solicitors and authorised firms acting on housing
          disrepair and associated personal injury that arises from it, under
          the instructing firm&apos;s conduct.
        </p>
      </PageHero>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <SectionHeading
          kicker="Eligibility"
          title="Who we work for, plainly"
        >
          <p>
            HDR Keel is a housing disrepair consultancy for solicitors. We
            deliver outsourced case support, training and AI implementation
            under the instructing firm&apos;s conduct. We do not take consumer
            claims directly and we do not work for claims management companies.
          </p>
        </SectionHeading>
        <div className="grid gap-6 md:grid-cols-2">
          <Card kicker="In scope" title="Solicitors on housing disrepair" heading="h2" featured>
            <p>
              Solicitors and authorised firms acting on housing disrepair and
              associated personal injury that arises from it, of any size, who
              want extra capacity or to keep conduct of the file while it is
              worked.
            </p>
          </Card>
          <Card kicker="Out of scope" title="Not consumer-facing, not CMCs" heading="h2">
            <p>
              We do not take consumer claims directly and we do not work for
              claims management companies. We do not handle general personal
              injury beyond what arises from housing disrepair.
            </p>
          </Card>
        </div>
      </section>

      <section className="bg-surface px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <SectionHeading kicker="Boundaries" title="The firm keeps conduct at all times">
            <p>
              HDR Keel works under the instructing firm&apos;s instruction and
              supervision. All advice, correspondence and decisions are the
              firm&apos;s to make and sign off. The applicable law depends on
              the jurisdiction of the client&apos;s case: the Renting Homes
              (Wales) Act 2016 in Wales; the Landlord and Tenant Act 1985 and
              Awaab&apos;s Law in England.
            </p>
            <p className="mt-4">
              HDR Keel processes claimant data only as the firm&apos;s
              processor, under a written data-processing agreement under
              Article 28 of the UK GDPR.
            </p>
          </SectionHeading>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <SectionHeading kicker="Questions firms ask" title="Straight answers" />
        <div className="space-y-4">
          {questions.map((item) => (
            <div
              key={item.question}
              className="rounded-xl border border-line border-l-[3px] border-l-accent bg-surface p-6"
            >
              <h3 className="font-display text-lg font-semibold text-text">
                {item.question}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-muted">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-base text-muted sm:text-lg">
          Not sure whether the firm fits?{" "}
          <a href={BOOKING_URL} className="text-accent hover:underline">
            Book a call
          </a>{" "}
          and talk it through.
        </p>
      </section>

      <CtaBand title="Talk it through with the practice">
        <p>You will speak to the team, not a sales desk.</p>
      </CtaBand>
    </>
  );
}
