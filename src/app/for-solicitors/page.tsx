import type { Metadata } from "next";
import Button from "@/components/Button";
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
      "The applicable law depends on the jurisdiction of the client's case. That is RHWA 2016 in Wales and LTA 1985, and Awaab's Law in England.",
  },
  {
    question: "Does HDR Keel handle general personal injury work?",
    answer:
      "HDR Keel assists with personal injury only where it arises from housing disrepair, and only under the instructed firm.",
  },
  {
    question: "What is referred back to the instructing firm?",
    answer:
      "Advocacy, court attendance, issuing, and anything the firm must hold itself. If a matter passes beyond these boundaries, or outside England and Wales housing disrepair plus associated personal injury arising from it, it is referred back to the instructing firm.",
  },
];

export default function ForSolicitorsPage() {
  return (
    <>
      <PageHero
        kicker="Who it is for"
        title="Solicitors on housing disrepair, working under your conduct"
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
          title="Who HDR Keel works for, plainly"
        >
          <p>
            HDR Keel is Shaine Stead&apos;s housing disrepair consultancy for
            solicitors. It delivers outsourced case support, training and AI
            implementation under the instructing firm&apos;s conduct. It does
            not take consumer claims directly and does not work for claims
            management companies.
          </p>
        </SectionHeading>
        <div className="grid gap-6 md:grid-cols-2">
          <Card kicker="In scope" title="Solicitors on housing disrepair" heading="h2">
            <p>
              Solicitors and authorised firms acting on housing disrepair and
              associated personal injury that arises from it, of any size, who
              want extra capacity or to keep conduct of the file while it is
              worked.
            </p>
          </Card>
          <Card kicker="Out of scope" title="Not consumer-facing, not CMCs" heading="h2">
            <p>
              HDR Keel does not take consumer claims directly and does not work
              for claims management companies. It does not handle general
              personal injury beyond what arises from housing disrepair.
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
              firm&apos;s to make and sign off. The applicable law depends on the
              jurisdiction of the client&apos;s case (RHWA 2016 in Wales; LTA
              1985 and Awaab&apos;s Law in England).
            </p>
            <p className="mt-4">
              HDR Keel processes claimant data only as the firm&apos;s processor,
              under a written data-processing agreement under Article 28 of the
              UK GDPR.
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
              className="rounded-xl border border-white/10 bg-surface p-6"
            >
              <h3 className="font-display text-lg font-medium text-text">
                {item.question}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-muted">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
        <p className="body-copy mt-8 text-base text-muted sm:text-lg">
          Not sure whether your firm fits? Book a call and talk it through.{" "}
          <a href={BOOKING_URL} className="text-accent hover:underline">
            Book a call
          </a>
          .
        </p>
      </section>

      <CtaBand title="Talk it through with Shaine">
        <p>You will speak to a housing disrepair fee earner, not a sales team.</p>
      </CtaBand>
    </>
  );
}
