import Link from "next/link";
import { getWhatsAppHref, sitePhoneTel } from "@/lib/site";

const whatsappPrefill =
  "Hi Blissful Spa, I'd like to book a massage at GTB Nagar. ";

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function WhatsAppMini({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function SparkIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M12 1.5l2.4 6.1 6.6.9-4.8 4.7 1.1 6.5L12 16.9 6.7 19.7l1.1-6.5-4.8-4.7 6.6-.9L12 1.5z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section
      className="from-cream/80 via-parchment to-parchment text-ink relative isolate min-h-[min(92vh,52rem)] overflow-hidden bg-gradient-to-b"
      aria-labelledby="hero-heading"
    >
      {/* Atmospheric layers */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="hero-blob bg-mist/45 absolute -left-[20%] top-[-15%] h-[min(85vw,28rem)] w-[min(95vw,32rem)] rounded-[50%] blur-[80px]" />
        <div className="hero-blob-delayed bg-copper/25 absolute -right-[25%] top-[10%] h-[min(80vw,26rem)] w-[min(90vw,30rem)] rounded-[48%] blur-[72px]" />
        <div className="hero-blob-slow bg-sage/20 absolute bottom-[-20%] left-[15%] h-[min(100vw,36rem)] w-[min(110vw,40rem)] rounded-[55%] blur-[90px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_50%_at_50%_-10%,rgba(176,125,76,0.12),transparent_55%)]" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Top copper arc */}
      <svg
        className="text-copper/30 pointer-events-none absolute left-1/2 top-0 h-24 w-[min(100%,56rem)] -translate-x-1/2"
        viewBox="0 0 900 80"
        fill="none"
        aria-hidden
      >
        <path
          d="M0 78c200-52 500-52 900 0"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          opacity={0.6}
        />
      </svg>

      <div className="relative z-10 mx-auto grid w-full min-w-0 max-w-6xl gap-12 px-4 pb-16 pt-12 sm:gap-14 sm:px-5 sm:pb-20 sm:pt-14 md:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] md:items-center md:gap-12 md:px-8 md:pb-28 md:pt-20 lg:gap-16 lg:pb-32 lg:pt-24">
        {/* Copy column */}
        <div className="relative min-w-0">
          <div
            className="via-copper to-copper/80 hero-accent-line bg-gradient-to-b from-sage absolute -left-1 top-1 hidden h-28 w-1 rounded-full md:block"
            aria-hidden
          />
          <div className="border-sage/20 from-parchment/90 to-cream/50 text-sage mb-8 inline-flex max-w-full flex-wrap items-center gap-2.5 rounded-2xl border bg-gradient-to-r px-3 py-2.5 shadow-sm backdrop-blur-sm sm:rounded-full sm:px-4">
            <span className="bg-sage/15 text-sage flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
              <SparkIcon className="h-4 w-4" />
            </span>
            <span className="min-w-0 text-left text-[0.6rem] font-semibold uppercase leading-snug tracking-[0.14em] sm:text-xs sm:tracking-[0.2em] md:tracking-[0.22em]">
              GTB Nagar · Hudson Lane · Kingsway Camp
            </span>
          </div>

          <h1
            id="hero-heading"
            className="font-display text-ink leading-[1.02] tracking-tight"
          >
            <span className="block text-[clamp(2.25rem,5.5vw,3.75rem)]">
              Calm in the heart
            </span>
            <span className="mt-2 block text-[clamp(2.25rem,5.5vw,3.85rem)]">
              <span className="from-sage via-copper to-sage-deep bg-gradient-to-r bg-clip-text italic text-transparent">
                of North Delhi.
              </span>
            </span>
          </h1>

          <p className="text-ink/72 mt-8 max-w-xl text-lg leading-[1.65] md:text-xl">
            Relaxation and therapeutic massage, steam, jacuzzi add-ons, and
            couple suites—on the first floor above Mr Crust, a short walk from
            the buzz of DU North Campus.
          </p>

          <div
            id="book"
            className="mt-10 flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <a
              href={sitePhoneTel}
              className="from-sage-deep via-sage to-sage-deep shadow-sage/30 hover:shadow-copper/25 focus-visible:ring-copper/50 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-br px-8 py-4 text-center text-sm font-semibold tracking-wide text-parchment shadow-lg transition-[box-shadow,transform] hover:-translate-y-0.5 hover:shadow-xl focus-visible:ring-2 focus-visible:outline-none sm:w-auto"
            >
              <PhoneIcon className="h-4 w-4 opacity-90" />
              Call to book
            </a>
            <a
              href={getWhatsAppHref(whatsappPrefill)}
              target="_blank"
              rel="noopener noreferrer"
              className="from-[#1ebe5d] to-[#128c7e] shadow-[#128c7e]/20 hover:shadow-[#128c7e]/35 focus-visible:ring-sage/45 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-br px-8 py-4 text-center text-sm font-semibold tracking-wide text-white shadow-md transition-[box-shadow,transform] hover:-translate-y-0.5 hover:shadow-lg focus-visible:ring-2 focus-visible:outline-none sm:w-auto"
            >
              <WhatsAppMini className="h-4 w-4 shrink-0" />
              WhatsApp
            </a>
            <Link
              href="/services"
              className="border-sage/35 text-ink hover:border-copper/50 hover:bg-copper/8 focus-visible:ring-sage/40 inline-flex w-full items-center justify-center rounded-2xl border-2 border-dashed bg-transparent px-8 py-4 text-center text-sm font-semibold tracking-wide transition-colors focus-visible:ring-2 focus-visible:outline-none sm:w-auto"
            >
              Browse services
            </Link>
          </div>

          <nav
            className="text-ink/45 mt-8 flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-semibold uppercase tracking-widest"
            aria-label="Quick links"
          >
            <Link
              href="/#reviews"
              className="hover:text-sage focus-visible:ring-sage/40 rounded-md px-1 transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              Reviews
            </Link>
            <span aria-hidden className="text-copper/45 select-none">
              ✦
            </span>
            <Link
              href="/#faq"
              className="hover:text-sage focus-visible:ring-sage/40 rounded-md px-1 transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              FAQ
            </Link>
            <span aria-hidden className="text-copper/45 select-none">
              ✦
            </span>
            <Link
              href="/#find-us"
              className="hover:text-sage focus-visible:ring-sage/40 rounded-md px-1 transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              Map
            </Link>
          </nav>
        </div>

        {/* Feature frame column */}
        <div className="relative min-w-0 md:pl-2">
          <div
            className="border-copper/20 text-sage/15 pointer-events-none absolute -right-4 top-1/2 hidden w-40 -translate-y-1/2 md:block lg:-right-8 lg:w-48"
            aria-hidden
          >
            <svg viewBox="0 0 120 200" fill="none" className="w-full">
              <path
                d="M60 8c-28 40-48 88-48 132 0 28 12 52 48 52s48-24 48-52c0-44-20-92-48-132z"
                stroke="currentColor"
                strokeWidth="0.75"
                opacity={0.5}
              />
              <path
                d="M60 28c-20 32-34 70-34 104 0 22 10 40 34 40s34-18 34-40c0-34-14-72-34-104z"
                stroke="currentColor"
                strokeWidth="0.5"
                opacity={0.35}
              />
            </svg>
          </div>

          <div className="relative mx-auto w-full max-w-md md:max-w-none">
            <div className="hero-frame-shimmer rounded-[2.35rem] p-[2px] shadow-[0_24px_60px_-20px_rgba(28,25,23,0.35)]">
              <div className="from-parchment/98 via-cream/40 to-parchment/95 border-ink/8 relative overflow-hidden rounded-[2.28rem] border bg-gradient-to-br shadow-inner backdrop-blur-md">
                <div className="from-copper/15 pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br to-transparent blur-3xl" />
                <div className="from-sage/20 pointer-events-none absolute -bottom-16 -left-12 h-48 w-48 rounded-full bg-gradient-to-tr to-transparent blur-2xl" />

                <div className="relative p-8 md:p-10">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="bg-copper/15 text-copper border-copper/25 rounded-full border px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.2em]">
                      This week
                    </span>
                    <span className="text-ink/35 text-xs font-medium">
                      Above Mr Crust · 1st floor
                    </span>
                  </div>
                  <p className="font-display text-ink mt-5 text-2xl leading-tight md:text-[1.85rem]">
                    Steam &amp; massage combo
                  </p>
                  <p className="text-ink/65 mt-4 text-sm leading-relaxed md:text-base">
                    Full-body massage followed by a private steam session—ideal
                    after metro commutes, long study days, or when you want that
                    fully-melted feeling before heading home.
                  </p>
                  <ul className="text-ink/60 mt-8 space-y-3 border-t border-ink/10 pt-8 text-sm">
                    <li className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                      <span className="min-w-0 font-medium text-ink/80">
                        Relaxation / Swedish
                      </span>
                      <span className="text-copper font-display shrink-0 text-base tabular-nums">
                        From ₹2,199
                      </span>
                    </li>
                    <li className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                      <span className="min-w-0 font-medium text-ink/80">
                        Massage + steam
                      </span>
                      <span className="text-copper font-display shrink-0 text-base tabular-nums">
                        ₹3,199
                      </span>
                    </li>
                    <li className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                      <span className="min-w-0 font-medium text-ink/80">
                        Couple massage
                      </span>
                      <span className="text-copper font-display shrink-0 text-base tabular-nums">
                        ₹4,599
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className="border-copper/25 from-parchment/95 to-cream/70 text-ink absolute -right-3 top-6 z-10 hidden items-center gap-3 rounded-full border bg-gradient-to-r py-2.5 pl-3 pr-5 shadow-[0_8px_30px_-12px_rgba(28,25,23,0.25)] backdrop-blur-sm md:flex lg:-right-5"
              aria-hidden
            >
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400/60 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-emerald-500/35" />
              </span>
              <div className="min-w-0 text-left leading-tight">
                <p className="font-display text-sage text-lg tracking-tight">
                  Open
                </p>
                <p className="text-copper text-[0.65rem] font-bold uppercase tracking-[0.18em]">
                  7 days
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave into next section */}
      <div
        className="from-parchment via-parchment/80 pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t to-transparent"
        aria-hidden
      />
      <svg
        className="text-parchment pointer-events-none absolute -bottom-px left-0 block h-auto max-w-full w-full"
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M0 48V20c180-16 360-16 540-6s360 26 540 26 360-10 360-10v18H0z"
          opacity={0.98}
        />
      </svg>
    </section>
  );
}
