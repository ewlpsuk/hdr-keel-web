import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import NewsList from "./NewsList";

export const metadata: Metadata = pageMetadata({
  title: "Housing disrepair news and legal updates",
  path: "/news",
  description:
    "Housing disrepair news, case law, regulation and legal technology updates for solicitors in England and Wales, curated daily by HDR Keel.",
});

export default function NewsPage() {
  return <NewsList />;
}
