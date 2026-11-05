"use client";

import { ArrowUp, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import {
  InstagramIcon,
  WhatsappIcon,
} from "@/components/ui/SocialIcons";
import { useLenis } from "@/components/ui/SmoothScroll";
import { navLinks, site } from "@/lib/site";

const whatsappLink = `https://wa.me/${site.phone}?text=${encodeURIComponent(
  "Hi Manali! I'd love to collaborate on a campaign.",
)}`;

const mailLink = `mailto:${site.email}?subject=${encodeURIComponent(
  "Collaboration enquiry — Manali Jagtap",
)}`;

export function Footer() {
  const lenis = useLenis();
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date()),
      );
    update();
    const interval = window.setInterval(update, 60000);
    return () => window.clearInterval(interval);
  }, []);

  const go = (href: string) => {
    if (href === "#home") {
      if (lenis) lenis.scrollTo(0);
      else window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.querySelector(href);
    if (!el) return;
    if (lenis) lenis.scrollTo(el as HTMLElement, { offset: -20 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="relative scroll-mt-24 overflow-hidden border-t border-paper/10 bg-ink pt-16 text-paper"
    >
      <div className="container-x">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <button
              type="button"
              onClick={() => go("#home")}
              className="script text-4xl leading-none transition-colors duration-300 hover:text-gold"
            >
              Manali
            </button>
            <p className="label mt-2 text-[8px] text-paper/40">
              Travel · Food · Beauty · Lifestyle
            </p>
            <p className="mt-5 max-w-[16rem] text-sm leading-relaxed text-paper/55">
              {site.tagline}
            </p>
            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="label link-line text-[8px] text-paper/60"
              >
                {site.handle}
              </a>
              <a
                href={site.foodInstagram}
                target="_blank"
                rel="noreferrer noopener"
                className="label link-line text-[8px] text-paper/40"
              >
                {site.foodHandle}
              </a>
            </div>
            <p className="label mt-6 text-[8px] text-paper/35">
              Mumbai, India — {time || "--:--"} IST
            </p>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <p className="label text-[8px] text-paper/35">Explore</p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => go(link.href)}
                    className="text-sm text-paper/60 transition-colors duration-300 hover:text-paper"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="label text-[8px] text-paper/35">Social</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group inline-flex items-center gap-2 text-sm text-paper/60 transition-colors duration-300 hover:text-paper"
                >
                  <InstagramIcon className="size-3.5" />
                  Instagram
                  <ArrowUpRight
                    className="size-3 opacity-0 transition-opacity group-hover:opacity-100"
                    strokeWidth={1.4}
                  />
                </a>
              </li>
              <li>
                <a
                  href={site.foodInstagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group inline-flex items-center gap-2 text-sm text-paper/60 transition-colors duration-300 hover:text-paper"
                >
                  <InstagramIcon className="size-3.5" />
                  Food account
                  <ArrowUpRight
                    className="size-3 opacity-0 transition-opacity group-hover:opacity-100"
                    strokeWidth={1.4}
                  />
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group inline-flex items-center gap-2 text-sm text-paper/60 transition-colors duration-300 hover:text-paper"
                >
                  <WhatsappIcon className="size-3.5" />
                  WhatsApp
                  <ArrowUpRight
                    className="size-3 opacity-0 transition-opacity group-hover:opacity-100"
                    strokeWidth={1.4}
                  />
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="label text-[8px] text-paper/35">Say hello</p>
            <a
              href={`mailto:${site.email}`}
              className="link-line mt-4 inline-block text-sm text-paper/75"
            >
              {site.email}
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer noopener"
              className="label link-line mt-2 block w-fit text-[8px] text-paper/55"
            >
              DM on Instagram
            </a>
            <p className="mt-3 text-xs leading-relaxed text-paper/40">
              {site.availability}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-paper/40">
              Booking 2026–27
            </p>
            <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-paper/10 pt-4">
              <div>
                <p className="label text-[7px] text-paper/35">Best for</p>
                <p className="mt-1 text-xs leading-relaxed text-paper/60">
                  Travel, food, beauty, lifestyle
                </p>
              </div>
              <div>
                <p className="label text-[7px] text-paper/35">Response</p>
                <p className="mt-1 text-xs leading-relaxed text-paper/60">
                  Within 24 hours
                </p>
              </div>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-paper/40">
              Send dates, location, deliverables and budget. A moodboard helps
              too.
            </p>
            <a
              href={mailLink}
              className="btn btn--ghost-light mt-6 !px-4 !py-2.5"
            >
              Start a project
              <ArrowUpRight className="size-3" strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="mt-16 border-t border-paper/10 pt-8">
          <h2 className="display select-none whitespace-nowrap text-[clamp(4rem,17.4vw,17rem)] leading-[0.72] text-outline-light transition-colors duration-700 hover:text-paper">
            Manali
          </h2>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-paper/10 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="label text-[8px] text-paper/35">
            © 2026 Manali Jagtap. All rights reserved.
          </p>
          <p className="label text-[8px] text-paper/30">
            Creator Portfolio · Travel · Food · Beauty · Lifestyle
          </p>
          <button
            type="button"
            onClick={() => go("#home")}
            className="group flex items-center gap-2 label text-[8px] text-paper/45 transition-colors hover:text-paper"
          >
            Back to top
            <span className="grid size-7 place-items-center rounded-full border border-paper/20 transition-colors group-hover:border-paper/60">
              <ArrowUp className="size-3" strokeWidth={1.5} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
