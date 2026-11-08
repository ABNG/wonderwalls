import type { Metadata } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/header/Navbar";

const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});
const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "WonderWalls - Transforming Spaces in Kyrenia, Cyprus",
  description:
    "WonderWalls is your trusted partner for painting and decorating, plastering, stone wall construction, and general construction services in Kyrenia, Cyprus. With over 18 years of experience and 1200+ successful projects, we deliver excellence in every aspect of construction, ensuring premium quality and innovative solutions tailored to your needs.",
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
