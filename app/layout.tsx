import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Jost, Mrs_Saint_Delafield } from "next/font/google";
import { SiteShell } from "@/components/ui/SiteShell";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const scriptFace = Mrs_Saint_Delafield({
  subsets: ["latin"],
  variable: "--font-script-face",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://manalijagtap.com"),
  title: "Manali Jagtap — Travel & Lifestyle Creator",
  description:
    "Mumbai-based travel and lifestyle creator curating journeys you'll feel, not just see. Travel films, stay tours, café features and brand campaigns for travel, hospitality and beauty brands.",
  keywords: [
    "Manali Jagtap",
    "travel creator",
    "travel creator Mumbai",
    "lifestyle influencer",
    "stay tours",
    "café content",
    "Instagram creator",
    "travel portfolio",
  ],
  authors: [{ name: "Manali Jagtap" }],
  openGraph: {
    title: "Manali Jagtap — Travel & Lifestyle Creator",
    description:
      "Travel, stays, cafés and beauty content. Based in Mumbai, filming everywhere. 525K views in the last 30 days.",
    type: "website",
    url: "https://manalijagtap.com",
    siteName: "Manali Jagtap",
    images: [
      {
        url: "/images/meet-manali.webp",
        width: 900,
        height: 1125,
        alt: "Manali Jagtap — travel and lifestyle creator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manali Jagtap — Travel & Lifestyle Creator",
    description:
      "Travel, stays, cafés and beauty content — with the pacing of a film and the honesty of a friend's recommendation.",
    images: ["/images/meet-manali.webp"],
  },
};

export const viewport: Viewport = {
  themeColor: "#f4ede1",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bodoni.variable} ${jost.variable} ${scriptFace.variable}`}
    >
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
