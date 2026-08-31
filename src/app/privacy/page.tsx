import type { Metadata } from "next";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { BOOKING_URL, pageMetadata } from "@/lib/site";

const CONTROLLER_EMAIL = "privacy@hdrkeel.co.uk";

export const metadata: Metadata = pageMetadata({
  title: "Privacy notice",
  path: "/privacy",
  description:
    "Shaine Stead is the data controller for hdrkeel.co.uk. HDR Keel processes claimant data as a processor under Article 28 of the UK GDPR.",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero kicker="Privacy notice" title="How HDR Keel handles personal data">
        <p>
          This notice explains who controls the personal data on this website
          and how personal data is handled when HDR Keel supports a firm on
          claim work.
        </p>
      </PageHero>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <SectionHeading kicker="Who controls the data" title="Controller">
          <p>
            The data controller for this website is{" "}
            <span className="text-text">Shaine Stead</span>, registered with
            the Information Commissioner&apos;s Office under registration
            number ZB861396.
          </p>
          <p className="mt-4">
            The controller can be contacted at{" "}
            <a
              href={`mailto:${CONTROLLER_EMAIL}`}
              className="text-accent hover:underline"
            >
              {CONTROLLER_EMAIL}
            </a>
            .
          </p>
        </SectionHeading>

        <SectionHeading kicker="Grounds for processing" title="Personal data on this website">
          <p>
            This website is operated for solicitors to learn about and enquire
            about HDR Keel&apos;s consultancy services. When a firm books a call
            or makes an enquiry, the personal data provided is held and used
            only to respond to and progress that enquiry.
          </p>
          <p className="mt-4">
            The website does not collect or process special-category personal
            data on its own behalf.
          </p>
        </SectionHeading>

        <SectionHeading kicker="Claim work" title="HDR Keel as a processor">
          <p>
            Where HDR Keel supports a firm on claim work, the instructing firm
            is the data controller for the client&apos;s personal data and
            keeps conduct of the matter. Any personal data in a claimant
            file, including health and location information, is processed by
            HDR Keel only as the firm&apos;s processor under a written
            data-processing agreement made under Article 28 of the UK GDPR,
            and only under the firm&apos;s documented instructions for each
            matter.
          </p>
          <p className="mt-4">
            The instructing firm remains responsible to its client and to the
            regulator for the handling of that data. HDR Keel supports the
            firm and does not take on consumer claims directly.
          </p>
        </SectionHeading>

        <SectionHeading kicker="Where data is held" title="Storage and security">
          <p>
            Personal data is held securely and only for as long as it is needed
            for the purpose for which it was provided, or as required by law.
            HDR Keel does no online payment processing on this website and
            stores no payment details.
          </p>
        </SectionHeading>

        <SectionHeading kicker="Your rights" title="Your rights and contact">
          <p>
            If you are a client of a firm that HDR Keel supports, your rights
            over your personal data are exercised through the instructing firm
            as the controller. If you have a question about this notice or how
            your data is handled, email the controller at{" "}
            <a
              href={`mailto:${CONTROLLER_EMAIL}`}
              className="text-accent hover:underline"
            >
              {CONTROLLER_EMAIL}
            </a>
            . Data protection enquiries are handled directly and confidentially.
          </p>
          <p className="mt-4">
            This site and the handling of personal data under it are governed
            by the laws of England and Wales.
          </p>
        </SectionHeading>

        <SectionHeading kicker="How to reach the controller" title="Contact">
          <p>
            For data protection enquiries, email the controller directly at{" "}
            <a
              href={`mailto:${CONTROLLER_EMAIL}`}
              className="text-accent hover:underline"
            >
              {CONTROLLER_EMAIL}
            </a>
            . You can also book a short call using the booking slot on this
            site if you prefer to speak to someone.
          </p>
          <Button href={BOOKING_URL} variant="primary">
            Book a call
          </Button>
        </SectionHeading>
      </section>
    </>
  );
}
