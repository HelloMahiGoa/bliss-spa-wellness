import type { Metadata } from "next";
import Link from "next/link";
import { InnerPageLayout } from "@/components/site/InnerPageLayout";
import { services } from "@/data/services";
import {
  getWhatsAppHref,
  siteName,
  sitePhoneDisplay,
  sitePhoneTel,
  siteUrl,
} from "@/lib/site";

const canonical = `${siteUrl}/rates`;

const linkClass =
  "text-sage decoration-copper/25 font-semibold underline-offset-4 transition-colors hover:text-copper hover:underline";

export const metadata: Metadata = {
  title: "Massage & spa price list in GTB Nagar, Delhi (INR)",
  description:
    "Full price list for Blissful Spa & Wellness, Hudson Lane, GTB Nagar—relaxation, Thai, Balinese, deep tissue, couple massage, steam, jacuzzi, and more. All rates in Indian Rupees.",
  keywords: [
    "massage prices GTB Nagar",
    "spa rates Delhi Hudson Lane",
    "couple massage price Delhi",
    "Thai massage price GTB Nagar",
    "Blissful Spa price list",
    "massage INR Kingsway Camp",
  ],
  alternates: {
    canonical,
    languages: { "en-IN": canonical, en: canonical },
  },
  openGraph: {
    title: `Rates & pricing | ${siteName}`,
    description:
      "Transparent INR pricing for every massage and spa service on Hudson Lane, GTB Nagar. Compare duration and book by phone or WhatsApp.",
    url: canonical,
    siteName,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Rates | ${siteName}`,
    description:
      "Massage and spa prices in GTB Nagar, Delhi—all services in INR.",
  },
};

export default function RatesPage() {
  const waHref = getWhatsAppHref(
    `Hi ${siteName}, I'd like to ask about rates and book. `,
  );

  const itemListElements = services.map((s, i) => ({
    "@type": "ListItem" as const,
    position: i + 1,
    item: {
      "@type": "Service",
      name: s.title,
      description: s.shortDescription,
      url: `${siteUrl}/services/${s.slug}`,
      offers: {
        "@type": "Offer",
        price: String(s.priceInr),
        priceCurrency: "INR",
        description: s.duration,
      },
    },
  }));

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: `Rates & pricing | ${siteName}`,
        description:
          "Massage and spa service prices in Indian Rupees at Blissful Spa & Wellness, GTB Nagar, Delhi.",
        inLanguage: "en-IN",
        isPartOf: {
          "@type": "WebSite",
          name: siteName,
          url: siteUrl,
        },
      },
      {
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
            name: "Rates",
            item: canonical,
          },
        ],
      },
      {
        "@type": "ItemList",
        name: `${siteName} — services and prices`,
        numberOfItems: services.length,
        itemListElement: itemListElements,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <InnerPageLayout
        title="Rates & pricing"
        subtitle="Every service listed in Indian Rupees (INR)—same numbers you will see on each treatment page. Confirm final totals when you book; taxes may apply per current rules."
      >
        <nav
          className="text-ink/45 mb-10 text-xs font-medium"
          aria-label="Breadcrumb"
        >
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <li>
              <Link className="hover:text-sage transition-colors" href="/">
                Home
              </Link>
            </li>
            <li aria-hidden className="text-copper/40">
              /
            </li>
            <li className="text-ink/65">Rates</li>
          </ol>
        </nav>

        <div className="border-sage/20 from-sage/8 to-cream/40 mb-10 max-w-3xl rounded-2xl border bg-gradient-to-br px-5 py-4 sm:px-6 sm:py-5">
          <p className="text-ink/80 text-sm leading-relaxed sm:text-base">
            <span className="text-sage font-semibold">Tip:</span> tap a service
            name to open the full description, FAQs, and booking details. Not
            sure what to pick? Start with{" "}
            <Link href="/services/relaxation-massage" className={linkClass}>
              relaxation massage
            </Link>{" "}
            or{" "}
            <Link href="/services/swedish-massage" className={linkClass}>
              Swedish massage
            </Link>
            —or message us and we will suggest a fit.
          </p>
        </div>

        {/* Mobile: stacked cards (no horizontal scroll) */}
        <ul className="mb-10 flex min-w-0 flex-col gap-3 md:hidden" aria-label="Service prices">
          {services.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="border-ink/10 from-parchment/95 to-cream/40 hover:border-copper/25 active:bg-cream/50 flex flex-col gap-2 rounded-2xl border bg-gradient-to-br p-4 shadow-[0_8px_28px_-18px_rgba(28,25,23,0.15)] transition-[border-color,box-shadow]"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-ink font-semibold leading-snug">
                    {s.title}
                  </span>
                  <span className="text-sage font-display shrink-0 text-lg font-semibold tabular-nums">
                    {s.priceLabel}
                  </span>
                </div>
                <div className="text-ink/55 flex flex-wrap items-center gap-x-2 text-xs">
                  <span>{s.duration}</span>
                  {s.priceNote ? (
                    <>
                      <span aria-hidden className="text-ink/25">
                        ·
                      </span>
                      <span>{s.priceNote}</span>
                    </>
                  ) : null}
                </div>
                <span className="text-sage text-xs font-semibold">
                  View details →
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop: table */}
        <div className="mb-10 hidden min-w-0 md:block">
          <div className="hero-frame-shimmer overflow-hidden rounded-2xl p-[2px] shadow-[0_20px_50px_-28px_rgba(28,25,23,0.35)]">
            <div className="border-ink/8 overflow-hidden rounded-[0.9rem] border bg-parchment/95">
              <table className="w-full min-w-0 text-left text-sm">
                <thead>
                  <tr className="border-ink/10 from-cream/95 to-parchment/80 border-b bg-gradient-to-r text-xs font-bold tracking-wider text-ink/55 uppercase">
                    <th className="px-5 py-4 md:px-6" scope="col">
                      Service
                    </th>
                    <th className="px-5 py-4 md:px-6" scope="col">
                      Duration
                    </th>
                    <th className="text-ink px-5 py-4 md:px-6" scope="col">
                      Price (INR)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((s, rowIdx) => (
                    <tr
                      key={s.slug}
                      className={`border-ink/8 border-b transition-colors last:border-0 hover:bg-cream/40 ${
                        rowIdx % 2 === 1 ? "bg-cream/25" : ""
                      }`}
                    >
                      <th
                        className="text-ink px-5 py-4 font-normal md:px-6"
                        scope="row"
                      >
                        <Link
                          href={`/services/${s.slug}`}
                          className={linkClass}
                        >
                          {s.title}
                        </Link>
                      </th>
                      <td className="text-ink/65 px-5 py-4 md:px-6">
                        {s.duration}
                      </td>
                      <td className="text-sage px-5 py-4 font-display text-base font-semibold tabular-nums md:px-6 md:text-lg">
                        {s.priceLabel}
                        {s.priceNote ? (
                          <span className="text-ink/45 font-sans text-sm font-normal">
                            {" "}
                            ({s.priceNote})
                          </span>
                        ) : null}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <p className="text-ink/55 max-w-2xl text-sm leading-relaxed md:text-base">
          <Link href="/services" className={linkClass}>
            Browse the full services menu
          </Link>{" "}
          for what each session includes, or{" "}
          <Link href="/about" className={linkClass}>
            read about our studio
          </Link>
          .
        </p>

        <div className="from-sage-deep via-sage to-sage-deep mt-14 rounded-2xl bg-gradient-to-br p-6 text-center shadow-[0_20px_50px_-28px_rgba(44,59,50,0.45)] sm:p-8">
          <p className="font-display text-parchment text-xl tracking-tight sm:text-2xl">
            Book at these rates
          </p>
          <p className="text-parchment/85 mx-auto mt-2 max-w-md text-sm sm:text-base">
            Share your preferred service and time—we will confirm availability
            and anything you should know before you arrive.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
            <a
              href={sitePhoneTel}
              className="bg-parchment text-sage-deep hover:bg-cream focus-visible:ring-copper/50 inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              Call {sitePhoneDisplay}
            </a>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-parchment/15 text-parchment hover:bg-parchment/25 focus-visible:ring-copper/50 inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-semibold backdrop-blur-sm transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              WhatsApp
            </a>
            <Link
              href="/services"
              className="bg-parchment/15 text-parchment hover:bg-parchment/25 focus-visible:ring-copper/50 inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-semibold backdrop-blur-sm transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              All services
            </Link>
            <Link
              href="/contact"
              className="bg-parchment/15 text-parchment hover:bg-parchment/25 focus-visible:ring-copper/50 inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-semibold backdrop-blur-sm transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              Location
            </Link>
          </div>
        </div>
      </InnerPageLayout>
    </>
  );
}
