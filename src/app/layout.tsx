import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import {
  defaultOgImagePath,
  sameAsLinks,
  siteAddress,
  siteDescription,
  siteName,
  sitePhoneDisplay,
  siteUrl,
} from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Massage Spa GTB Nagar Delhi`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "massage spa GTB Nagar",
    "spa Hudson Lane Delhi",
    "Kingsway Camp massage",
    "couple massage North Delhi",
    "Thai massage Delhi",
    "steam massage Delhi",
  ],
  openGraph: {
    title: siteName,
    description: siteDescription,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: defaultOgImagePath,
        width: 1200,
        height: 630,
        alt: `${siteName} — massage and wellness spa in GTB Nagar, Delhi`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: [defaultOgImagePath],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "DaySpa",
  name: siteName,
  description: siteDescription,
  url: siteUrl,
  sameAs: [...sameAsLinks],
  telephone: `+91-${sitePhoneDisplay}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${siteAddress.line1}, ${siteAddress.line2}, ${siteAddress.line3}`,
    addressLocality: siteAddress.city,
    addressRegion: siteAddress.region,
    postalCode: siteAddress.postalCode,
    addressCountry: "IN",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "09:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "09:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "18:00",
    },
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
      className={`${outfit.variable} ${cormorant.variable} h-full scroll-smooth antialiased`}
    >
      <body className="font-sans flex min-h-full min-w-0 flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
