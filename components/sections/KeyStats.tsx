import { Eye, Play, TrendingUp, Users } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { insights, keyStats } from "@/lib/site";

const icons = [Eye, Play, Users, TrendingUp];

export function KeyStats() {
  return (
    <section id="stats" className="relative overflow-hidden border-y border-ink/10 bg-paper-2/60 py-24 sm:py-28">
      <span
        aria-hidden="true"
        className="script pointer-events-none absolute -right-4 top-8 select-none text-[14rem] leading-none text-ink/[0.035] sm:text-[20rem]"
      >
        numbers
      </span>

      <div className="container-x relative">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <SectionLabel index="06">Key stats</SectionLabel>
            <h2 className="display-soft mt-4 text-[clamp(2.4rem,4.6vw,3.8rem)] leading-[1]">
              The short version.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-ink-soft">
            Four numbers worth keeping in the pitch deck. The rest is in the
            dashboard above.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {keyStats.map((stat, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Reveal key={stat.label} delay={index * 0.07}>
                <div className="flex flex-col items-center text-center">
                  <div className="relative grid aspect-square w-[86%] max-w-[240px] place-items-center rounded-full border border-ink/25 bg-paper/40">
                    <div className="absolute inset-3 rounded-full border border-dashed border-ink/15" />
                    <div className="relative px-4">
                      <Icon
                        className="mx-auto size-4 text-clay"
                        strokeWidth={1.3}
                      />
                      <p className="display mt-3 text-[clamp(2rem,4vw,3rem)] leading-none">
                        {stat.value}
                      </p>
                      <p className="label mt-3 text-[7px] text-ink-soft">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 max-w-[12rem] text-xs text-ink-soft">
                    {stat.note}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-ink/15 pt-4 text-[10px] text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>
            Views, followers and posts from Instagram Insights ·{" "}
            {insights.asOf}
          </p>
          <p className="label text-[7px]">
            Engagement rate is an approximate average
          </p>
        </div>
      </div>
    </section>
  );
}
