import { guestReviews } from "@/data/guest-reviews";
import { googleBusinessProfileUrl } from "@/lib/site";
import { StarRating } from "@/components/site/StarRating";

export function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="border-ink/8 from-cream/50 via-parchment to-parchment relative overflow-hidden border-b bg-gradient-to-b py-20 md:py-28"
      aria-labelledby="reviews-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.32]"
        aria-hidden
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.45'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="bg-copper/10 pointer-events-none absolute -right-[15%] top-1/4 h-72 w-72 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-copper/28 to-transparent" />

      <div className="relative mx-auto min-w-0 max-w-6xl px-4 sm:px-5 md:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-2xl">
            <p className="text-copper mb-3 text-[0.65rem] font-bold uppercase tracking-[0.28em]">
              Social proof
            </p>
            <h2
              id="reviews-heading"
              className="font-display text-ink text-3xl tracking-tight md:text-4xl lg:text-[2.75rem]"
            >
              What{" "}
              <span className="from-sage via-copper to-sage-deep bg-gradient-to-r bg-clip-text italic text-transparent">
                guests say
              </span>
            </h2>
            <p className="text-ink/65 mt-5 text-base leading-relaxed md:text-lg">
              Recent notes from visitors to our GTB Nagar studio. Read the full
              thread and add your rating on{" "}
              <a
                href={googleBusinessProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sage decoration-copper/30 font-semibold underline-offset-4 transition-colors hover:text-copper hover:underline"
              >
                Google
              </a>
              .
            </p>
          </div>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {guestReviews.map((r, i) => (
            <li key={`${r.author}-${i}`}>
              <div className="border-ink/10 from-parchment/95 to-cream/40 flex h-full flex-col rounded-2xl border bg-gradient-to-br p-6 shadow-[0_14px_40px_-28px_rgba(28,25,23,0.35)] backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_20px_48px_-24px_rgba(28,25,23,0.2)] md:p-7">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-ink font-semibold">{r.author}</span>
                  <StarRating value={r.rating} />
                </div>
                {r.relativeTime ? (
                  <p className="text-ink/40 mt-1 text-xs font-medium uppercase tracking-wider">
                    {r.relativeTime}
                  </p>
                ) : null}
                <p className="text-ink/70 mt-5 flex-1 border-t border-dashed border-copper/15 pt-5 text-sm leading-relaxed break-words">
                  <span className="text-copper/80 font-display text-lg leading-none">
                    &ldquo;
                  </span>
                  {r.text}
                  <span className="text-copper/80 font-display text-lg leading-none">
                    &rdquo;
                  </span>
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <a
            href={googleBusinessProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="from-sage-deep via-sage to-sage-deep shadow-sage/25 hover:shadow-copper/20 focus-visible:ring-copper/45 inline-flex w-full max-w-sm items-center justify-center rounded-2xl bg-gradient-to-br px-6 py-4 text-center text-sm font-semibold tracking-wide text-parchment shadow-md transition-[box-shadow,transform] hover:-translate-y-0.5 hover:shadow-lg focus-visible:ring-2 focus-visible:outline-none sm:w-auto sm:max-w-none sm:px-8"
          >
            Read all reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
