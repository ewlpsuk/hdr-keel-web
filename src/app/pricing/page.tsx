import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import { BOOKING_URL, CONTACT_EMAIL, pageMetadata } from "@/lib/site";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Fees",
    path: "/pricing",
    description:
      "HDR Keel agrees fees to the work. There is no published rate card. Book a call or email the practice.",
  }),
  robots: { index: false, follow: true },
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        kicker="Fees"
        title="We agree the fee to the work"
        primaryHref={BOOKING_URL}
        primaryLabel="Book a call"
      >
        <p>
          There is no published rate card. Some engagements are fee-earner
          work; some are administrative support on the same files. We scope
          the hours and the fee on a call, and nothing is charged until the
          firm agrees.
        </p>
        <p className="mt-4">
          Prefer to write?{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-accent hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
        </p>
      </PageHero>
      <CtaBand title="Talk through the scope" />
    </>
  );
}
