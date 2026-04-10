import Link from "next/link";
import {
  formatAddressBlock,
  getWhatsAppHref,
  sitePhoneDisplay,
  sitePhoneTel,
} from "@/lib/site";

export function Footer() {
  return (
    <footer
      id="visit"
      className="from-sage-deep via-ink to-ink text-parchment/90 relative border-t border-white/10 bg-gradient-to-b"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="from-copper/40 pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r via-transparent to-copper/30" />
      <div className="from-copper/15 pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-gradient-to-br to-transparent blur-3xl" />

      <div className="relative mx-auto grid min-w-0 max-w-6xl gap-14 px-4 py-14 sm:px-5 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:gap-16 md:px-8 md:py-20">
        <div className="min-w-0 space-y-7">
          <p className="font-display text-parchment text-3xl tracking-tight md:text-4xl">
            Blissful Spa &amp; Wellness
          </p>
          <p className="text-parchment/70 max-w-md text-sm leading-relaxed md:text-base">
            Massage, steam, and jacuzzi experiences in GTB Nagar—thoughtful
            pressure, clean linens, and therapists who listen before they begin.
          </p>
          <address className="text-parchment/80 not-italic text-sm leading-relaxed whitespace-pre-line md:text-base">
            <span className="text-copper font-bold uppercase tracking-[0.2em]">
              Visit
            </span>
            <br />
            {formatAddressBlock()}
            <br />
            <a
              className="hover:text-copper mt-3 inline-block font-medium underline-offset-4 transition-colors hover:underline"
              href={sitePhoneTel}
            >
              +91 {sitePhoneDisplay}
            </a>
            <br />
            <a
              className="hover:text-copper mt-2 inline-block font-medium underline-offset-4 transition-colors hover:underline"
              href={getWhatsAppHref("Hi Blissful Spa, I'd like to enquire. ")}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </address>
        </div>

        <div className="grid min-w-0 gap-12 sm:grid-cols-2">
          <div>
            <h2 className="text-copper mb-5 text-[0.65rem] font-bold uppercase tracking-[0.24em]">
              Hours
            </h2>
            <ul className="text-parchment/75 space-y-3 text-sm md:text-base">
              <li className="border-parchment/10 flex justify-between border-b border-dashed pb-2">
                <span>Mon–Thu</span>
                <span className="text-parchment/90 tabular-nums">9:00–20:00</span>
              </li>
              <li className="border-parchment/10 flex justify-between border-b border-dashed pb-2">
                <span>Fri–Sat</span>
                <span className="text-parchment/90 tabular-nums">9:00–21:00</span>
              </li>
              <li className="flex justify-between pt-1">
                <span>Sunday</span>
                <span className="text-parchment/90 tabular-nums">10:00–18:00</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-copper mb-5 text-[0.65rem] font-bold uppercase tracking-[0.24em]">
              Explore
            </h2>
            <ul className="text-parchment/75 space-y-2.5 text-sm md:text-base">
              <li>
                <Link
                  className="hover:text-copper transition-colors"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-copper transition-colors"
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-copper transition-colors"
                  href="/services"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-copper transition-colors"
                  href="/rates"
                >
                  Rates
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-copper transition-colors"
                  href="/gallery"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-copper transition-colors"
                  href="/blog"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-copper transition-colors"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="text-parchment/45 mx-auto flex min-w-0 max-w-6xl flex-col gap-3 px-4 py-7 text-xs sm:px-5 md:flex-row md:items-center md:justify-between md:px-8">
          <p>
            © {new Date().getFullYear()} Blissful Spa &amp; Wellness. All rights
            reserved.
          </p>
          <p className="md:text-right">
            GTB Nagar · Hudson Lane · New Delhi
          </p>
        </div>
      </div>
    </footer>
  );
}
