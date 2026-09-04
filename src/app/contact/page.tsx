import type { Metadata } from "next";
import BrandVisual from "@/components/BrandVisual";
import Button from "@/components/Button";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { BOOKING_URL, CONTACT_EMAIL, pageMetadata, PRODUCT_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  path: "/contact",
  description:
    "Talk to HDR Keel about case support, training or AI implementation. Book a call or email the practice.",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Talk to the practice"
        primaryHref={BOOKING_URL}
        primaryLabel="Book a call"
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
          Solicitor firms are welcome to get in touch about case support,
          training or AI implementation. You will speak to the practice, not a
          sales team.
        </p>
      </PageHero>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading kicker="Book or write" title="The two routes">
              <p>
                The quickest way to talk through what the firm needs is a short
                call. You will get a Google Meet link automatically. If a
                calendar booking does not suit, email us.
              </p>
            </SectionHeading>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button href={BOOKING_URL} variant="primary">
                Book a call
              </Button>
              <Button href={`mailto:${CONTACT_EMAIL}`} variant="secondary">
                {CONTACT_EMAIL}
              </Button>
            </div>
            <ul className="mt-10 space-y-5 text-base text-muted">
              <li>
                <span className="font-medium text-text">Case support</span>
                <p>
                  Overflow, leave cover, or a defined piece of file work,
                  including a whole 26-stage matter, a named phase, or
                  administrative support where that is what the matter needs.
                </p>
              </li>
              <li>
                <span className="font-medium text-text">
                  Training and AI consultancy
                </span>
                <p>
                  A training day, a five-day block, or a scoped implementation
                  in the firm&apos;s own workflow.
                </p>
              </li>
              <li>
                <span className="font-medium text-text">HDR Compass</span>
                <p>
                  For the self-serve software, visit{" "}
                  <a
                    href={PRODUCT_URL}
                    className="text-accent hover:underline"
                  >
                    hdrcompass.co.uk
                  </a>
                  .
                </p>
              </li>
            </ul>
          </div>
          <div className="space-y-8">
            <BrandVisual
              src="/images/case-files.jpg"
              alt="Housing disrepair case files and a chronology on a desk"
              className="aspect-[4/3]"
              imgClassName="aspect-[4/3]"
            />
            <div className="rounded-xl border border-line border-t-[3px] border-t-accent bg-surface p-6 sm:p-8">
            <h2 className="font-display text-2xl font-semibold text-text">
              What to have ready
            </h2>
            <ul className="mt-4 space-y-3 text-base leading-relaxed text-muted">
              <li>The jurisdiction of the caseload.</li>
              <li>The matter count, and where the capacity gap sits.</li>
              <li>
                Whether you need ongoing support, a time-boxed piece of work,
                or training.
              </li>
              <li>
                Nothing is charged or committed until the firm agrees the
                scope.
              </li>
            </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Book a call"
        secondaryHref="/services"
        secondaryLabel="See the services"
      />
    </>
  );
}
