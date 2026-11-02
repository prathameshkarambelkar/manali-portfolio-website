"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { Magnetic } from "@/components/ui/Magnetic";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useLenis } from "@/components/ui/SmoothScroll";
import { packages } from "@/lib/site";

export function Packages() {
  const lenis = useLenis();

  const goToContact = () => {
    const el = document.querySelector("#contact");
    if (!el) return;
    if (lenis) lenis.scrollTo(el as HTMLElement, { offset: -20 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="packages"
      className="relative border-y border-ink/10 bg-paper-2/55 py-24 sm:py-32"
    >
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel index="08">Featured packages</SectionLabel>
            <h2 className="display-soft mt-4 text-[clamp(2.7rem,5.6vw,4.8rem)] leading-[0.98]">
              Pick a starting
              <br />
              <em className="italic text-clay">point.</em>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="body-copy max-w-sm">
              Clear scope, clear deliverables, no forty-slide decks. Every
              package includes scripting, editing and a hook that earns the
              first three seconds.
            </p>
            <p className="label mt-4 text-[8px] text-ink-soft">
              All prices in INR · custom scopes welcome
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {packages.map((pkg, index) => (
            <Reveal key={pkg.name} delay={index * 0.06} className="h-full">
              <article
                className={`flex h-full flex-col border p-6 sm:p-7 ${
                  pkg.featured
                    ? "border-teal bg-teal text-paper"
                    : "border-ink/15 bg-paper"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={`label text-[8px] ${
                      pkg.featured ? "text-paper/45" : "text-ink-soft"
                    }`}
                  >
                    {pkg.number}
                  </span>
                  {pkg.featured && (
                    <span className="chip border-gold/40 text-[7px] text-gold">
                      Most booked
                    </span>
                  )}
                </div>

                <h3 className="display-soft mt-8 text-[clamp(1.6rem,2.2vw,2rem)] leading-tight">
                  {pkg.name}
                </h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    pkg.featured ? "text-paper/60" : "text-ink-soft"
                  }`}
                >
                  {pkg.line}
                </p>

                <div
                  className={`mt-7 border-t pt-5 ${
                    pkg.featured ? "border-paper/15" : "border-ink/10"
                  }`}
                >
                  <p className="display text-[clamp(2rem,3vw,2.6rem)] leading-none">
                    {pkg.price}
                  </p>
                  <p
                    className={`label mt-2 text-[7px] ${
                      pkg.featured ? "text-paper/40" : "text-ink-soft"
                    }`}
                  >
                    starting {pkg.unit}
                  </p>
                </div>

                <ul
                  className={`mt-6 space-y-2.5 border-t pt-5 ${
                    pkg.featured ? "border-paper/15" : "border-ink/10"
                  }`}
                >
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm">
                      <Check
                        className={`mt-0.5 size-3.5 shrink-0 ${
                          pkg.featured ? "text-gold" : "text-clay"
                        }`}
                        strokeWidth={1.5}
                      />
                      <span
                        className={
                          pkg.featured ? "text-paper/75" : "text-ink-soft"
                        }
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div
                  className={`mt-auto flex items-center justify-between gap-3 border-t pt-6 ${
                    pkg.featured ? "border-paper/15" : "border-ink/10"
                  }`}
                >
                  <span
                    className={`label text-[7px] ${
                      pkg.featured ? "text-paper/40" : "text-ink-soft"
                    }`}
                  >
                    2–3 week delivery
                  </span>
                  <Magnetic strength={5}>
                    <button
                      type="button"
                      onClick={goToContact}
                      className={`btn !px-4 !py-2.5 ${
                        pkg.featured ? "btn--ghost-light" : ""
                      }`}
                    >
                      Book this
                      <ArrowUpRight className="size-3" strokeWidth={1.5} />
                    </button>
                  </Magnetic>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-2 text-[10px] leading-relaxed text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>
            Travel and stay outside Mumbai billed at actuals. GST extra.
          </p>
          <button
            type="button"
            onClick={goToContact}
            className="label link-line w-fit text-[7px]"
          >
            Need a custom scope? Ask me
          </button>
        </div>
      </div>
    </section>
  );
}
