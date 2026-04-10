import type { ReactNode } from "react";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";

type InnerPageLayoutProps = {
  title: string;
  /** Optional line under the H1 (e.g. positioning statement) */
  subtitle?: string;
  children?: ReactNode;
};

export function InnerPageLayout({
  title,
  subtitle,
  children,
}: InnerPageLayoutProps) {
  return (
    <>
      <Header />
      <main className="flex min-w-0 flex-1 flex-col">
        <section className="text-ink border-ink/8 from-cream/40 via-parchment to-parchment relative overflow-hidden border-b bg-gradient-to-b">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.25]"
            aria-hidden
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")`,
            }}
          />
          <div className="bg-mist/20 pointer-events-none absolute -right-[10%] top-0 h-48 w-48 rounded-full blur-3xl" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-copper/30 to-transparent" />
          <div className="relative mx-auto w-full min-w-0 max-w-6xl px-4 py-12 sm:px-5 md:px-8 md:py-20">
            <p className="text-copper mb-3 text-[0.65rem] font-bold uppercase tracking-[0.28em]">
              Blissful Spa &amp; Wellness
            </p>
            <h1 className="font-display max-w-3xl text-4xl leading-[1.08] tracking-tight md:text-5xl">
              {title}
            </h1>
            {subtitle ? (
              <p className="text-ink/65 mt-5 max-w-2xl text-base leading-relaxed sm:text-lg">
                {subtitle}
              </p>
            ) : null}
          </div>
        </section>
        <section className="mx-auto w-full min-w-0 max-w-6xl flex-1 break-words px-4 py-10 sm:px-5 md:px-8 md:py-16">
          {children}
        </section>
      </main>
      <Footer />
    </>
  );
}
