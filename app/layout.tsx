import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Influencer Marketing Agency | The Hype",
  description:
    "The Hype - Influencer marketing, content creation and brand-building through creator partnerships. Grow with measurable results.",
  openGraph: {
    title: "Influencer Marketing Agency | The Hype",
    description:
      "The Hype - Influencer marketing, content creation and brand-building through creator partnerships. Grow with measurable results.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} ${inter.className}`}
      >
        {/* Common Navbar on all pages */}
        <Navbar />

        {/* Page content */}
        <main className="pt-[80px]">{children}</main>

        {/* Common Footer on all pages */}
        <Footer />
      </body>
    </html>
  );
}
