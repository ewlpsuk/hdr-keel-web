import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { pageMetadata } from "@/lib/site";
import NewsList from "./NewsList";

export const metadata: Metadata = pageMetadata({
  title: "News",
  path: "/news",
  description:
    "A curated reading list of what HDR Keel is following across housing disrepair, housing law and legal technology in England and Wales.",
});

export default function NewsPage() {
  return (
    <>
      <PageHero kicker="News" title="A curated reading list for housing disrepair firms">
        <p>
          This page is a curated reading list. Each working day we read the
          legal, housing and legal-technology press and link to stories we
          think solicitors working in housing disrepair may want to read. It is
          a reading list, not legal advice and not HDR Keel&apos;s own
          commentary.
        </p>
      </PageHero>

      <NewsList />

      <CtaBand title="Talk it through with Shaine">
        <p>
          You will speak to a housing disrepair fee earner, not a sales team.
        </p>
      </CtaBand>
    </>
  );
}
