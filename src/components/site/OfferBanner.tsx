import Link from "next/link";

export function OfferBanner() {
  return (
    <div className="border-ink/8 from-sage/15 via-cream/50 to-copper/12 relative overflow-hidden border-b bg-gradient-to-r">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_120%_at_20%_50%,rgba(176,125,76,0.12),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-copper/35 to-transparent" />
      <div className="relative mx-auto flex min-w-0 max-w-6xl flex-col items-center justify-center gap-3 px-4 py-3.5 text-center sm:flex-row sm:gap-5 sm:px-5 sm:text-left md:px-8">
        <span className="bg-sage/20 text-sage border-sage/25 shrink-0 rounded-full border px-3 py-1 text-[0.6rem] font-bold uppercase tracking-[0.2em]">
          Weekday
        </span>
        <p className="text-ink/80 text-xs font-medium sm:flex-1 sm:text-sm">
          Ask about{" "}
          <span className="text-sage font-semibold">steam add-ons</span> when
          you book massage <span className="text-ink/50">Mon–Thu.</span>
        </p>
        <Link
          href="/services/massage-with-steam-shower"
          className="from-sage/20 to-copper/15 text-sage hover:border-copper/35 focus-visible:ring-sage/40 shrink-0 rounded-xl border border-copper/20 bg-gradient-to-r px-4 py-2 text-xs font-semibold tracking-wide transition-colors hover:text-ink focus-visible:ring-2 focus-visible:outline-none sm:text-sm"
        >
          View steam combo →
        </Link>
      </div>
    </div>
  );
}
