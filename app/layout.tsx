import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import { site } from "@/content";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const sourceSans = Source_Sans_3({ subsets: ["latin"], variable: "--font-source-sans" });

export const metadata: Metadata = {
  title: `${site.shortName} | ${site.tagline}`,
  description: site.metaDescription,
  openGraph: {
    title: `${site.shortName} | ${site.tagline}`,
    description: site.metaDescription,
    siteName: site.shortName,
    locale: "en_NG",
    type: "website",
    images: [{ url: site.heroPoster, alt: `${site.shortName} Signature Dish` }],
  },
  icons: { icon: site.logo },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${sourceSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
