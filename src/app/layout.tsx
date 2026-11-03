import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const instrument = localFont({
  variable: "--font-instrument",
  display: "swap",
  src: [
    { path: "../../node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../../node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-italic.woff2", weight: "400", style: "italic" },
  ],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tenfolds.studio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "tenfolds — Websites for mutual fund distributors",
  description:
    "Compliant, custom websites for mutual fund distributors in India. Live in 7 days for a fixed ₹35,000, with a SEBI-ready audit report.",
  keywords: ["mutual fund distributor website", "MFD website", "ARN website", "AMFI compliant website", "IFA website India"],
  openGraph: {
    title: "tenfolds — Websites for mutual fund distributors",
    description: "Custom, compliant websites for MFDs. Live in 7 days. ₹35k fixed.",
    url: siteUrl,
    siteName: "tenfolds",
    locale: "en_IN",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "tenfolds", description: "Websites for mutual fund distributors, live in 7 days." },
};

export const viewport: Viewport = { themeColor: "#F3F0E9", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable} ${instrument.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
