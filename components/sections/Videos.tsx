import { ArrowUpRight } from "lucide-react";
import { ReelCard } from "@/components/ui/ReelCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { moreBrandWork, site, videos } from "@/lib/site";

export function Videos() {
  return (
    <section
      id="videos"
      className="relative border-t border-ink/10 bg-paper py-24 sm:py-32"
    >
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <SectionLabel index="05">Best videos</SectionLabel>
            <h2 className="display-soft mt-4 text-[clamp(2.8rem,5.8vw,5rem)] leading-[0.98]">
              The ones that
              <br />
              <em className="italic text-clay">travelled.</em>
            </h2>
          </div>
          <div className="max-w-xs sm:pb-1">
            <p className="text-sm leading-relaxed text-ink-soft">
              Top performers and recent brand work — from 793K-view travel
              films to a gummy ritual, a foundation reel and a South Goa villa.
            </p>
            <p className="label mt-4 text-[8px] text-ink-soft">
              Tap a card to watch on Instagram
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {videos.map((video, index) => (
            <Reveal key={video.title} delay={(index % 4) * 0.05}>
              <ReelCard video={video} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col gap-5 border-t border-ink/15 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <span className="label text-[8px] text-ink-soft">
                Also in the works
              </span>
              {moreBrandWork.map((work) => (
                <span
                  key={work.brand}
                  className="flex items-baseline gap-1.5 text-xs"
                >
                  <span className="text-ink">{work.brand}</span>
                  <span className="text-[10px] text-ink-soft">
                    {work.views}
                  </span>
                </span>
              ))}
            </div>
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer noopener"
              className="group flex w-fit items-center gap-2"
            >
              <span className="label link-line text-[8px]">
                See every reel on Instagram
              </span>
              <ArrowUpRight
                className="size-3.5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={1.4}
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
