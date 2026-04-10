import Link from "next/link";
import { ServicesShowcase } from "@/components/site/ServicesShowcase";

export function RitualsGrid() {
  return (
    <ServicesShowcase
      variant="home"
      header={
        <div className="flex min-w-0 flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="min-w-0 max-w-2xl">
            <p className="text-copper mb-3 text-[0.65rem] font-bold uppercase tracking-[0.28em]">
              Treatments &amp; rituals
            </p>
            <h2
              id="rituals-heading"
              className="font-display text-ink text-3xl tracking-tight md:text-4xl lg:text-[2.75rem]"
            >
              Our{" "}
              <span className="from-sage via-copper to-sage-deep bg-gradient-to-r bg-clip-text italic text-transparent">
                services
              </span>
            </h2>
            <p className="text-ink/65 mt-5 text-base leading-relaxed md:text-lg">
              Every session starts with a quick check-in: how you slept, what
              feels tight, and the pressure you prefer. Browse each treatment
              below—layout alternates so you can scan easily—or open the{" "}
              <Link
                href="/services"
                className="text-sage decoration-copper/30 font-medium underline-offset-4 transition-colors hover:text-copper hover:underline"
              >
                full services page
              </Link>{" "}
              and see{" "}
              <Link
                href="/rates"
                className="text-sage decoration-copper/30 font-medium underline-offset-4 transition-colors hover:text-copper hover:underline"
              >
                all rates
              </Link>{" "}
              in one place.
            </p>
          </div>
          <Link
            href="/services"
            className="border-sage/30 text-sage hover:border-copper/40 hover:bg-copper/8 focus-visible:ring-sage/40 inline-flex w-full shrink-0 items-center justify-center gap-2 self-start rounded-2xl border-2 border-dashed px-5 py-3.5 text-center text-[0.65rem] font-semibold uppercase tracking-[0.18em] transition-colors focus-visible:ring-2 focus-visible:outline-none sm:w-fit sm:px-6 sm:text-xs sm:tracking-[0.2em] lg:self-end"
          >
            View all services
            <span aria-hidden className="text-copper">
              →
            </span>
          </Link>
        </div>
      }
    />
  );
}
