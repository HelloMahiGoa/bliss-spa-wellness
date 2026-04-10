import { faqs } from "@/data/faqs";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

export function FaqSection() {
  return (
    <section
      id="faq"
      className="border-ink/8 from-parchment via-parchment to-cream/40 relative overflow-hidden border-b bg-gradient-to-b py-20 md:py-28"
      aria-labelledby="faq-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.3]"
        aria-hidden
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.42'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="bg-sage/10 pointer-events-none absolute -right-[18%] top-[20%] h-80 w-80 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-copper/28 to-transparent" />

      <div className="relative mx-auto min-w-0 max-w-6xl px-4 sm:px-5 md:px-8">
        <p className="text-copper mb-3 text-[0.65rem] font-bold uppercase tracking-[0.28em]">
          Before you book
        </p>
        <h2
          id="faq-heading"
          className="font-display text-ink max-w-3xl text-3xl tracking-tight md:text-4xl lg:text-[2.75rem]"
        >
          Frequently asked{" "}
          <span className="from-sage via-copper to-sage-deep bg-gradient-to-r bg-clip-text italic text-transparent">
            questions
          </span>
        </h2>
        <p className="text-ink/65 mt-5 max-w-2xl text-base leading-relaxed md:text-lg">
          Booking, location, payments, and what to expect before your first
          visit to our GTB Nagar studio.
        </p>

        <div className="mt-14 max-w-3xl min-w-0 space-y-4">
          {faqs.map((f) => (
            <details
              key={f.question}
              className="border-ink/10 from-parchment/90 to-cream/30 group w-full min-w-0 rounded-2xl border bg-gradient-to-br shadow-[0_8px_32px_-24px_rgba(28,25,23,0.2)] open:border-copper/25 open:shadow-[0_12px_40px_-20px_rgba(28,25,23,0.18)]"
            >
              <summary className="text-ink hover:text-sage focus-visible:ring-sage/40 cursor-pointer list-none rounded-2xl px-4 py-4 pr-3 text-[0.95rem] font-semibold leading-snug transition-colors focus-visible:ring-2 focus-visible:outline-none sm:px-5 sm:py-5 sm:pr-4 sm:text-base [&::-webkit-details-marker]:hidden">
                <span className="flex min-w-0 items-start justify-between gap-3 sm:gap-4">
                  <span className="min-w-0 flex-1 break-words pt-0.5">
                    {f.question}
                  </span>
                  <span
                    className="border-copper/30 bg-copper/10 text-copper flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border text-xl font-light leading-none transition-transform duration-200 group-open:rotate-45"
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
      </div>
    </section>
  );
}
