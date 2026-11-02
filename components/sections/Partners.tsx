import { ArrowUpRight, Play } from "lucide-react";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { partners, site, type Partner } from "@/lib/site";

const toneClasses: Record<Partner["tone"], string> = {
  ink: "bg-ink text-paper",
  clay: "bg-clay text-paper",
  sage: "bg-sage text-paper",
  teal: "bg-teal text-paper",
  outline: "border border-ink/25 text-ink",
  gold: "border border-gold/40 bg-gold/15 text-clay",
};

export function Partners() {
  return (
    <section id="partners" className="relative py-24 sm:py-32">
      <div className="container-x">
        <div className="grid gap-8 border-t border-ink/15 pt-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel index="07">Previous partnerships</SectionLabel>
            <h2 className="display-soft mt-4 text-[clamp(2.6rem,5.4vw,4.6rem)] leading-[0.98]">
              Brands I&apos;ve made
              <br />
              <em className="italic text-clay">content with.</em>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="body-copy max-w-sm">
              A few names from the last three years — beauty, beverage, dessert,
              cafés and stays. Every one got content built around their voice,
              not mine.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <div className="border-t border-ink/15">
              {partners.map((partner, index) => (
                <Reveal key={partner.name} delay={index * 0.04}>
                  <div className="group flex items-center gap-4 border-b border-ink/15 py-4 transition-colors duration-500 hover:bg-paper-2/40 sm:gap-5">
                    <span
                      className={`grid size-11 shrink-0 place-items-center rounded-full text-[11px] font-medium tracking-[0.04em] sm:size-12 ${
                        toneClasses[partner.tone]
                      }`}
                    >
                      {partner.monogram}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="display-soft text-[clamp(1.1rem,1.7vw,1.35rem)] leading-tight">
                        {partner.name}
                      </p>
                      <p className="label mt-1 text-[7px] text-ink-soft">
                        {partner.category}
                      </p>
                    </div>
                    <span className="label hidden text-[7px] text-ink-soft sm:block">
                      Collab
                    </span>
                    <ArrowUpRight
                      className="size-4 shrink-0 text-ink-soft transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      strokeWidth={1.3}
                    />
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.15}>
              <div className="mt-7 flex flex-wrap items-end justify-between gap-4">
                <p className="script text-2xl text-clay">
                  plus 20+ café, stay &amp; travel hosts
                </p>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="label link-line text-[8px]"
                >
                  See the tagged work
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="lg:sticky lg:top-28">
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group block"
                  data-cursor="Watch stay tour"
                >
                  <PhoneFrame>
                    <div className="relative aspect-[9/16] overflow-hidden">
                      <img
                        src="/images/partner-featured.webp"
                        alt="Featured stay tour collaboration"
                        loading="lazy"
                        className="grade h-full w-full object-cover transition-transform duration-[1100ms] group-hover:scale-[1.05]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/25" />
                      <span className="chip absolute left-3 top-7 border-paper/30 bg-ink/25 text-[7px] text-paper backdrop-blur">
                        Featured stay tour
                      </span>
                      <div className="absolute inset-0 grid place-items-center">
                        <span className="grid size-14 place-items-center rounded-full border border-paper/45 bg-paper/10 text-paper backdrop-blur-sm transition-all duration-500 group-hover:scale-105 group-hover:bg-paper group-hover:text-ink">
                          <Play className="ml-0.5 size-4 fill-current" />
                        </span>
                      </div>
                      <div className="absolute inset-x-4 bottom-4">
                        <p className="label text-[7px] text-paper/60">
                          Goa villa hosts
                        </p>
                        <p className="display-soft mt-1 text-xl text-paper">
                          The slow stay edit
                        </p>
                        <div className="mt-2 flex items-center justify-between border-t border-paper/20 pt-2">
                          <span className="label text-[7px] text-paper/55">
                            Stay tour
                          </span>
                          <span className="label text-[7px] text-paper/55">
                            24.6K views
                          </span>
                        </div>
                      </div>
                    </div>
                  </PhoneFrame>
                </a>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <p className="text-xs text-ink-soft">
                    Featured collaboration — Goa, 2026
                  </p>
                  <a
                    href={site.instagram}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="label link-line text-[7px]"
                  >
                    Watch
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
