import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://parkcityincline.com"),
  title: "Park City Incline — A Free Step Trail at PCMR",
  description: site.description,
  openGraph: {
    title: site.ogTitle,
    description: site.ogDescription,
    images: [{ url: "/images/hero-dual-stairs.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.ogTitle,
    description: site.ogDescription,
    images: ["/images/hero-dual-stairs.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-snow font-sans text-forest">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
