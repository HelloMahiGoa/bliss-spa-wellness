import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { ServicesShowcase } from "@/components/site/ServicesShowcase";
import { siteLocalSeoLine, siteName } from "@/lib/site";

export const metadata: Metadata = {
  title: "Massage & spa services",
  description: `${siteName} in GTB Nagar, Delhi offers relaxation, Thai, Balinese, deep tissue, couple massage, steam, jacuzzi packages, and more on Hudson Lane. View prices and book by phone.`,
  keywords: [
    "spa GTB Nagar",
    "massage Hudson Lane Delhi",
    "couple massage Delhi",
    "Thai massage Kingsway Camp",
    "deep tissue massage North Delhi",
  ],
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="flex min-w-0 flex-1 flex-col">
        <section className="text-ink border-ink/8 from-cream/90 via-parchment to-parchment relative overflow-x-clip border-b bg-gradient-to-b px-4 py-14 sm:px-5 md:px-8 md:py-24">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.3]"
            aria-hidden
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")`,
            }}
          />
          <div className="bg-mist/25 pointer-events-none absolute -right-[12%] top-0 h-64 w-64 rounded-full blur-3xl" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-copper/30 to-transparent" />
          <div className="relative mx-auto min-w-0 max-w-6xl">
            <p className="text-copper text-[0.65rem] font-bold uppercase tracking-[0.28em]">
              Our menu
            </p>
            <h1 className="font-display mt-3 max-w-4xl text-4xl leading-[1.05] tracking-tight md:text-5xl lg:text-[3.25rem]">
              Massage &amp;{" "}
              <span className="from-sage via-copper to-sage-deep bg-gradient-to-r bg-clip-text italic text-transparent">
                wellness services
              </span>
            </h1>
            <p className="text-ink/70 mt-6 max-w-3xl text-base leading-relaxed md:text-lg">
              {siteLocalSeoLine} Each treatment below includes duration, price
              in INR, and a short SEO summary with a link to the full page—so
              Google and guests both see clear, unique copy per service.
            </p>
            <p className="text-ink/55 mt-5 max-w-3xl text-sm leading-relaxed md:text-base">
              Prefer a table? See our{" "}
              <Link
                href="/rates"
                className="text-sage decoration-copper/30 font-semibold underline-offset-4 transition-colors hover:text-copper hover:underline"
              >
                rates overview
              </Link>
              .
            </p>
          </div>
        </section>

        <ServicesShowcase variant="servicesPage" />
      </main>
      <Footer />
    </>
  );
}
