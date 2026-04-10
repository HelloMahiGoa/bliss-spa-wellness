import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/data/services";
import { getServiceBySlug, services } from "@/data/services";
import { getServiceImageAlt, getServiceImageSrc } from "@/lib/service-images";
import {
  getWhatsAppHref,
  sitePhoneDisplay,
  sitePhoneTel,
} from "@/lib/site";

function getRelatedServices(service: Service): Service[] {
  if (service.relatedSlugs?.length) {
    const picked: Service[] = [];
    for (const slug of service.relatedSlugs) {
      const s = getServiceBySlug(slug);
      if (s && s.slug !== service.slug) picked.push(s);
    }
    if (picked.length > 0) return picked.slice(0, 4);
  }
  return services.filter((s) => s.slug !== service.slug).slice(0, 4);
}

export function ServicePageView({ service }: { service: Service }) {
  const imageSrc = getServiceImageSrc(service.slug);
  const imageAlt = getServiceImageAlt(service.title);
  const related = getRelatedServices(service);
  const waPrefill = `Hi, I'd like to book ${service.title} at Blissful Spa, GTB Nagar. `;
  const waHref = getWhatsAppHref(waPrefill);

  return (
    <>
      <section className="text-ink border-ink/8 from-cream/40 via-parchment to-parchment relative overflow-x-clip border-b bg-gradient-to-b">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.22]"
          aria-hidden
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="bg-mist/15 pointer-events-none absolute -right-[20%] top-0 h-72 w-72 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-copper/28 to-transparent" />

        <div className="relative mx-auto grid min-w-0 max-w-6xl gap-10 px-4 py-10 sm:gap-12 sm:px-5 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:items-start md:gap-14 md:py-14 lg:gap-16 lg:py-16">
          <div className="order-2 min-w-0 md:order-1 md:pt-2">
            <div className="hero-frame-shimmer rounded-[1.65rem] p-[2px] shadow-[0_24px_55px_-28px_rgba(28,25,23,0.38)] sm:rounded-[1.85rem]">
              <div className="border-ink/8 relative aspect-[4/3] overflow-hidden rounded-[1.58rem] border bg-parchment/40 sm:rounded-[1.75rem]">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
                <div className="from-ink/50 pointer-events-none absolute inset-0 bg-gradient-to-t to-transparent opacity-50" />
              </div>
            </div>
          </div>

          <div className="order-1 min-w-0 md:order-2">
            <nav
              className="text-ink/45 text-xs font-medium"
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
                <li>
                  <Link
                    className="hover:text-sage transition-colors"
                    href="/services"
                  >
                    Services
                  </Link>
                </li>
                <li aria-hidden className="text-copper/40">
                  /
                </li>
                <li className="text-ink/65 max-w-[min(100%,14rem)] truncate sm:max-w-none">
                  {service.title}
                </li>
              </ol>
            </nav>

            <p className="text-copper mt-6 text-[0.65rem] font-bold uppercase tracking-[0.26em]">
              Blissful Spa · GTB Nagar
            </p>
            <h1
              id="service-hero-heading"
              className="font-display mt-3 text-[clamp(1.85rem,4.5vw,3rem)] leading-[1.1] tracking-tight"
            >
              {service.title}
            </h1>

            <p className="text-ink/75 mt-5 text-base leading-relaxed sm:text-lg">
              {service.shortDescription}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="border-sage/25 bg-sage/10 text-sage rounded-xl border px-3.5 py-2 text-xs font-semibold uppercase tracking-wider">
                {service.duration}
              </span>
              <span className="border-copper/25 from-copper/10 to-cream/30 text-ink rounded-xl border bg-gradient-to-r px-3.5 py-2">
                <span className="text-copper text-[0.6rem] font-bold uppercase tracking-[0.15em]">
                  From{" "}
                </span>
                <span className="font-display text-sage text-lg font-semibold tabular-nums sm:text-xl">
                  {service.priceLabel}
                </span>
                {service.priceNote ? (
                  <span className="text-ink/45 ml-1 text-xs font-normal">
                    ({service.priceNote})
                  </span>
                ) : null}
              </span>
            </div>

            {service.highlights && service.highlights.length > 0 ? (
              <ul className="mt-6 flex flex-wrap gap-2">
                {service.highlights.map((h) => (
                  <li
                    key={h}
                    className="border-ink/10 bg-parchment/70 text-ink/80 rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur-sm"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="mt-8 flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={sitePhoneTel}
                className="from-sage-deep via-sage to-sage-deep shadow-sage/25 hover:shadow-copper/20 focus-visible:ring-copper/45 inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-br px-6 py-4 text-center text-sm font-semibold tracking-wide text-parchment shadow-md transition-[box-shadow,transform] hover:-translate-y-0.5 hover:shadow-lg focus-visible:ring-2 focus-visible:outline-none sm:flex-1 sm:px-8"
              >
                Call {sitePhoneDisplay}
              </a>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="from-[#1ebe5d] to-[#128c7e] shadow-[#128c7e]/20 hover:shadow-[#128c7e]/35 focus-visible:ring-sage/45 inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-br px-6 py-4 text-center text-sm font-semibold tracking-wide text-white shadow-md transition-[box-shadow,transform] hover:-translate-y-0.5 hover:shadow-lg focus-visible:ring-2 focus-visible:outline-none sm:flex-1 sm:px-8"
              >
                WhatsApp to book
              </a>
              <Link
                href="/rates"
                className="border-sage/35 text-ink hover:border-copper/45 hover:bg-copper/8 focus-visible:ring-sage/40 inline-flex w-full items-center justify-center rounded-2xl border-2 border-dashed bg-transparent px-6 py-4 text-center text-sm font-semibold tracking-wide transition-colors focus-visible:ring-2 focus-visible:outline-none sm:w-auto sm:px-8"
              >
                All rates
              </Link>
            </div>
          </div>
        </div>
      </section>

      <article className="text-ink relative w-full min-w-0 break-words">
        <section
          className="border-ink/6 from-mist/25 via-parchment to-cream/35 relative overflow-x-clip border-b bg-gradient-to-b"
          aria-labelledby="about-treatment"
        >
          <div className="pointer-events-none absolute inset-0 opacity-[0.35]" aria-hidden>
            <div className="bg-sage/8 absolute -left-[15%] top-0 h-96 w-96 rounded-full blur-3xl" />
            <div className="bg-copper/10 absolute -right-[10%] bottom-0 h-80 w-80 rounded-full blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-5 sm:py-16 md:py-20">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
              <div className="min-w-0 max-w-2xl">
                <p className="text-copper text-[0.65rem] font-bold uppercase tracking-[0.28em]">
                  Treatment guide
                </p>
                <h2
                  id="about-treatment"
                  className="font-display text-ink mt-3 text-[clamp(1.75rem,3.5vw,2.65rem)] leading-[1.12] tracking-tight"
                >
                  About this treatment
                </h2>
                <p className="text-ink/60 mt-4 max-w-xl text-sm leading-relaxed sm:text-base">
                  What happens in the room, how we tailor pressure, and why
                  guests around Hudson Lane and Kingsway Camp choose this
                  session—written so you know exactly what you&apos;re booking.
                </p>
              </div>
              <div className="border-copper/15 from-parchment/90 to-cream/50 text-ink/70 flex shrink-0 flex-wrap items-center gap-x-6 gap-y-2 rounded-2xl border bg-gradient-to-br px-5 py-4 text-xs font-medium sm:text-sm">
                <span className="text-copper font-bold uppercase tracking-wider">
                  On the menu
                </span>
                <span className="text-ink/35 hidden sm:inline" aria-hidden>
                  ·
                </span>
                <span>{service.duration}</span>
                <span className="text-ink/35" aria-hidden>
                  ·
                </span>
                <span className="text-sage font-display text-base font-semibold tabular-nums">
                  {service.priceLabel}
                </span>
              </div>
            </div>

            <div className="mt-12 grid min-w-0 gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-14">
              <div className="min-w-0 space-y-5 lg:col-span-5">
                <div className="border-ink/10 shadow-ink/8 from-parchment via-parchment to-cream/40 sticky top-24 rounded-[1.35rem] border bg-gradient-to-br p-6 shadow-[0_20px_50px_-32px_rgba(28,25,23,0.35)] sm:p-7">
                  <p className="text-copper text-[0.6rem] font-bold uppercase tracking-[0.22em]">
                    At a glance
                  </p>
                  <ul className="mt-5 space-y-4">
                    <li className="flex gap-3">
                      <span
                        className="bg-sage/15 text-sage mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold"
                        aria-hidden
                      >
                        1
                      </span>
                      <div>
                        <p className="text-ink text-sm font-semibold">
                          Check-in & comfort
                        </p>
                        <p className="text-ink/60 mt-1 text-xs leading-relaxed">
                          Quick chat on pressure, scent, and focus areas so the
                          session matches your mood.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span
                        className="bg-copper/12 text-copper mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold"
                        aria-hidden
                      >
                        2
                      </span>
                      <div>
                        <p className="text-ink text-sm font-semibold">
                          Full treatment
                        </p>
                        <p className="text-ink/60 mt-1 text-xs leading-relaxed">
                          {service.duration} of uninterrupted work in a private
                          room—fresh linens, warm oil, heated table.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span
                        className="bg-sage/15 text-sage mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold"
                        aria-hidden
                      >
                        3
                      </span>
                      <div>
                        <p className="text-ink text-sm font-semibold">
                          Wind-down
                        </p>
                        <p className="text-ink/60 mt-1 text-xs leading-relaxed">
                          Time to hydrate and step out unhurried—no rush at the
                          door.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="min-w-0 space-y-5 lg:col-span-7">
                {service.paragraphs.length > 0 ? (
                  <div
                    className="border-sage/20 from-parchment/95 to-cream/45 shadow-ink/6 relative rounded-[1.35rem] border bg-gradient-to-br p-6 sm:p-8 sm:pl-9 shadow-[0_18px_48px_-30px_rgba(28,25,23,0.22)]"
                    data-seo="treatment-lead"
                  >
                    <div
                      className="from-sage-deep to-sage absolute left-0 top-6 bottom-6 w-1 rounded-full bg-gradient-to-b sm:top-8 sm:bottom-8"
                      aria-hidden
                    />
                    <p className="text-ink/90 text-[1.05rem] font-medium leading-[1.75] sm:text-lg sm:leading-[1.8]">
                      {service.paragraphs[0]}
                    </p>
                  </div>
                ) : null}
                {service.paragraphs.slice(1).map((p, i) => {
                  const n = i + 2;
                  const isAlt = i % 2 === 1;
                  return (
                    <div
                      key={i}
                      className={`border-ink/10 relative rounded-2xl border p-5 sm:p-6 ${
                        isAlt
                          ? "bg-parchment/80"
                          : "from-cream/40 to-parchment/60 bg-gradient-to-br"
                      }`}
                    >
                      <span
                        className="text-copper/35 font-display absolute right-4 top-4 text-3xl font-semibold tabular-nums sm:right-5 sm:top-5 sm:text-4xl"
                        aria-hidden
                      >
                        {String(n).padStart(2, "0")}
                      </span>
                      <p className="text-ink/75 pr-10 text-[0.95rem] leading-[1.75] sm:text-base sm:leading-[1.8]">
                        {p}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <aside
              className="border-copper/25 from-copper/[0.1] via-parchment to-sage/[0.07] relative mt-10 overflow-hidden rounded-[1.35rem] border bg-gradient-to-br p-5 shadow-[0_16px_44px_-28px_rgba(120,53,15,0.32)] sm:p-6 lg:mt-12"
              aria-labelledby="steam-addon-heading"
            >
              <div
                className="from-sage-deep to-sage pointer-events-none absolute left-0 top-0 bottom-0 w-1 rounded-l-[1.35rem] bg-gradient-to-b opacity-90"
                aria-hidden
              />
              <div className="relative flex min-w-0 flex-col gap-5 pl-3 sm:pl-4 md:flex-row md:items-center md:justify-between md:gap-8 md:pl-5">
                <div className="min-w-0 flex-1">
                  <p
                    id="steam-addon-heading"
                    className="text-copper text-[0.6rem] font-bold uppercase tracking-[0.2em]"
                  >
                    Pair it with warmth
                  </p>
                  <p className="text-ink/80 mt-2 text-sm leading-relaxed sm:text-base">
                    Want to feel lighter after your massage? Our{" "}
                    <Link
                      href="/services/massage-with-steam-shower"
                      className="text-sage decoration-copper/35 font-semibold underline-offset-[3px] transition-colors hover:text-copper hover:underline"
                    >
                      massage with steam shower
                    </Link>{" "}
                    adds a private steam session—especially nice after travel or
                    long Delhi commutes.
                  </p>
                </div>
                <Link
                  href="/services/massage-with-steam-shower"
                  className="border-copper/35 from-copper/15 to-copper/8 text-copper hover:border-sage/40 hover:from-sage/15 hover:to-sage/8 hover:text-sage focus-visible:ring-sage/40 inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-xl border bg-gradient-to-br px-5 py-3 text-xs font-bold uppercase tracking-wider transition-colors focus-visible:ring-2 focus-visible:outline-none md:self-center"
                >
                  View steam package
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </aside>
          </div>
        </section>

        <div className="mx-auto w-full min-w-0 max-w-3xl px-4 py-12 sm:px-5 md:px-8 md:py-16">
        {service.benefits && service.benefits.length > 0 ? (
          <div className="border-sage/25 from-sage/10 to-copper/8 rounded-2xl border bg-gradient-to-br p-6 shadow-[0_12px_40px_-24px_rgba(28,25,23,0.12)] md:p-8">
            <h2 className="text-copper text-[0.65rem] font-bold uppercase tracking-[0.22em]">
              You may love this if…
            </h2>
            <ul className="text-ink/75 mt-5 list-inside list-disc space-y-3 text-sm leading-relaxed marker:text-copper md:text-base">
              {service.benefits.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ) : null}

        {service.faqs && service.faqs.length > 0 ? (
          <section className="mt-14" aria-labelledby={`faq-${service.slug}`}>
            <h2
              id={`faq-${service.slug}`}
              className="font-display text-ink text-2xl tracking-tight md:text-3xl"
            >
              Questions guests ask
            </h2>
            <p className="text-ink/60 mt-3 text-sm md:text-base">
              Straight answers before you book—call or WhatsApp if yours
              isn&apos;t listed.
            </p>
            <div className="mt-8 space-y-3">
              {service.faqs.map((f) => (
                <details
                  key={f.question}
                  className="border-ink/10 from-parchment/90 to-cream/30 group w-full min-w-0 rounded-2xl border bg-gradient-to-br shadow-[0_6px_28px_-18px_rgba(28,25,23,0.18)] open:border-copper/20"
                >
                  <summary className="text-ink hover:text-sage focus-visible:ring-sage/40 cursor-pointer list-none rounded-2xl px-4 py-4 pr-3 text-[0.95rem] font-semibold leading-snug transition-colors focus-visible:ring-2 focus-visible:outline-none sm:px-5 sm:text-base [&::-webkit-details-marker]:hidden">
                    <span className="flex min-w-0 items-start justify-between gap-3">
                      <span className="min-w-0 flex-1 break-words">
                        {f.question}
                      </span>
                      <span
                        className="border-copper/30 bg-copper/10 text-copper flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border text-lg font-light leading-none transition-transform duration-200 group-open:rotate-45 sm:h-9 sm:w-9"
                        aria-hidden
                      >
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="text-ink/70 border-ink/8 border-t border-dashed px-4 pb-4 pt-3 text-sm leading-relaxed break-words sm:px-5 sm:pb-5 sm:pt-4 md:text-base">
                    {f.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        ) : null}

        <div className="from-sage-deep via-sage to-sage-deep mt-14 rounded-2xl bg-gradient-to-br p-6 text-center shadow-[0_20px_50px_-28px_rgba(44,59,50,0.45)] md:p-8">
          <p className="font-display text-parchment text-xl tracking-tight md:text-2xl">
            Ready to unwind?
          </p>
          <p className="text-parchment/80 mt-2 text-sm md:text-base">
            Same-day slots sometimes open—message us with your preferred time.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
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
              className="bg-parchment text-sage-deep hover:bg-cream focus-visible:ring-copper/50 inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              WhatsApp Blissful
            </a>
          </div>
        </div>

        {related.length > 0 ? (
          <section
            className="border-copper/15 mt-16 border-t border-dashed pt-12"
            aria-labelledby={`related-${service.slug}`}
          >
            <h2
              id={`related-${service.slug}`}
              className="font-display text-ink text-2xl tracking-tight md:text-3xl"
            >
              You may also like
            </h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {related.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="border-ink/10 from-parchment/90 to-cream/40 hover:border-copper/25 group flex h-full flex-col rounded-2xl border bg-gradient-to-br p-5 transition-[border-color,box-shadow] hover:shadow-md"
                  >
                    <span className="font-display text-ink group-hover:text-sage text-lg tracking-tight transition-colors">
                      {s.title}
                    </span>
                    <span className="text-ink/55 mt-1 text-xs">
                      {s.duration}
                    </span>
                    <span className="text-copper font-display mt-3 text-base font-semibold tabular-nums">
                      {s.priceLabel}
                    </span>
                    <span className="text-sage mt-3 text-xs font-semibold group-hover:underline">
                      View details →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-ink/50 mt-8 text-center text-sm">
              <Link
                href="/services"
                className="text-sage font-semibold underline-offset-4 hover:underline"
              >
                Browse the full services menu
              </Link>
            </p>
          </section>
        ) : null}
        </div>
      </article>
    </>
  );
}
