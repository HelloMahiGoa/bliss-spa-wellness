import Link from "next/link";
import {
  formatAddressBlock,
  getGoogleMapsSearchUrl,
  googleBusinessProfileUrl,
  googleMapsEmbedUrl,
} from "@/lib/site";

export function FindUsSection() {
  return (
    <section
      id="find-us"
      className="border-ink/8 from-parchment via-cream/45 to-cream relative overflow-hidden border-y bg-gradient-to-b py-20 md:py-28"
      aria-labelledby="find-us-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.28]"
        aria-hidden
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="bg-mist/30 pointer-events-none absolute -left-[12%] bottom-[15%] h-64 w-64 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-copper/28 to-transparent" />

      <div className="relative mx-auto grid min-w-0 max-w-6xl gap-10 px-4 sm:gap-12 sm:px-5 md:grid-cols-[minmax(0,1fr)_minmax(0,1.12fr)] md:items-stretch md:gap-14 md:px-8 lg:gap-16">
        <div className="border-copper/20 flex min-w-0 flex-col md:border-r md:pr-10">
          <p className="text-copper mb-3 text-[0.65rem] font-bold uppercase tracking-[0.28em]">
            Visit us
          </p>
          <h2
            id="find-us-heading"
            className="font-display text-ink text-3xl tracking-tight md:text-4xl lg:text-[2.65rem]"
          >
            Find us on{" "}
            <span className="from-sage via-copper to-sage-deep bg-gradient-to-r bg-clip-text italic text-transparent">
              Hudson Lane
            </span>
          </h2>
          <address className="text-ink/75 mt-8 not-italic text-sm leading-relaxed whitespace-pre-line md:text-base">
            {formatAddressBlock()}
          </address>
          <p className="text-ink/60 mt-5 text-sm leading-relaxed md:text-base">
            Landmarks: above{" "}
            <strong className="text-ink font-semibold">Mr Crust</strong>, near{" "}
            <strong className="text-ink font-semibold">Uttam Chai</strong>,
            Kingsway Camp. Convenient from{" "}
            <strong className="text-ink font-semibold">GTB Nagar</strong> metro
            and{" "}
            <strong className="text-ink font-semibold">DU North Campus</strong>.
          </p>
          <div className="mt-10 flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={googleBusinessProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="from-sage-deep via-sage to-sage-deep shadow-sage/25 hover:shadow-copper/20 focus-visible:ring-copper/45 inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-br px-6 py-3.5 text-center text-sm font-semibold text-parchment shadow-md transition-[box-shadow,transform] hover:-translate-y-0.5 hover:shadow-lg focus-visible:ring-2 focus-visible:outline-none sm:w-auto"
            >
              Google Business Profile
            </a>
            <a
              href={getGoogleMapsSearchUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="border-sage/35 text-ink hover:border-copper/45 hover:bg-copper/8 focus-visible:ring-sage/40 inline-flex w-full items-center justify-center rounded-2xl border-2 bg-parchment/40 px-6 py-3.5 text-center text-sm font-semibold backdrop-blur-sm transition-colors focus-visible:ring-2 focus-visible:outline-none sm:w-auto"
            >
              Directions in Maps
            </a>
            <Link
              href="/contact"
              className="text-sage hover:text-copper focus-visible:ring-sage/40 inline-flex w-full items-center justify-center px-4 py-3.5 text-center text-sm font-semibold underline-offset-4 transition-colors hover:underline focus-visible:rounded-lg focus-visible:ring-2 focus-visible:outline-none sm:w-auto"
            >
              Contact page
            </Link>
          </div>
        </div>

        <div className="hero-frame-shimmer min-h-[240px] min-w-0 rounded-[1.75rem] p-[2px] shadow-[0_24px_55px_-28px_rgba(28,25,23,0.4)] sm:min-h-[280px] md:min-h-[380px]">
          <div className="border-ink/8 relative h-full min-h-[236px] min-w-0 overflow-hidden rounded-[1.65rem] border bg-parchment/50 sm:min-h-[276px] md:min-h-[376px]">
            <iframe
              title="Map: Blissful Spa & Wellness, GTB Nagar, New Delhi"
              src={googleMapsEmbedUrl}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
