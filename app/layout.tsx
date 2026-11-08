import type { Metadata } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/header/Navbar";
import { siteDescription, siteName, siteUrl } from "@/lib/content";

const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});
const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-display",
});

const title = "WonderWalls - Painting, Plastering & Stone Walls in Kyrenia";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description: siteDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName,
    title,
    description: siteDescription,
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: siteDescription,
  },
  keywords: [
    "WonderWalls",
    "construction services",
    "painting and decorating",
    "plastering",
    "stone walls",
    "black stone",
    "yellow stone",
    "general construction",
    "quality craftsmanship",
    "construction solutions",
    "Kyrenia",
    "Girne",
    "Cyprus",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${sans.variable} ${display.variable}`}
    >
      <body className="font-sans text-[15px] leading-relaxed antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
