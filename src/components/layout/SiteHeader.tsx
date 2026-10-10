"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import { Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { mainNav, quoteHref, site } from "@/content/site";
import { cx } from "@/lib/cx";
import { PAGE_REGION_ID } from "./ids";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useLayoutEffect(() => () => setOpen(false), []);

  useEffect(() => {
    const region = document.getElementById(PAGE_REGION_ID);
    document.documentElement.style.overflow = open ? "hidden" : "";
    region?.toggleAttribute("inert", open);
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
      region?.removeAttribute("inert");
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const close = () => setOpen(false);

  return (
    <header
      className={cx(
        "sticky top-0 z-50 transition-[background-color,box-shadow] duration-300",
        open ? "bg-navy text-ivory" : "text-navy",
        !open && scrolled && "bg-ivory/92 shadow-[0_1px_0_var(--color-line)] backdrop-blur-md",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-6 lg:h-[4.75rem]">
        <Link href="/" onNavigate={close} aria-label={`${site.name} – startsida`} className="-m-1 p-1">
          <Logo inverse={open} />
        </Link>

        <nav aria-label="Huvudmeny" className="hidden md:block">
          <ul className="flex items-center gap-8 lg:gap-10">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="link-underline py-2 text-[0.95rem] font-medium"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-5">
          <a
            href={site.phone.href}
            className="hidden items-center gap-2 text-[0.95rem] font-medium tabular-nums xl:flex"
          >
            <Phone aria-hidden className="size-4 text-terracotta-ink" />
            {site.phone.display}
          </a>
          <div className="hidden sm:block">
            <ButtonLink href={quoteHref} className="min-h-11 px-5">
              Begär offert
            </ButtonLink>
          </div>
          <button
            ref={toggleRef}
            type="button"
            aria-expanded={open}
            aria-controls="mobilmeny"
            onClick={() => setOpen((value) => !value)}
            className="-mr-2 flex min-h-11 items-center gap-3 px-2 text-[0.95rem] font-medium md:hidden"
          >
            <span>{open ? "Stäng" : "Meny"}</span>
            <span aria-hidden className="relative block h-3 w-6">
              <span
                className={cx(
                  "absolute left-0 h-[1.5px] w-full bg-current transition-transform duration-300",
                  open ? "top-1/2 rotate-45" : "top-0",
                )}
              />
              <span
                className={cx(
                  "absolute left-0 h-[1.5px] w-full bg-current transition-transform duration-300",
                  open ? "top-1/2 -rotate-45" : "bottom-0",
                )}
              />
            </span>
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <m.div
            id="mobilmeny"
            role="dialog"
            aria-modal="true"
            aria-label="Meny"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-16 bottom-0 overflow-y-auto bg-navy text-ivory md:hidden"
          >
            <Container className="flex min-h-full flex-col pt-6 pb-10">
              <nav aria-label="Mobilmeny">
                <ul className="border-t border-line-inverse">
                  {[{ href: "/", label: "Start" }, ...mainNav].map((item, index) => (
                    <m.li
                      key={item.href}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 + index * 0.04, duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                      className="border-b border-line-inverse"
                    >
                      <Link
                        href={item.href}
                        onNavigate={close}
                        aria-current={pathname === item.href ? "page" : undefined}
                        className="flex items-baseline justify-between py-4 font-display text-[2rem] leading-tight tracking-[-0.03em] aria-[current=page]:text-terracotta"
                      >
                        {item.label}
                        <span className="eyebrow text-ivory/70 tabular-nums">0{index + 1}</span>
                      </Link>
                    </m.li>
                  ))}
                </ul>
              </nav>

              <div className="mt-auto space-y-6 pt-12">
                <ButtonLink href={quoteHref} onNavigate={close} variant="accent" className="w-full">
                  Begär offert
                </ButtonLink>
                <dl className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <dt className="eyebrow mb-1.5 text-ivory/70">Telefon</dt>
                    <dd>
                      <a href={site.phone.href} className="tabular-nums">
                        {site.phone.display}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="eyebrow mb-1.5 text-ivory/70">E-post</dt>
                    <dd>
                      <a href={`mailto:${site.email}`}>{site.email}</a>
                    </dd>
                  </div>
                </dl>
              </div>
            </Container>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
