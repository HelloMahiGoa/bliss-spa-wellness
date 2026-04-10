"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { getWhatsAppHref } from "@/lib/site";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/rates", label: "Rates" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

function LogoMark({ className }: { className?: string }) {
  const uid = useId().replace(/:/g, "");
  const gradId = `logo-shine-${uid}`;

  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient
          id={gradId}
          x1="6"
          y1="2"
          x2="34"
          y2="38"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fffdf9" offset="0%" />
          <stop stopColor="#e8dfd0" offset="42%" />
          <stop stopColor="#c4b5a2" offset="100%" />
        </linearGradient>
        <radialGradient id={`logo-halo-${uid}`} cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#b07d4c" stopOpacity={0.22} />
          <stop offset="70%" stopColor="#b07d4c" stopOpacity={0} />
        </radialGradient>
      </defs>
      <circle cx="20" cy="20" r="15" fill={`url(#logo-halo-${uid})`} />
      <g transform="translate(20 21)">
        <g className="logo-lotus-turn">
          <g className="logo-petal">
            <ellipse
              rx="7"
              ry="13"
              fill={`url(#${gradId})`}
              transform="rotate(0)"
              cy="-3"
            />
          </g>
          <g className="logo-petal logo-petal-delay-1">
            <ellipse
              rx="7"
              ry="13"
              fill={`url(#${gradId})`}
              opacity={0.9}
              transform="rotate(120)"
              cy="-3"
            />
          </g>
          <g className="logo-petal logo-petal-delay-2">
            <ellipse
              rx="7"
              ry="13"
              fill={`url(#${gradId})`}
              opacity={0.9}
              transform="rotate(240)"
              cy="-3"
            />
          </g>
        </g>
      </g>
      <circle cx="20" cy="21" r="2.2" fill="#3d5245" fillOpacity={0.38} />
    </svg>
  );
}

function HamburgerIcon({ className }: { className?: string }) {
  return (
    <span
      className={`flex h-[18px] w-[22px] flex-col justify-center gap-[5px] ${className ?? ""}`}
      aria-hidden
    >
      <span className="bg-current block h-0.5 w-full rounded-full" />
      <span className="bg-current block h-0.5 w-full rounded-full" />
      <span className="bg-current block h-0.5 w-full rounded-full" />
    </span>
  );
}

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  function isActive(href: string): boolean {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-[60]">
      <div className="border-ink/10 from-parchment/95 via-parchment/90 to-cream/80 supports-[backdrop-filter]:from-parchment/88 supports-[backdrop-filter]:via-parchment/82 supports-[backdrop-filter]:to-cream/72 relative border-b bg-gradient-to-b shadow-[0_1px_0_rgba(176,125,76,0.12),0_8px_32px_-12px_rgba(28,25,23,0.08)] backdrop-blur-xl">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-copper/35 to-transparent" />

        <div className="relative mx-auto flex min-w-0 max-w-6xl items-center justify-between gap-3 px-3 py-3.5 sm:gap-4 sm:px-6 md:gap-6 md:px-8 md:py-4">
        <Link
          href="/"
          className="group focus-visible:ring-sage/45 relative z-10 flex min-w-0 max-w-[calc(100%-3.25rem)] items-center gap-2.5 rounded-2xl pr-1 focus-visible:ring-2 focus-visible:outline-none sm:max-w-none sm:gap-3 sm:pr-2 md:gap-3.5"
        >
          <span className="from-sage via-sage-deep to-sage-deep ring-copper/30 logo-badge-glow relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ring-1 ring-inset transition-transform duration-500 ease-out group-hover:scale-[1.06] md:h-12 md:w-12">
            <span className="pointer-events-none absolute inset-[2px] rounded-[0.85rem] bg-gradient-to-br from-white/14 to-transparent" />
            <span className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-copper/25 via-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <LogoMark className="relative z-[1] h-6 w-6 md:h-7 md:w-7" />
          </span>
          <span className="min-w-0 flex-1 leading-tight">
            <span className="font-display text-ink group-hover:text-sage block text-[1.2rem] tracking-tight transition-[color,transform] duration-300 group-hover:translate-x-0.5 sm:text-[1.35rem] md:text-[1.55rem]">
              Blissful
            </span>
            <span className="text-mist logo-wordmark-breathe mt-0.5 block text-[0.55rem] font-semibold uppercase leading-tight sm:text-[0.625rem] md:text-[0.68rem]">
              Spa &amp; Wellness
            </span>
          </span>
        </Link>

        <nav
          className="text-ink/85 absolute left-1/2 hidden -translate-x-1/2 items-center gap-0.5 lg:flex"
          aria-label="Primary"
        >
          {nav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  active
                    ? "text-sage group relative px-3 py-2 text-[0.8125rem] font-semibold tracking-wide transition-colors"
                    : "group text-ink/75 hover:text-sage focus-visible:ring-sage/40 relative px-3 py-2 text-[0.8125rem] font-medium tracking-wide transition-colors focus-visible:ring-2 focus-visible:outline-none"
                }
              >
                {item.label}
                <span
                  className={
                    active
                      ? "via-copper to-sage absolute bottom-1 left-3 right-3 h-[2px] rounded-full bg-gradient-to-r from-copper"
                      : "via-copper to-sage absolute bottom-1 left-3 right-3 h-[2px] origin-center scale-x-0 rounded-full bg-gradient-to-r from-copper transition duration-300 ease-out group-hover:scale-x-100"
                  }
                  aria-hidden
                />
              </Link>
            );
          })}
        </nav>

        <div className="relative z-10 flex shrink-0 items-center gap-2 md:gap-3">
          <a
            href={getWhatsAppHref("Hi, I'd like to book at Blissful Spa. ")}
            target="_blank"
            rel="noopener noreferrer"
            className="from-[#1ebe5d] to-[#128c7e] shadow-[#128c7e]/25 hover:shadow-[#128c7e]/35 focus-visible:ring-sage/40 hidden items-center gap-2 rounded-full bg-gradient-to-br px-4 py-2 text-sm font-semibold text-white shadow-md transition-[box-shadow,transform] hover:-translate-y-px hover:shadow-lg focus-visible:ring-2 focus-visible:outline-none lg:inline-flex"
          >
            <WhatsAppGlyph className="h-4 w-4 shrink-0 opacity-95" />
            Book on WhatsApp
          </a>

          <button
            type="button"
            className="text-ink hover:bg-sage/10 focus-visible:ring-sage/40 relative flex h-11 w-11 items-center justify-center rounded-xl border border-ink/12 bg-parchment/60 shadow-sm transition-colors focus-visible:ring-2 focus-visible:outline-none lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="site-mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span className="flex h-[18px] w-[22px] flex-col justify-center gap-[5px]">
              <span
                className={`bg-ink block h-0.5 w-full origin-center rounded-full transition-transform duration-200 ease-out ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span
                className={`bg-ink block h-0.5 w-full rounded-full transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`bg-ink block h-0.5 w-full origin-center rounded-full transition-transform duration-200 ease-out ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
        </div>
      </div>

      {/* Tablet / small desktop: nav row below logo row */}
      <div className="border-ink/8 from-cream/40 to-transparent relative hidden border-t bg-gradient-to-b px-4 py-2 md:block lg:hidden">
        <nav
          className="text-ink/80 mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-1 gap-y-1"
          aria-label="Primary"
        >
          {nav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  active
                    ? "text-sage rounded-full px-3 py-1.5 text-xs font-semibold tracking-wide"
                    : "hover:bg-sage/8 focus-visible:ring-sage/40 rounded-full px-3 py-1.5 text-xs font-medium tracking-wide transition-colors focus-visible:ring-2 focus-visible:outline-none"
                }
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={getWhatsAppHref("Hi, I'd like to book at Blissful Spa. ")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sage hover:bg-sage/12 rounded-full px-3 py-1.5 text-xs font-semibold"
          >
            WhatsApp
          </a>
        </nav>
      </div>

      {mobileOpen ? (
        <>
          <button
            type="button"
            className="bg-ink/35 fixed inset-0 z-40 backdrop-blur-[2px] lg:hidden"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          />
          <div
            id="site-mobile-nav"
            className="border-ink/10 from-parchment fixed inset-x-0 top-0 z-50 max-h-[min(100dvh,100vh)] overflow-y-auto border-b bg-gradient-to-b via-cream/50 to-parchment pb-10 pt-[4.75rem] shadow-2xl lg:hidden"
          >
            <div className="border-ink/10 flex justify-end border-b px-4 pb-4 pt-1 sm:px-6">
              <button
                type="button"
                className="text-ink border-ink/20 hover:bg-sage/12 focus-visible:ring-sage/45 flex h-12 w-12 items-center justify-center rounded-xl border-2 bg-parchment shadow-md transition-colors focus-visible:ring-2 focus-visible:outline-none"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
              >
                <HamburgerIcon />
              </button>
            </div>
            <nav
              className="mx-auto flex w-full min-w-0 max-w-md flex-col gap-1 px-4 sm:px-6"
              aria-label="Mobile primary"
            >
              {nav.map((item, i) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={
                      active
                        ? "font-display border-copper/30 from-sage/12 text-sage break-words rounded-2xl border bg-gradient-to-r to-transparent px-4 py-4 text-lg tracking-tight sm:px-5 sm:text-xl"
                        : "font-display text-ink/90 hover:bg-sage/8 break-words rounded-2xl px-4 py-4 text-lg tracking-tight transition-colors sm:px-5 sm:text-xl"
                    }
                    style={{ animationDelay: `${i * 40}ms` }}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <a
                href={getWhatsAppHref("Hi, I'd like to book at Blissful Spa. ")}
                target="_blank"
                rel="noopener noreferrer"
                className="from-[#1ebe5d] to-[#128c7e] mt-4 flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-br px-5 py-4 text-base font-semibold text-white shadow-lg"
              >
                <WhatsAppGlyph className="h-5 w-5" />
                Book on WhatsApp
              </a>
            </nav>
          </div>
        </>
      ) : null}
    </header>
  );
}
