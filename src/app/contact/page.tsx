import type { Metadata } from "next";
import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { BOOKING_URL, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  path: "/contact",
  description:
    "Contact HDR Keel. Talk to a housing disrepair fee earner about case support, training or AI implementation. Book a call directly.",
});

export default function ContactPage() {
  return (
    <>
      <PageHero kicker="Contact" title="Get in touch">
        <p>
          Solicitors are invited to get in touch about case support, training
          or AI implementation. You&apos;ll talk to a housing disrepair fee
          earner who has run these cases, not a sales team.
        </p>
      </PageHero>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-16 lg:grid-cols-2">
        <div>
          <SectionHeading kicker="Routes" title="Book a call">
            <p>
              The quickest way to talk through what your firm needs is to book a
              short call. You&apos;ll get a Google Meet link automatically.
            </p>
          </SectionHeading>
          <div className="mt-4">
            <Button
              href={BOOKING_URL}
              variant="primary"
            >
              Book a call
            </Button>
          </div>
          <ul className="mt-8 space-y-4 text-muted">
            <li>
              <span className="font-display text-text">Case support</span>
              <p>
                Book a call to discuss a monthly retainer for outsourced case
                work.
              </p>
            </li>
            <li>
              <span className="font-display text-text">
                Training and AI consultancy
              </span>
              <p>
                Book a call to plan a training day or AI implementation session.
              </p>
            </li>
            <li>
              <span className="font-display text-text">The related product</span>
              <p>
                For the self-serve software, visit{" "}
                <a
                  href="https://hdrcompass.co.uk"
                  className="text-accent-2 hover:text-accent"
                >
                  hdrcompass.co.uk
                </a>
                .
              </p>
            </li>
          </ul>
        </div>
        <ContactForm />
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <Button href={BOOKING_URL} variant="primary">
            Book a call
          </Button>
          <Button href="/services" variant="secondary">
            See the services
          </Button>
        </div>
      </section>
    </>
  );
}
