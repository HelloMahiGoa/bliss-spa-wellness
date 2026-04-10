import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Service } from "@/data/services";
import { services } from "@/data/services";
import { getServiceImageAlt, getServiceImageSrc } from "@/lib/service-images";
import { siteUrl } from "@/lib/site";

type Variant = "home" | "servicesPage";

type ServicesShowcaseProps = {
  variant: Variant;
  /** Intro block above rows (e.g. section title on home) */
  header?: ReactNode;
};

function buildItemListJsonLd(list: Service[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Massage & spa services — Blissful Spa & Wellness, GTB Nagar",
    description:
      "Therapeutic and relaxation massage, steam, jacuzzi, and couple treatments in New Delhi.",
    numberOfItems: list.length,
    itemListElement: list.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      url: `${siteUrl}/services/${s.slug}`,
    })),
  };
}

export function ServicesShowcase({ variant, header }: ServicesShowcaseProps) {
  const HeadingTag = variant === "home" ? "h3" : "h2";

  return (
    <section
      id={variant === "home" ? "rituals" : "services-list"}
      className="border-ink/8 from-parchment via-cream/35 to-parchment relative overflow-x-clip border-b bg-gradient-to-b py-16 sm:py-20 md:py-28"
      aria-labelledby={variant === "home" ? "rituals-heading" : undefined}
      aria-label={
        variant === "servicesPage"
          ? "Massage and spa treatments at Blissful Spa, GTB Nagar"
          : undefined
      }
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildItemListJsonLd(services)),
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.45'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="bg-mist/20 pointer-events-none absolute -left-[15%] top-[8%] h-80 w-80 rounded-full blur-3xl" />
      <div className="bg-copper/10 pointer-events-none absolute -right-[18%] bottom-[20%] h-72 w-72 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-copper/25 to-transparent" />

      <div className="relative mx-auto min-w-0 max-w-6xl px-4 sm:px-5 md:px-8">
        {header ?? null}

        <div
          className={`flex flex-col gap-20 md:gap-[5.5rem] lg:gap-28 ${header ? "mt-14 md:mt-16" : "mt-0"}`}
        >
          {services.map((service, index) => {
            const imageOnRight = index % 2 === 1;
            const src = getServiceImageSrc(service.slug);
            const alt = getServiceImageAlt(service.title);
            const step = String(index + 1).padStart(2, "0");

            return (
              <article
                key={service.slug}
                id={`service-${service.slug}`}
                className="scroll-mt-28"
                itemScope
                itemType="https://schema.org/Service"
              >
                <meta itemProp="name" content={service.title} />
                <meta itemProp="description" content={service.shortDescription} />
                <meta
                  itemProp="url"
                  content={`${siteUrl}/services/${service.slug}`}
                />

                <div className="grid min-w-0 items-center gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-14 lg:gap-16">
                  <div
                    className={`min-w-0 ${imageOnRight ? "md:order-2" : "md:order-1"}`}
                  >
                    <div className="relative min-w-0 overflow-x-clip">
                      <span
                        className="font-display text-ink/[0.07] pointer-events-none absolute -left-1 top-2 z-0 hidden select-none text-[clamp(4rem,12vw,7rem)] leading-none md:block"
                        aria-hidden
                      >
                        {step}
                      </span>
                      <div className="hero-frame-shimmer relative z-10 rounded-[1.85rem] p-[2px] shadow-[0_20px_50px_-24px_rgba(28,25,23,0.35)]">
                        <Link
                          href={`/services/${service.slug}`}
                          className="group border-ink/5 relative block aspect-[4/3] overflow-hidden rounded-[1.75rem] border focus-visible:ring-sage/45 focus-visible:ring-2 focus-visible:outline-none"
                          aria-label={`${service.title} — view details and pricing`}
                        >
                          <Image
                            src={src}
                            alt={alt}
                            fill
                            priority={variant === "home" && index === 0}
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                          <div className="from-ink/65 via-ink/25 absolute inset-0 bg-gradient-to-t to-transparent opacity-80 md:opacity-70" />
                          <div className="from-copper/20 absolute inset-0 bg-gradient-to-tr to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                          <span className="text-parchment font-display absolute bottom-5 left-5 max-w-[90%] text-2xl leading-tight tracking-tight drop-shadow-md md:bottom-6 md:left-6 md:text-3xl">
                            {service.title}
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`min-w-0 ${imageOnRight ? "border-copper/20 md:order-1 md:border-r md:pr-10" : "border-copper/20 md:order-2 md:border-l md:pl-10"}`}
                  >
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="text-copper text-[0.65rem] font-bold uppercase tracking-[0.22em]">
                        {service.duration}
                      </span>
                      <span
                        className="text-ink/25 hidden sm:inline"
                        aria-hidden
                      >
                        ·
                      </span>
                      <span className="text-sage text-[0.65rem] font-semibold uppercase tracking-[0.18em]">
                        GTB Nagar
                      </span>
                    </div>
                    <HeadingTag className="font-display text-ink mt-4 text-[clamp(1.65rem,3.5vw,2.75rem)] leading-[1.12] tracking-tight">
                      <Link
                        href={`/services/${service.slug}`}
                        className="hover:text-sage transition-colors"
                      >
                        {service.title}
                      </Link>
                    </HeadingTag>
                    <p className="text-ink/72 mt-5 text-base leading-relaxed md:text-lg">
                      {service.shortDescription}
                    </p>
                    {variant === "servicesPage" ? (
                      <p className="text-ink/55 mt-4 text-sm leading-relaxed md:text-base">
                        {service.metaDescription}
                      </p>
                    ) : null}
                    <div className="border-ink/10 mt-8 flex flex-wrap items-end gap-x-3 gap-y-2 border-t border-dashed border-copper/15 pt-8">
                      <span className="text-copper/80 text-[0.65rem] font-bold uppercase tracking-[0.2em]">
                        From
                      </span>
                      <span className="font-display text-sage text-3xl tabular-nums tracking-tight md:text-4xl">
                        {service.priceLabel}
                        {service.priceNote ? (
                          <span className="text-ink/45 ml-2 text-base font-sans font-normal tracking-normal">
                            ({service.priceNote})
                          </span>
                        ) : null}
                      </span>
                    </div>
                    <div className="mt-8 flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                      <Link
                        href={`/services/${service.slug}`}
                        className="from-sage-deep via-sage to-sage-deep shadow-sage/25 hover:shadow-copper/20 focus-visible:ring-copper/40 inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-br px-7 py-3.5 text-center text-sm font-semibold tracking-wide text-parchment shadow-md transition-[box-shadow,transform] hover:-translate-y-0.5 hover:shadow-lg focus-visible:ring-2 focus-visible:outline-none sm:w-auto"
                      >
                        Full details &amp; booking
                      </Link>
                      <Link
                        href="/rates"
                        className="text-sage hover:text-copper focus-visible:ring-sage/40 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-center text-sm font-semibold underline-offset-4 transition-colors hover:underline focus-visible:ring-2 focus-visible:outline-none sm:w-auto"
                      >
                        Compare on rates page
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
