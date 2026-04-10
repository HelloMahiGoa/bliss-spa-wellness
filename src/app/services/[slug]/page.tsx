import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { ServicePageView } from "@/components/site/ServicePageView";
import {
  getAllServiceSlugs,
  getPricingTiers,
  getServiceBySlug,
} from "@/data/services";
import { getServiceImageSrc } from "@/lib/service-images";
import {
  siteAddress,
  siteLocalSeoLine,
  siteName,
  sitePhoneDisplay,
  siteUrl,
} from "@/lib/site";

function buildServiceKeywords(
  serviceTitle: string,
  extra?: readonly string[],
): string[] {
  const base = [
    `${serviceTitle} Delhi`,
    `${serviceTitle} GTB Nagar`,
    `${serviceTitle} Hudson Lane`,
    `${serviceTitle} ${siteName}`,
    "massage spa North Delhi",
    "Kingsway Camp spa",
  ];
  const merged = [...(extra ?? []), ...base];
  return [...new Set(merged)];
}

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    return { title: "Service" };
  }

  const canonical = `${siteUrl}/services/${slug}`;
  const ogImage = `${siteUrl}${getServiceImageSrc(slug)}`;
  const keywords = buildServiceKeywords(service.title, service.seoKeywords);

  return {
    title: {
      absolute: service.metaTitle,
    },
    description: service.metaDescription,
    keywords,
    authors: [{ name: siteName, url: siteUrl }],
    category: "health",
    alternates: {
      canonical,
      languages: {
        "en-IN": canonical,
        en: canonical,
      },
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: canonical,
      siteName,
      locale: "en_IN",
      alternateLocale: ["en_US"],
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${service.title} at ${siteName}, GTB Nagar`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    other: {
      "geo.region": "IN-DL",
      "geo.placename": `${siteAddress.city}, ${siteAddress.region}`,
      "geo.position": "28.6951;77.2018",
      ICBM: "28.6951, 77.2018",
      "business:contact_data:locality": siteAddress.city,
      "business:contact_data:region": siteAddress.region,
      "business:contact_data:postal_code": siteAddress.postalCode,
      "business:contact_data:country_name": siteAddress.country,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const pageUrl = `${siteUrl}/services/${slug}`;
  const imageUrl = `${siteUrl}${getServiceImageSrc(slug)}`;
  const tiers = getPricingTiers(service);
  const offerSchema =
    tiers.length > 1
      ? {
          "@type": "AggregateOffer" as const,
          lowPrice: String(Math.min(...tiers.map((t) => t.priceInr))),
          highPrice: String(Math.max(...tiers.map((t) => t.priceInr))),
          priceCurrency: "INR",
          offerCount: tiers.length,
          availability: "https://schema.org/InStock",
          url: pageUrl,
          description: tiers
            .map((t) => `${t.duration}: ${t.priceLabel}`)
            .join(" · "),
        }
      : {
          "@type": "Offer" as const,
          price: String(service.priceInr),
          priceCurrency: "INR",
          priceValidUntil: "2027-12-31",
          availability: "https://schema.org/InStock",
          url: pageUrl,
          description: `${service.duration}${service.priceNote ? ` · ${service.priceNote}` : ""}`,
        };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: service.title,
    description: service.metaDescription,
    url: pageUrl,
    image: imageUrl,
    serviceType: "Massage therapy",
    category: "HealthAndBeautyBusiness",
    areaServed: {
      "@type": "City",
      name: "New Delhi",
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Delhi",
      },
    },
    provider: {
      "@type": "DaySpa",
      name: siteName,
      url: siteUrl,
      image: imageUrl,
      address: {
        "@type": "PostalAddress",
        addressLocality: "New Delhi",
        addressRegion: "Delhi",
        postalCode: "110009",
        streetAddress:
          "1st Floor, 2521 Hudson Lane, Above Mr Crust, Near Uttam Chai, Kingsway Camp, GTB Nagar",
        addressCountry: "IN",
      },
      telephone: `+91-${sitePhoneDisplay}`,
    },
    offers: offerSchema,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${siteUrl}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: pageUrl,
      },
    ],
  };

  const faqJsonLd =
    service.faqs && service.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: service.faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.answer,
            },
          })),
        }
      : null;

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: service.metaTitle,
    description: service.metaDescription,
    inLanguage: "en-IN",
    isPartOf: {
      "@type": "WebSite",
      name: siteName,
      url: siteUrl,
    },
    about: { "@id": `${pageUrl}#service` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: imageUrl,
      caption: `${service.title} — ${siteLocalSeoLine}`,
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["#service-hero-heading", "[data-seo='treatment-lead']"],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      ) : null}
      <Header />
      <main className="flex min-w-0 flex-1 flex-col">
        <ServicePageView service={service} />
      </main>
      <Footer />
    </>
  );
}
