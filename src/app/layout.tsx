import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { campaign } from "@/lib/content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://parkcityincline.com"),
  title: {
    default: `${campaign.name} — A Wasatch staircase for Park City`,
    template: `%s · ${campaign.name}`,
  },
  description: campaign.lede,
  openGraph: {
    title: `${campaign.name} — ${campaign.tagline}`,
    description: campaign.lede,
    images: [{ url: "/images/hero-park-city-incline.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: campaign.name,
    description: campaign.lede,
    images: ["/images/hero-park-city-incline.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
