import { ArrowUpRight, Play } from "lucide-react";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SmoothLink } from "@/components/ui/SmoothLink";
import { partners, site } from "@/lib/site";

export function Partners() {
  const featured = partners.find((partner) => partner.name === "Casa Regal");
  const featuredHref = featured?.collab ?? featured?.href ?? site.instagram;

  return (
    <section id="partners" className="relative py-24 sm:py-32">
      <div className="container-x">
        <div className="grid gap-8 border-t border-ink/15 pt-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel index="07">Previous partnerships</SectionLabel>
            <h2 className="display-soft mt-4 text-[clamp(2.6rem,5.4vw,4.6rem)] leading-[0.98]">
              Brands I&apos;ve
              <br />
              <em className="italic text-clay">collaborated with.</em>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="body-copy max-w-sm">
              Three live collaborations and one in progress — wellness, beauty
              and a South Goa stay. Every one got content built around their
              voice, not mine.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <div className="border-t border-ink/15">
              {partners.map((partner, index) => (
                <Reveal key={partner.name} delay={index * 0.04}>
                  <a
                    href={partner.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group flex items-center gap-4 border-b border-ink/15 py-4 transition-colors duration-500 hover:bg-paper-2/40 sm:gap-5"
                    data-cursor="Open brand"
                    aria-label={`Open ${partner.name}`}
                  >
                    <span
                      className={`relative grid size-12 shrink-0 place-items-center overflow-hidden rounded-xl border border-ink/10 sm:size-14 ${
                        partner.tone === "ink" ? "bg-ink p-1.5" : "bg-paper"
                      }`}
                    >
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        loading="lazy"
                        className={`h-full w-full ${
                          partner.tone === "ink"
                            ? "object-contain"
                            : "object-cover"
                        }`}
                      />
                    </span>

                    <div className="min-w-0 flex-1">
                      <p className="display-soft text-[clamp(1.1rem,1.7vw,1.35rem)] leading-tight">
                        {partner.name}
                      </p>
                      <p className="label mt-1 text-[7px] text-ink-soft">
                        {partner.category}
                      </p>
                      <p className="label mt-1 text-[7px] text-ink-soft sm:hidden">
                        {partner.status}
                      </p>
                    </div>

                    <span
                      className={`chip hidden shrink-0 text-[7px] sm:inline-flex ${
                        partner.status === "Collab live"
                          ? "border-teal/30 bg-teal/10 text-teal"
                          : "border-gold/40 bg-gold/10 text-clay"
                      }`}
                    >
                      {partner.status}
                    </span>

                    <ArrowUpRight
                      className="size-4 shrink-0 text-ink-soft transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      strokeWidth={1.3}
                    />
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.15}>
              <div className="mt-7 flex flex-wrap items-end justify-between gap-4">
                <p className="script text-2xl text-clay">
                  more collabs in the works
                </p>
                <SmoothLink
                  href="#contact"
                  className="label link-line text-[8px]"
                >
                  Work with me
                </SmoothLink>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="lg:sticky lg:top-28">
                <a
                  href={featuredHref}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group block"
                  data-cursor="Watch stay tour"
                >
                  <PhoneFrame>
                    <div className="relative aspect-[9/16] overflow-hidden">
                      <img
                        src="/images/partner-featured.webp"
                        alt="Casa Regal villa collaboration"
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
                        <div className="flex items-center gap-2">
                          <img
                            src="/images/brands/casa-regal.webp"
                            alt=""
                            aria-hidden="true"
                            className="size-5 rounded-[4px] object-cover"
                          />
                          <p className="label text-[7px] text-paper/60">
                            Casa Regal · South Goa
                          </p>
                        </div>
                        <p className="display-soft mt-2 text-xl text-paper">
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
                    Featured collaboration — Casa Regal, 2026
                  </p>
                  <a
                    href={featuredHref}
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
