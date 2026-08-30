import type { Metadata } from "next";
import Button from "@/components/Button";
import Card from "@/components/Card";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { BOOKING_URL, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Pricing",
  path: "/pricing",
  description:
    "Monthly case-support retainers from £700, plus training and AI consultancy at £700 per day or £2,800 for a five-day week.",
});

const tiers = [
  {
    name: "Lite",
    hours: "10 hours per month",
    price: "£700",
    note: "For firms that need occasional cover",
  },
  {
    name: "Standard",
    hours: "20 hours per month",
    price: "£1,330",
    note: "For a regular part-time resource",
  },
  {
    name: "Pro",
    hours: "30 hours per month",
    price: "£1,890",
    note: "For heavy or complex caseloads",
  },
  {
    name: "Max",
    hours: "40 hours per month",
    price: "£2,380",
    note: "For near-continuous cover",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        kicker="Pricing"
        title="A monthly case-support retainer, plus training and AI consultancy"
      >
        <p>
          HDR Keel offers a monthly retainer for outsourced housing disrepair
          case support, and day rates for training and AI consultancy. The firm
          keeps conduct of its cases.
        </p>
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 pb-12">
        <SectionHeading kicker="Retainer" title="Case support retainer">
          <p>Prices fall per hour as you commit to more hours each month.</p>
        </SectionHeading>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {tiers.map((tier) => (
            <Card key={tier.name} title={tier.name}>
              <p className="font-mono text-sm text-accent-2">{tier.hours}</p>
              <p className="mt-3 font-display text-3xl font-bold text-text">
                {tier.price}{" "}
                <span className="text-base font-medium text-muted">
                  per month
                </span>
              </p>
              <p className="mt-3">{tier.note}</p>
              <p className="mt-6">
                <Button href={BOOKING_URL} variant="primary">
                  Book a call
                </Button>
              </p>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-muted">
          Not sure which tier fits? Book a call and we&apos;ll recommend the
          shape that suits you.{" "}
          <a href={BOOKING_URL} className="text-accent hover:underline">
            Contact HDR Keel
          </a>
        </p>
        <p className="mt-4 text-sm text-muted">
          Each retainer is for a set number of hours per month, delivered at no
          more than 10 hours per week per client. Unused hours roll over into
          the next month within the same quarter.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <SectionHeading
          kicker="Day rates"
          title="Training and AI consultancy"
        >
          <p>
            Training and AI consultancy are priced at £700 per day. A five-day
            block is £2,800, a reduced rate for booking a full week. A group
            session counts as one booking so a firm can send a whole team at no
            extra cost.
          </p>
        </SectionHeading>
        <Button href={BOOKING_URL} variant="primary">
          Book a training day
        </Button>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold text-text">
            Book a call
          </h2>
          <div className="mt-8">
            <Button href={BOOKING_URL} variant="primary">
              Book a call
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
