import { ArcCarousel } from "@/components/ui/ArcCarousel";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SmoothLink } from "@/components/ui/SmoothLink";
import { moreBrandWork, videos } from "@/lib/site";

export function Videos() {
  return (
    <section
      id="videos"
      className="relative overflow-hidden border-t border-ink/10 bg-paper py-24 sm:py-32"
    >
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <SectionLabel index="04">Best videos</SectionLabel>
            <h2 className="display-soft mt-4 text-[clamp(2.8rem,5.8vw,5rem)] leading-[0.98]">
              The ones that
              <br />
              <em className="italic text-clay">landed.</em>
            </h2>
          </div>
          <div className="max-w-xs sm:pb-1">
            <p className="text-sm leading-relaxed text-ink-soft">
              Top performers and recent brand work across travel, beauty and
              wellness.
            </p>
            <p className="label mt-4 text-[8px] text-ink-soft">
              Scroll to flow · drag the arc · tap to watch
            </p>
          </div>
        </div>

        <Reveal delay={0.05}>
          <div className="mt-12">
            <ArcCarousel videos={videos} />
          </div>
        </Reveal>

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
            <SmoothLink
              href="#contact"
              className="label link-line w-fit text-[8px]"
            >
              Request the full archive
            </SmoothLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
