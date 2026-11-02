"use client";

import { ArrowUpRight, Play } from "lucide-react";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import type { Video } from "@/lib/site";

type ReelCardProps = {
  video: Video;
  className?: string;
};

export function ReelCard({ video, className = "" }: ReelCardProps) {
  return (
    <a
      href={video.href}
      target="_blank"
      rel="noreferrer noopener"
      className={`group block ${className}`}
      data-cursor="Watch reel"
      aria-label={`Watch ${video.title} on Instagram`}
    >
      <PhoneFrame>
        <div className="relative aspect-[9/16] overflow-hidden">
          <img
            src={video.image}
            alt={`${video.title} — ${video.brand}`}
            loading="lazy"
            className="grade h-full w-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-ink/35" />

          <div className="absolute left-3 right-3 top-7 flex flex-wrap items-start justify-between gap-2">
            <span className="chip border-paper/25 bg-ink/30 text-[7px] text-paper backdrop-blur">
              {video.views} views
            </span>
            {video.top && (
              <span className="chip border-gold/40 bg-gold/20 text-[7px] text-gold">
                Top performer
              </span>
            )}
          </div>

          <div className="absolute inset-0 grid place-items-center">
            <span className="grid size-12 scale-90 place-items-center rounded-full border border-paper/45 bg-paper/10 text-paper opacity-80 backdrop-blur-sm transition-all duration-500 group-hover:scale-100 group-hover:bg-paper group-hover:text-ink group-hover:opacity-100">
              <Play className="ml-0.5 size-4 fill-current" strokeWidth={1} />
            </span>
          </div>

          <div className="absolute inset-x-3 bottom-3">
            <p className="label text-[7px] text-paper/60">{video.brand}</p>
            <div className="mt-1 flex items-end justify-between gap-2">
              <h3 className="display-soft text-base leading-[1.1] text-paper">
                {video.title}
              </h3>
              <ArrowUpRight
                className="mb-0.5 size-3.5 shrink-0 text-paper/50 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-paper"
                strokeWidth={1.4}
              />
            </div>
            <div className="mt-2 flex items-center justify-between border-t border-paper/20 pt-2">
              <span className="label text-[7px] text-paper/55">
                {video.type}
              </span>
              <span className="label text-[7px] text-paper/55">Reel</span>
            </div>
          </div>
        </div>
      </PhoneFrame>
    </a>
  );
}
