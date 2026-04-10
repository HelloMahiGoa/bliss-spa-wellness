import Link from "next/link";
import {
  getWhatsAppHref,
  sitePhoneDisplay,
  sitePhoneTel,
} from "@/lib/site";

const linkClass =
  "text-sage decoration-copper/25 font-semibold underline-offset-4 transition-colors hover:text-copper hover:underline";

export function SeoContent() {
  return (
    <section
      id="wellness"
      className="border-ink/8 from-cream/55 via-parchment to-parchment relative overflow-hidden border-b bg-gradient-to-b py-20 md:py-28"
      aria-labelledby="wellness-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.28]"
        aria-hidden
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="bg-copper/8 pointer-events-none absolute -left-[10%] top-1/3 h-56 w-56 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-copper/28 to-transparent" />

      <div className="relative mx-auto min-w-0 max-w-6xl px-4 sm:px-5 md:px-8">
        <article className="max-w-3xl break-words">
          <p className="text-copper mb-3 text-[0.65rem] font-bold uppercase tracking-[0.28em]">
            Local SEO
          </p>
          <h2
            id="wellness-heading"
            className="font-display text-ink text-3xl tracking-tight md:text-4xl lg:text-[2.65rem]"
          >
            Massage spa in{" "}
            <span className="from-sage via-copper to-sage-deep bg-gradient-to-r bg-clip-text italic text-transparent">
              GTB Nagar
            </span>
            , New Delhi
          </h2>
          <p className="text-ink/70 mt-8 text-base leading-relaxed md:text-lg">
            Looking for a{" "}
            <strong className="text-ink font-semibold">
              trusted massage spa near Hudson Lane or Kingsway Camp
            </strong>
            ? Blissful Spa &amp; Wellness sits on the first floor at 2521 Hudson
            Lane—above Mr Crust and close to Uttam Chai—serving GTB Nagar, DU
            North Campus, and guests from across North Delhi. We offer{" "}
            <Link href="/services/relaxation-massage" className={linkClass}>
              relaxation massage
            </Link>
            ,{" "}
            <Link href="/services/swedish-massage" className={linkClass}>
              Swedish
            </Link>
            ,{" "}
            <Link href="/services/deep-tissue-massage" className={linkClass}>
              deep tissue
            </Link>
            ,{" "}
            <Link href="/services/thai-massage" className={linkClass}>
              Thai
            </Link>
            , and{" "}
            <Link href="/services/balinese-massage" className={linkClass}>
              Balinese
            </Link>{" "}
            bodywork, plus{" "}
            <Link href="/services/couple-massage" className={linkClass}>
              couple massage
            </Link>
            ,{" "}
            <Link
              href="/services/massage-with-steam-shower"
              className={linkClass}
            >
              massage with steam
            </Link>
            , and{" "}
            <Link href="/services/massage-with-jacuzzi" className={linkClass}>
              jacuzzi packages
            </Link>
            , with clear{" "}
            <Link href="/rates" className={linkClass}>
              INR pricing
            </Link>{" "}
            on every service page. Message us on{" "}
            <a
              href={getWhatsAppHref("Hi, I'd like to book at Blissful Spa. ")}
              className={linkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>{" "}
            or call for the fastest reply.
          </p>

          <h3 className="font-display text-ink border-copper/25 mt-14 border-l-2 pl-5 text-2xl tracking-tight md:text-[1.65rem]">
            Therapeutic and stress-relief massage
          </h3>
          <p className="text-ink/65 mt-5 text-base leading-relaxed md:text-lg">
            Whether you sit through long lectures, drive in traffic, or train
            regularly, massage can ease muscle tension, support circulation, and
            help you sleep more soundly when combined with healthy habits. Our
            therapists blend Swedish flow, deeper focal work, Thai-style
            stretching, and Balinese techniques depending on the service you
            choose—always within your comfort range.
          </p>

          <h3 className="font-display text-ink border-copper/25 mt-12 border-l-2 pl-5 text-2xl tracking-tight md:text-[1.65rem]">
            Steam, jacuzzi, and couple experiences
          </h3>
          <p className="text-ink/65 mt-5 text-base leading-relaxed md:text-lg">
            Add warmth to your visit with a{" "}
            <strong className="text-ink font-semibold">steam session</strong> or
            book{" "}
            <strong className="text-ink font-semibold">
              massage with steam shower
            </strong>{" "}
            and{" "}
            <strong className="text-ink font-semibold">
              massage with jacuzzi
            </strong>{" "}
            for a longer reset. Couples enjoy side-by-side massage in a shared
            calm space—ideal for anniversaries, birthdays, or a quiet escape
            together after a busy week in Delhi.
          </p>

          <h3 className="font-display text-ink border-copper/25 mt-12 border-l-2 pl-5 text-2xl tracking-tight md:text-[1.65rem]">
            What to expect on your first visit
          </h3>
          <ul className="text-ink/65 mt-5 list-inside list-disc space-y-3 text-base leading-relaxed marker:text-copper md:text-lg">
            <li>
              Call{" "}
              <a className={linkClass} href={sitePhoneTel}>
                +91 {sitePhoneDisplay}
              </a>{" "}
              to check same-day availability; weekends fill quickly.
            </li>
            <li>
              Mention allergies, injuries, pregnancy, or heat sensitivity so we
              can adapt oils, pressure, and steam safely.
            </li>
            <li>
              Arrive a few minutes early to settle in; pricing and duration are
              confirmed before your session begins.
            </li>
          </ul>

          <aside className="border-sage/25 from-sage/12 to-copper/8 mt-14 rounded-2xl border bg-gradient-to-br p-6 shadow-[0_16px_48px_-28px_rgba(28,25,23,0.2)] md:p-8">
            <h3 className="text-copper text-[0.65rem] font-bold uppercase tracking-[0.24em]">
              Find us
            </h3>
            <p className="text-ink/75 mt-4 text-sm leading-relaxed md:text-base">
              1st Floor, 2521 Hudson Lane, above Mr Crust, near Uttam Chai,
              Kingsway Camp, GTB Nagar, New Delhi 110009. See the{" "}
              <Link href="/#find-us" className={linkClass}>
                map and directions
              </Link>{" "}
              above, or read{" "}
              <Link href="/#faq" className={linkClass}>
                FAQs
              </Link>{" "}
              for booking and payments.
            </p>
          </aside>
        </article>
      </div>
    </section>
  );
}
