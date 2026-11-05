"use client";

import { motion, useInView } from "motion/react";
import {
  CalendarDays,
  Eye,
  Play,
  UserPlus,
  Users,
} from "lucide-react";
import { useRef, type ComponentType } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { insights, site } from "@/lib/site";

type Metric = {
  label: string;
  value: string;
  note: string;
  Icon: ComponentType<{ className?: string; strokeWidth?: number }>;
};

const metrics: Metric[] = [
  {
    label: "Views",
    value: insights.views,
    note: "last 30 days",
    Icon: Eye,
  },
  {
    label: "Followers",
    value: insights.followers,
    note: "total community",
    Icon: Users,
  },
  {
    label: "Net followers",
    value: insights.netFollowers,
    note: "net growth",
    Icon: UserPlus,
  },
  {
    label: "Viewers",
    value: insights.viewers,
    note: "unique accounts",
    Icon: Eye,
  },
];

export function Insights() {
  const barsRef = useRef<HTMLDivElement>(null);
  const barsInView = useInView(barsRef, { once: true, margin: "-10% 0px" });

  return (
    <section
      id="insights"
      className="relative border-y border-ink/10 bg-paper-2/55 py-24 sm:py-28 lg:py-32"
    >
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel index="02">Insights</SectionLabel>
            <h2 className="display-soft mt-4 text-[clamp(2.7rem,5.6vw,4.8rem)] leading-[0.98]">
              The numbers,
              <br />
              <em className="italic text-clay">unfiltered.</em>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="body-copy max-w-sm">
              Straight from the Instagram dashboard — because a media kit should
              show the receipts, not just the highlight reel.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="chip text-[8px]">
                <CalendarDays className="size-3" />
                {insights.period}
              </span>
            </div>
          </div>
        </div>

        <Reveal delay={0.05}>
          <div className="mt-10 overflow-hidden border border-ink/15 bg-paper">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ink/10 px-5 py-4 sm:px-7">
              <div className="flex items-center gap-3">
                <span className="script grid size-11 place-items-center rounded-full bg-teal text-xl text-paper">
                  MJ
                </span>
                <div>
                  <p className="text-sm font-medium">{site.handle}</p>
                  <p className="label text-[7px] text-ink-soft">
                    Professional dashboard
                  </p>
                </div>
              </div>
              <span className="chip border-teal/30 bg-teal/10 text-[7px] text-teal">
                Instagram Insights
              </span>
            </div>

            <div className="px-5 py-6 sm:px-7">
              <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-4">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="border border-ink/10 bg-paper-2/20 p-4"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <p className="label text-[7px] text-ink-soft">
                        {metric.label}
                      </p>
                      <metric.Icon
                        className="size-3.5 text-clay/70"
                        strokeWidth={1.4}
                      />
                    </div>
                    <p className="display mt-4 text-[clamp(1.7rem,2.4vw,2.2rem)] leading-none">
                      {metric.value}
                    </p>
                    <p className="label mt-2 text-[7px] text-ink-soft/80">
                      {metric.note}
                    </p>
                  </div>
                ))}
              </div>

              <div
                ref={barsRef}
                className="mt-8 grid gap-8 border-t border-ink/10 pt-7 lg:grid-cols-12 lg:gap-10"
              >
                <div className="lg:col-span-6">
                  <div className="flex items-baseline justify-between">
                    <h3 className="label text-[9px]">Age range</h3>
                    <span className="label text-[7px] text-ink-soft">
                      % of audience
                    </span>
                  </div>
                  <div className="mt-5 space-y-3.5">
                    {insights.age.map((row, index) => (
                      <div
                        key={row.label}
                        className="grid grid-cols-[3.1rem_1fr_2.1rem] items-center gap-2.5"
                      >
                        <span className="label text-[8px] text-ink-soft">
                          {row.label}
                        </span>
                        <div className="h-1.5 w-full overflow-hidden bg-ink/10">
                          <motion.div
                            className="h-full origin-left bg-clay"
                            style={{ width: `${row.value}%` }}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: barsInView ? 1 : 0 }}
                            transition={{
                              duration: 1,
                              delay: index * 0.07,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                          />
                        </div>
                        <span className="text-right text-[10px] tabular-nums text-ink-soft">
                          {row.value.toFixed(1)}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="flex items-baseline justify-between">
                    <h3 className="label text-[9px]">Top cities</h3>
                    <span className="label text-[6px] text-ink-soft sm:text-[7px]">
                      India {insights.indiaShare}
                    </span>
                  </div>
                  <div className="mt-5 space-y-3.5">
                    {insights.locations.map((row, index) => (
                      <div
                        key={row.label}
                        className="grid grid-cols-[5rem_1fr_2.1rem] items-center gap-2.5"
                      >
                        <span className="text-[11px] text-ink-soft">
                          {row.label}
                        </span>
                        <div className="h-1.5 w-full overflow-hidden bg-ink/10">
                          <motion.div
                            className="h-full origin-left bg-teal"
                            style={{ width: `${row.value}%` }}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: barsInView ? 1 : 0 }}
                            transition={{
                              duration: 1,
                              delay: index * 0.07,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                          />
                        </div>
                        <span className="text-right text-[10px] tabular-nums text-ink-soft">
                          {row.value.toFixed(1)}%
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-ink/10 pt-5">
                    <div className="flex items-baseline justify-between">
                      <h3 className="label text-[9px]">Top languages</h3>
                      <span className="label text-[7px] text-ink-soft">
                        % of audience
                      </span>
                    </div>
                    <div className="mt-4 space-y-3">
                      {insights.languages.map((row, index) => (
                        <div
                          key={row.label}
                          className="grid grid-cols-[4.5rem_1fr_2.1rem] items-center gap-2.5"
                        >
                          <span className="text-[11px] text-ink-soft">
                            {row.label}
                          </span>
                          <div className="h-1.5 w-full overflow-hidden bg-ink/10">
                            <motion.div
                              className="h-full origin-left bg-gold"
                              style={{ width: `${row.value}%` }}
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: barsInView ? 1 : 0 }}
                              transition={{
                                duration: 1,
                                delay: (index + 5) * 0.07,
                                ease: [0.16, 1, 0.3, 1],
                              }}
                            />
                          </div>
                          <span className="text-right text-[10px] tabular-nums text-ink-soft">
                            {row.value.toFixed(1)}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>


              </div>
            </div>

            <div className="border-t border-ink/10 p-5 sm:p-7">
              <div className="border border-ink/10 bg-paper-2/25 p-6 sm:p-7">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="label text-[8px] text-ink-soft">Reel share</p>
                      <Play
                        className="size-3.5 text-teal/60"
                        strokeWidth={1.4}
                      />
                    </div>
                    <p className="display mt-3 text-[clamp(2.2rem,4vw,3.2rem)] leading-none">
                      {insights.reelShare}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      of all views came from reels this month.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-8 border-t border-ink/10 pt-4 sm:min-w-[220px] sm:border-t-0 sm:pt-0">
                    {insights.viewsByType.map((row) => (
                      <div key={row.label}>
                        <p className="display text-2xl leading-none">
                          {row.value}
                        </p>
                        <p className="label mt-1 text-[7px] text-ink-soft">
                          {row.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
