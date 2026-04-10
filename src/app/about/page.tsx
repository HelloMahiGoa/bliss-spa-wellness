import type { Metadata } from "next";
import Link from "next/link";
import { InnerPageLayout } from "@/components/site/InnerPageLayout";
import {
  formatAddressBlock,
  getGoogleMapsSearchUrl,
  getWhatsAppHref,
  siteLocalSeoLine,
  siteName,
  sitePhoneDisplay,
  sitePhoneTel,
  siteUrl,
} from "@/lib/site";

const canonical = `${siteUrl}/about`;

export const metadata: Metadata = {
  title: "About us — massage & wellness studio in GTB Nagar, Delhi",
  description:
    "Meet Blissful Spa & Wellness: a calm massage studio on Hudson Lane, GTB Nagar. Private rooms, skilled therapists, Thai & Balinese massage, couples, steam & jacuzzi—book by phone or WhatsApp.",
  keywords: [
    "Blissful Spa GTB Nagar",
    "massage spa Hudson Lane Delhi",
    "about Blissful Spa",
    "wellness studio Kingsway Camp",
    "spa near DU North Campus",
    "massage studio New Delhi 110009",
  ],
  alternates: {
    canonical,
    languages: { "en-IN": canonical, en: canonical },
  },
  openGraph: {
    title: `About ${siteName} | GTB Nagar, Delhi`,
    description:
      "Massage and wellness on Hudson Lane—relaxation, therapeutic, couples, steam & jacuzzi. Private rooms and therapists who listen.",
    url: canonical,
    siteName,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `About ${siteName}`,
    description:
      "Calm massage studio in GTB Nagar, Delhi. Hudson Lane, Kingsway Camp.",
  },
};

const pillars = [
  {
    title: "Listen first",
    body: "We ask how you feel, what hurts, and how you like pressure—before oil touches skin. No rigid scripts that ignore your day.",
  },
  {
    title: "Real quiet",
    body: "Soft light, fresh linens, and rooms set apart from the street so Hudson Lane fades behind the door. This is time for your nervous system, not noise.",
  },
  {
    title: "Clear choices",
    body: "Every service lists duration and price in INR. Our site explains what to expect so you book what fits—whether you want gentle rest or firmer therapeutic work.",
  },
] as const;

export default function AboutPage() {
  const waHref = getWhatsAppHref(
    `Hi ${siteName}, I'd like to know more about booking. `,
  );

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
        name: "About",
        item: canonical,
      },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${canonical}#about`,
    url: canonical,
    name: `About ${siteName}`,
    description:
      "Massage and wellness studio in GTB Nagar, Delhi—Hudson Lane, Kingsway Camp. Private rooms, skilled therapists, steam and jacuzzi options.",
    inLanguage: "en-IN",
    isPartOf: {
      "@type": "WebSite",
      name: siteName,
      url: siteUrl,
    },
    about: {
      "@type": "DaySpa",
      name: siteName,
      url: siteUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <InnerPageLayout
        title="About Blissful"
        subtitle={`${siteLocalSeoLine} We built this studio for neighbours, students, and anyone who needs a dependable place to exhale.`}
      >
        <nav
          className="text-ink/45 mb-10 text-xs font-medium"
          aria-label="Breadcrumb"
        >
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <li>
              <Link
                className="hover:text-sage transition-colors"
                href="/"
              >
                Home
              </Link>
            </li>
            <li aria-hidden className="text-copper/40">
              /
            </li>
            <li className="text-ink/65">About</li>
          </ol>
        </nav>

        <div className="border-sage/20 from-parchment/95 to-cream/45 shadow-ink/6 relative mb-12 max-w-3xl rounded-[1.35rem] border bg-gradient-to-br p-6 sm:p-8 sm:pl-9 shadow-[0_18px_48px_-30px_rgba(28,25,23,0.18)]">
          <div
            className="from-sage-deep to-sage absolute top-6 bottom-6 left-0 w-1 rounded-full bg-gradient-to-b sm:top-8 sm:bottom-8"
            aria-hidden
          />
          <p className="text-ink/90 text-[1.05rem] font-medium leading-[1.75] sm:text-lg sm:leading-[1.8]">
            {siteName} exists for people in North Delhi who want{" "}
            <span className="text-ink">honest rest</span> without crossing half
            the city. Above Mr Crust on Hudson Lane—steps from Uttam Chai—we
            keep the mood unhurried: therapists who adjust in real time, private
            rooms, and treatments from quick head and back sessions to
            full-body rituals, couples massage, steam, and jacuzzi experiences.
          </p>
        </div>

        <div className="grid min-w-0 gap-10 lg:grid-cols-2 lg:gap-14">
          <section aria-labelledby="about-story">
            <h2
              id="about-story"
              className="text-copper text-[0.65rem] font-bold uppercase tracking-[0.22em]"
            >
              Our story
            </h2>
            <p className="text-ink/75 mt-4 text-base leading-[1.75]">
              Delhi is loud—traffic, deadlines, screens. We wanted a small
              studio that felt like a buffer: somewhere you could book after
              exams, after a long shift, or when your shoulders have been
              sitting at your ears all week. Guests from GTB Nagar metro,
              Kingsway Camp, and DU North Campus tell us they like not having to
              &quot;plan a whole day&quot; around one massage.
            </p>
            <p className="text-ink/75 mt-4 text-base leading-[1.75]">
              That shaped how we work—transparent pricing, clear treatment
              pages, and no pressure to add what you do not want. If you are new
              to massage, we will talk you through options. If you already know
              you need deep tissue or Thai, we respect that too.
            </p>
          </section>
          <section aria-labelledby="about-offer">
            <h2
              id="about-offer"
              className="text-copper text-[0.65rem] font-bold uppercase tracking-[0.22em]"
            >
              What we offer
            </h2>
            <p className="text-ink/75 mt-4 text-base leading-[1.75]">
              Relaxation and Swedish-style massage, aromatherapy, deep tissue,
              sports massage, Thai and Balinese sessions, hot stones, targeted
              head and back work, foot massage, couple massage, and packages with
              steam or jacuzzi. Each service has its own page with FAQs where it
              helps—so you know duration, price, and what happens in the room.
            </p>
            <ul className="text-ink/70 mt-5 space-y-2 text-sm leading-relaxed sm:text-base">
              <li className="flex gap-2">
                <span className="text-sage font-semibold" aria-hidden>
                  ·
                </span>
                <span>Private rooms and fresh linens every visit</span>
              </li>
              <li className="flex gap-2">
                <span className="text-sage font-semibold" aria-hidden>
                  ·
                </span>
                <span>Pressure and focus areas tailored to you</span>
              </li>
              <li className="flex gap-2">
                <span className="text-sage font-semibold" aria-hidden>
                  ·
                </span>
                <span>Book by phone or WhatsApp—same-day sometimes available</span>
              </li>
            </ul>
          </section>
        </div>

        <section
          className="mt-14"
          aria-labelledby="about-pillars"
        >
          <h2
            id="about-pillars"
            className="font-display text-ink text-2xl tracking-tight md:text-3xl"
          >
            What you can expect from us
          </h2>
          <p className="text-ink/60 mt-3 max-w-2xl text-sm md:text-base">
            Three things we do not compromise on—whether your visit is thirty
            minutes or ninety.
          </p>
          <ul className="mt-8 grid gap-5 sm:grid-cols-3">
            {pillars.map((p) => (
              <li
                key={p.title}
                className="border-ink/10 from-parchment/90 to-cream/35 flex flex-col rounded-2xl border bg-gradient-to-br p-5 shadow-[0_10px_36px_-22px_rgba(28,25,23,0.2)] sm:p-6"
              >
                <h3 className="font-display text-ink text-lg tracking-tight">
                  {p.title}
                </h3>
                <p className="text-ink/70 mt-3 text-sm leading-relaxed">
                  {p.body}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="border-copper/20 from-copper/[0.08] via-parchment to-sage/[0.06] relative mt-14 overflow-hidden rounded-[1.35rem] border bg-gradient-to-br p-6 sm:p-8"
          aria-labelledby="about-visit"
        >
          <div
            className="from-sage-deep to-sage pointer-events-none absolute top-0 bottom-0 left-0 w-1 rounded-l-[1.35rem] bg-gradient-to-b opacity-90"
            aria-hidden
          />
          <div className="relative pl-3 sm:pl-5">
            <h2
              id="about-visit"
              className="text-copper text-[0.65rem] font-bold uppercase tracking-[0.2em]"
            >
              Visit us
            </h2>
            <address className="text-ink/85 mt-3 text-sm not-italic leading-relaxed whitespace-pre-line sm:text-base">
              {formatAddressBlock()}
            </address>
            <p className="text-ink/55 mt-3 text-xs sm:text-sm">
              First floor, above Mr Crust · near Uttam Chai · easy to reach from
              GTB Nagar and Kingsway Camp.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={getGoogleMapsSearchUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="border-copper/35 from-copper/15 to-copper/8 text-copper hover:border-sage/40 hover:from-sage/15 hover:to-sage/8 hover:text-sage focus-visible:ring-sage/40 inline-flex items-center justify-center rounded-xl border bg-gradient-to-br px-5 py-3 text-xs font-bold uppercase tracking-wider transition-colors focus-visible:ring-2 focus-visible:outline-none"
              >
                Open in Maps
              </a>
              <Link
                href="/contact"
                className="border-sage/35 text-ink hover:border-copper/45 hover:bg-copper/8 focus-visible:ring-sage/40 inline-flex items-center justify-center rounded-xl border-2 border-dashed px-5 py-3 text-xs font-bold uppercase tracking-wider transition-colors focus-visible:ring-2 focus-visible:outline-none"
              >
                Contact & hours
              </Link>
            </div>
          </div>
        </section>

        <div className="from-sage-deep via-sage to-sage-deep mt-14 rounded-2xl bg-gradient-to-br p-6 text-center shadow-[0_20px_50px_-28px_rgba(44,59,50,0.45)] sm:p-8">
          <p className="font-display text-parchment text-xl tracking-tight sm:text-2xl">
            Ready to book?
          </p>
          <p className="text-parchment/85 mt-2 max-w-md mx-auto text-sm sm:text-base">
            Browse treatments, check rates, or message us with your preferred
            time—we will help you choose a session that fits.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/services"
              className="bg-parchment text-sage-deep hover:bg-cream focus-visible:ring-copper/50 inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              View services
            </Link>
            <Link
              href="/rates"
              className="bg-parchment/15 text-parchment hover:bg-parchment/25 focus-visible:ring-copper/50 inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-semibold backdrop-blur-sm transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              See rates
            </Link>
            <a
              href={sitePhoneTel}
              className="bg-parchment/15 text-parchment hover:bg-parchment/25 focus-visible:ring-copper/50 inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-semibold backdrop-blur-sm transition-colors focus-visible:ring-2 focus-visible:outline-none"
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
          </div>
        </div>
      </InnerPageLayout>
    </>
  );
}
