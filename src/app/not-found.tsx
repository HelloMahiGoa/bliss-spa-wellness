import Link from "next/link";

export default function NotFound() {
  return (
    <div className="from-cream/50 via-parchment to-parchment text-ink relative flex min-h-[55vh] flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(176,125,76,0.12),transparent_65%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-copper/35 to-transparent" />
      <div className="relative">
        <p className="text-copper text-[0.65rem] font-bold uppercase tracking-[0.35em]">
          404
        </p>
        <h1 className="font-display mt-4 text-3xl tracking-tight md:text-4xl">
          This page drifted away
        </h1>
        <p className="text-ink/65 mx-auto mt-5 max-w-md text-sm leading-relaxed md:text-base">
          The path you followed is not here. Return to Blissful and we will
          guide you back to calm.
        </p>
        <Link
          href="/"
          className="from-sage-deep via-sage to-sage-deep shadow-sage/25 hover:shadow-copper/20 focus-visible:ring-copper/45 mt-10 inline-flex items-center justify-center rounded-2xl bg-gradient-to-br px-8 py-4 text-sm font-semibold tracking-wide text-parchment shadow-md transition-[box-shadow,transform] hover:-translate-y-0.5 hover:shadow-lg focus-visible:ring-2 focus-visible:outline-none"
        >
          Back home
        </Link>
      </div>
    </div>
  );
}
