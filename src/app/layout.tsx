import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import SkipLink from "@/components/SkipLink";
import { pageMetadata } from "@/lib/site";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-source-sans",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-source-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hdrkeel.co.uk"),
  ...pageMetadata({
    title: "HDR Keel",
    path: "/",
    description:
      "Housing disrepair consultancy for solicitors: case support, training and AI implementation, under the instructing firm's conduct.",
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${sourceSans.variable} ${sourceSerif.variable}`}
    >
      <body className="flex min-h-screen flex-col antialiased">
        <SkipLink />
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
