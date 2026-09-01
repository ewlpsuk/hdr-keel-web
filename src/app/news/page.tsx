import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import NewsList from "./NewsList";

export const metadata: Metadata = pageMetadata({
  title: "News",
  path: "/news",
  description:
    "A curated reading list of what HDR Keel is following across housing disrepair, housing law and legal technology in England and Wales.",
});

export default function NewsPage() {
  return <NewsList />;
}
