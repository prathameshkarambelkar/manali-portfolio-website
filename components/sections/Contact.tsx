"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { InstagramIcon, WhatsappIcon } from "@/components/ui/SocialIcons";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { site } from "@/lib/site";

const whatsappLink = `https://wa.me/${site.phone}?text=${encodeURIComponent(
  "Hi Manali! I'd love to collaborate on a campaign.",
)}`;

const mailLink = `mailto:${site.email}?subject=${encodeURIComponent(
  "Collaboration enquiry — Manali Jagtap",
)}`;

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-teal pb-16 pt-24 text-paper sm:pt-28 lg:pb-20 lg:pt-32"
    >
      <span
        aria-hidden="true"
        className="script pointer-events-none absolute -left-8 bottom-0 select-none text-[18rem] leading-none text-paper/[0.035] sm:text-[26rem]"
      >
        hello
      </span>

      <div className="container-x relative">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-paper/15 pb-5">
          <SectionLabel index="06" light>
            Contact
          </SectionLabel>
          <div className="flex items-center gap-2">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-gold opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-gold" />
            </span>
            <span className="label text-[8px] text-paper/55">
              {site.availability}
            </span>
          </div>
        </div>

        <div className="mt-10 grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <p className="script text-[clamp(2rem,4vw,3.2rem)] text-gold">
              let&apos;s work together
            </p>
            <h2 className="display-soft mt-2 text-[clamp(2.8rem,5.8vw,4.9rem)] leading-[0.98]">
              Your brand.
              <br />
              My camera.
              <br />
              <em className="italic text-gold">One good story.</em>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-paper/65">
              Tell me what you&apos;re launching, where, and when. I&apos;ll come
              back with a concept, a timeline and a quote — usually within a
              day.
            </p>

          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer noopener"
              className="group flex items-center gap-4 bg-paper p-5 text-ink transition-colors duration-500 hover:bg-paper-2 sm:p-6"
              data-cursor="Open DM"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-clay text-paper">
                <InstagramIcon className="size-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="label block text-[7px] text-ink-soft">
                  Fastest reply · DM on Instagram
                </span>
                <span className="display-soft mt-1 block text-[clamp(1.35rem,2.4vw,1.9rem)] leading-tight">
                  {site.handle}
                </span>
              </span>
              <ArrowUpRight
                className="size-5 shrink-0 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
                strokeWidth={1.3}
              />
            </a>

            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <a
                href={mailLink}
                className="group flex flex-col justify-between border border-paper/20 p-5 transition-colors duration-500 hover:bg-paper/5"
              >
                <div className="flex items-start justify-between gap-3">
                  <Mail className="size-5 text-gold" strokeWidth={1.3} />
                  <ArrowUpRight
                    className="size-4 text-paper/35 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-paper"
                    strokeWidth={1.3}
                  />
                </div>
                <div className="mt-8">
                  <p className="label text-[7px] text-paper/40">Email</p>
                  <p className="mt-1 break-all text-sm text-paper/85">
                    {site.email}
                  </p>
                  <p className="label mt-2 text-[7px] text-paper/30">
                    For briefs &amp; decks
                  </p>
                </div>
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex flex-col justify-between border border-paper/20 p-5 transition-colors duration-500 hover:bg-paper/5"
              >
                <div className="flex items-start justify-between gap-3">
                  <WhatsappIcon className="size-5 text-gold" />
                  <ArrowUpRight
                    className="size-4 text-paper/35 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-paper"
                    strokeWidth={1.3}
                  />
                </div>
                <div className="mt-8">
                  <p className="label text-[7px] text-paper/40">WhatsApp</p>
                  <p className="mt-1 text-sm text-paper/85">
                    {site.phoneDisplay}
                  </p>
                  <p className="label mt-2 text-[7px] text-paper/30">
                    Quick questions
                  </p>
                </div>
              </a>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-paper/15 pt-5">
              <div>
                <p className="label text-[7px] text-paper/40">Based in</p>
                <p className="mt-1 text-sm">{site.location}</p>
              </div>
              <div>
                <p className="label text-[7px] text-paper/40">Currently</p>
                <p className="mt-1 text-sm">Booking 2026–27</p>
              </div>
              <div>
                <p className="label text-[7px] text-paper/40">Best for</p>
                <p className="mt-1 text-sm">Travel, stays, cafés, beauty</p>
              </div>
              <div>
                <p className="label text-[7px] text-paper/40">Response time</p>
                <p className="mt-1 text-sm">Within 24 hours</p>
              </div>
            </div>

            <div className="mt-4 border border-paper/15 bg-paper/[0.03] p-4">
              <p className="label text-[7px] text-paper/40">
                Send this in your first message
              </p>
              <p className="mt-2 text-sm leading-relaxed text-paper/70">
                Dates · location · deliverables · budget. If you have a
                moodboard, even better.
              </p>
            </div>

            <div className="mt-4 flex items-center justify-between gap-4 border-t border-paper/15 pt-4">
              <a
                href={site.foodInstagram}
                target="_blank"
                rel="noreferrer noopener"
                className="label link-line text-[8px] text-paper/55"
              >
                Foodie side — {site.foodHandle}
              </a>
              <span className="label text-[7px] text-paper/30">Mumbai, IN</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
