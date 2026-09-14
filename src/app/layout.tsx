import type { Metadata, Viewport } from "next";
import { Archivo, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/top-bar";
import { IndexRail } from "@/components/index-rail";
import { Footer } from "@/components/footer";
import { profile, siteUrl } from "@/lib/content";

const display = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.shortName} — ${profile.role}`,
    template: `%s — ${profile.shortName}`,
  },
  description:
    "Parth Bipinchandra Nirmal — MS Business Analytics and Information Management at Purdue. Strategy and analytics consulting, product requirements, and executive reporting. Seeking a Product, Project, or Program Management full-time role.",
  keywords: [
    "Parth Bipinchandra Nirmal",
    "Business Analytics",
    "Product Management",
    "Program Management",
    "Purdue Daniels School of Business",
    "BAIM",
    "Data Analytics",
    "Kearney",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "profile",
    title: `${profile.shortName} — ${profile.role}`,
    description:
      "Complex data in, clear decisions out. Purdue BAIM '26, seeking Product / Project / Program Management full-time roles.",
    url: siteUrl,
    siteName: profile.shortName,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.shortName} — ${profile.role}`,
    description:
      "Purdue BAIM '26. Strategy & analytics consulting, product requirements, executive reporting.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#F3EFE7",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${sans.variable} ${mono.variable} paper-grain antialiased`}
      >
        <a
          href="#top"
          className="no-print sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:border focus:border-ink focus:bg-paper focus:px-3 focus:py-2 focus:font-mono focus:text-xs"
        >
          Skip to content
        </a>

        <TopBar />
        <IndexRail />
        <main className="pt-14">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
