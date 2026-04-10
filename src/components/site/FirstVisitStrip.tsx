const flowSteps = [
  {
    title: "Arrive 10 minutes early",
    body: "Settle in, use the restroom, and sip water so your session starts unhurried.",
  },
  {
    title: "Share health notes",
    body: "Allergies, pregnancy, injuries, or heat sensitivity help us adapt oils, pressure, and steam safely.",
  },
  {
    title: "Pricing upfront",
    body: "Duration and INR totals are confirmed before we begin—no surprises at checkout.",
  },
] as const;

const localsReasons = [
  {
    title: "North Delhi pace, spa stillness",
    body: "We are steps from Hudson Lane’s cafes and campus energy—but inside, the tempo slows. Sound-soft rooms and unhurried hands help you actually exhale.",
  },
  {
    title: "Therapists who adjust in real time",
    body: "Pressure, stretch, and scent are never one-size-fits-all. Speak up once; we recalibrate for the rest of the session so you stay comfortable.",
  },
  {
    title: "Steam, soak, and massage together",
    body: "Choose massage only, steam only, or pair hydrotherapy with bodywork. Popular for weekends, date nights, and post-travel recovery.",
  },
] as const;

export function FirstVisitStrip() {
  return (
    <section
      id="first-visit"
      className="border-ink/8 from-parchment via-cream/40 to-parchment relative overflow-hidden border-b bg-gradient-to-b py-16 md:py-24"
      aria-labelledby="first-visit-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        aria-hidden
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-copper/30 to-transparent" />
      <div className="bg-mist/25 pointer-events-none absolute -right-[20%] top-1/4 h-72 w-72 rounded-full blur-3xl" />
      <div className="bg-copper/12 pointer-events-none absolute -left-[15%] bottom-1/4 h-64 w-64 rounded-full blur-3xl" />

      <div className="relative mx-auto min-w-0 max-w-6xl px-4 sm:px-5 md:px-8">
        {/* —— First visit flow —— */}
        <div className="text-center md:text-left">
          <p className="text-copper mb-3 text-[0.65rem] font-bold uppercase tracking-[0.28em]">
            Your first time
          </p>
          <h2
            id="first-visit-heading"
            className="font-display text-ink text-3xl tracking-tight md:text-4xl"
          >
            First visit? Here&apos;s the flow
          </h2>
          <p className="text-ink/60 mx-auto mt-4 max-w-2xl text-base leading-relaxed md:mx-0">
            Three simple beats from the door to the table—so you know exactly
            what to expect.
          </p>
        </div>

        <ol className="mt-12 grid gap-8 md:mt-14 md:grid-cols-3 md:gap-6">
          {flowSteps.map((item, i) => (
            <li key={item.title}>
              <div className="border-ink/10 from-parchment/95 to-cream/50 group relative flex h-full flex-col rounded-2xl border bg-gradient-to-br p-6 text-center shadow-[0_12px_40px_-24px_rgba(28,25,23,0.25)] backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_20px_48px_-20px_rgba(28,25,23,0.2)] md:p-7 md:text-left">
                <span
                  className="from-sage to-sage-deep text-parchment ring-copper/25 mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br text-sm font-bold tabular-nums shadow-md ring-1 ring-inset md:mx-0"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-ink font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="text-ink/65 mt-3 text-sm leading-relaxed">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {/* —— Why locals return —— */}
        <div
          id="experience"
          className="border-ink/10 bg-sage-deep text-parchment ring-copper/20 relative mt-16 overflow-x-clip overflow-y-visible rounded-[1.5rem] border px-5 py-8 shadow-[0_28px_60px_-28px_rgba(28,25,23,0.45)] ring-1 sm:rounded-[2rem] sm:px-8 md:mt-20 md:p-10 lg:p-12"
          aria-labelledby="locals-heading"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            aria-hidden
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="from-copper/25 pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br to-transparent blur-3xl" />
          <div className="from-sage pointer-events-none absolute -bottom-12 -left-8 h-40 w-40 rounded-full bg-gradient-to-tr to-transparent opacity-60 blur-2xl" />

          <div className="relative">
            <p className="text-copper/90 mb-3 text-[0.65rem] font-bold uppercase tracking-[0.28em]">
              The Blissful difference
            </p>
            <h2
              id="locals-heading"
              className="font-display max-w-2xl text-3xl tracking-tight md:text-4xl"
            >
              Why locals return to Blissful
            </h2>
            <p className="text-parchment/75 mt-4 max-w-2xl text-base leading-relaxed">
              A calm studio on the first floor above Mr Crust—easy to find near
              Uttam Chai in Kingsway Camp, GTB Nagar.
            </p>

            <ol className="mt-12 grid gap-8 md:grid-cols-3 md:gap-8">
              {localsReasons.map((item, i) => (
                <li
                  key={item.title}
                  className="border-parchment/15 relative border-t pt-8 md:border-t-0 md:border-l md:pt-0 md:pl-8 md:first:border-l-0 md:first:pl-0"
                >
                  <span
                    className="text-copper font-display mb-3 block text-3xl tabular-nums md:text-4xl"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-parchment/70 mt-3 text-sm leading-relaxed">
                    {item.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
