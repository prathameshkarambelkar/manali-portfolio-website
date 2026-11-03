"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, UtensilsCrossed, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLenis } from "@/components/ui/SmoothScroll";
import {
  InstagramIcon,
  WhatsappIcon,
} from "@/components/ui/SocialIcons";
import { navLinks, site } from "@/lib/site";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    lenis?.stop();
    const previous = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      lenis?.start();
      document.documentElement.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, lenis]);

  const go = (href: string) => {
    const delay = open ? 720 : 0;
    setOpen(false);

    window.setTimeout(() => {
      if (href === "#home") {
        if (lenis) lenis.scrollTo(0, { duration: 1.5 });
        else window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const element = document.querySelector(href);
      if (!element) return;

      if (lenis) {
        lenis.scrollTo(element as HTMLElement, {
          offset: -20,
          duration: 1.5,
        });
      } else {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, delay);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled
            ? "border-b border-line/60 bg-paper/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div
          className={`container-x flex items-center justify-between transition-[height] duration-500 ${
            scrolled ? "h-[68px]" : "h-[88px]"
          }`}
        >
          <button
            type="button"
            onClick={() => go("#home")}
            className="group flex items-center gap-3"
            aria-label="Manali Jagtap — back to top"
          >
            <span className="script text-[1.9rem] leading-none text-ink transition-colors duration-300 group-hover:text-wine">
              Manali
            </span>
            <span className="label hidden text-[9px] leading-[1.5] text-ink-soft sm:block">
              Travel
              <br />
              UGC
            </span>
          </button>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {navLinks.slice(0, 4).map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => go(link.href)}
                className="label link-line text-[10px] text-ink-soft transition-colors duration-300 hover:text-ink"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram"
              data-cursor="Follow"
              className="hidden size-10 place-items-center rounded-full border border-ink/20 text-ink transition-colors duration-300 hover:bg-ink hover:text-paper sm:grid"
            >
              <InstagramIcon className="size-4" />
            </a>
            <button
              type="button"
              onClick={() => go("#contact")}
              className="btn hidden !px-5 !py-3 sm:inline-flex"
            >
              Work with me
              <ArrowUpRight className="size-3.5" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="grid size-10 place-items-center rounded-full border border-ink/20 text-ink transition-colors duration-300 hover:bg-ink hover:text-paper lg:hidden"
            >
              <Menu className="size-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[115] bg-ink text-paper"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
          >
            <div className="container-x flex h-full flex-col justify-between py-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="script text-3xl text-paper">Manali</p>
                  <p className="label mt-1 text-[9px] text-paper/50">
                    The travel edit
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="grid size-11 place-items-center rounded-full border border-paper/25 text-paper transition-colors duration-300 hover:bg-paper hover:text-ink"
                >
                  <X className="size-4" strokeWidth={1.5} />
                </button>
              </div>

              <div className="flex flex-1 items-center gap-10 py-8">
                <nav className="flex-1" aria-label="Menu">
                  <ul>
                    {navLinks.map((link, index) => (
                      <li key={link.href} className="overflow-hidden">
                        <motion.button
                          type="button"
                          onClick={() => go(link.href)}
                          className="group flex w-full items-baseline justify-between gap-4 border-b border-paper/10 py-3 text-left transition-colors duration-300 hover:text-gold sm:py-4"
                          initial={{ y: "110%", opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{
                            delay: 0.2 + index * 0.06,
                            duration: 0.8,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                        >
                          <span className="flex items-baseline gap-4">
                            <span className="label text-[9px] text-paper/40">
                              0{index + 1}
                            </span>
                            <span className="display text-[clamp(2.4rem,7vw,4.5rem)] leading-[0.95]">
                              {link.label}
                            </span>
                          </span>
                          <ArrowUpRight
                            className="size-5 -translate-x-2 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 sm:size-7"
                            strokeWidth={1}
                          />
                        </motion.button>
                      </li>
                    ))}
                  </ul>
                </nav>

                <motion.div
                  className="hidden w-44 shrink-0 lg:block"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.8 }}
                >
                  <div className="overflow-hidden">
                    <img
                      src="/images/meet-manali.webp"
                      alt="Manali Jagtap laughing on a Mumbai road"
                      className="arch h-64 w-full object-cover opacity-90"
                      loading="lazy"
                    />
                  </div>
                  <p className="label mt-4 text-[8px] leading-relaxed text-paper/45">
                    Off-duty —
                    <br />
                    Mumbai
                  </p>
                </motion.div>
              </div>

              <motion.div
                className="flex flex-col gap-5 border-t border-paper/10 pt-5 sm:flex-row sm:items-center sm:justify-between"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <div className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-gold" />
                  <p className="label text-[8px] text-paper/60">
                    {site.availability}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={site.email ? `mailto:${site.email}` : "#"}
                    className="link-line text-sm text-paper/70 hover:text-paper"
                  >
                    {site.email}
                  </a>
                  <span className="hidden h-4 w-px bg-paper/20 sm:block" />
                  <div className="flex items-center gap-3 text-paper/60">
                    <a
                      href={site.instagram}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Instagram"
                      className="transition-colors hover:text-paper"
                    >
                      <InstagramIcon className="size-5" />
                    </a>
                    <a
                      href={site.foodInstagram}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Food Instagram"
                      className="transition-colors hover:text-paper"
                    >
                      <UtensilsCrossed className="size-5" strokeWidth={1.3} />
                    </a>
                    <a
                      href={`https://wa.me/${site.phone}`}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="WhatsApp"
                      className="transition-colors hover:text-paper"
                    >
                      <WhatsappIcon className="size-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
