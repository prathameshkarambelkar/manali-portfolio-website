"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReelCard } from "@/components/ui/ReelCard";
import { useLenis } from "@/components/ui/SmoothScroll";
import type { Video } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger);

const STEP_DEG = 15;
const RADIUS_FACTOR = 4;
const CARD_MIN = 150;
const CARD_MAX = 270;

export function ArcCarousel({ videos }: { videos: Video[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const fanRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();
  const drag = useRef({
    startX: 0,
    startY: 0,
    startPosition: 0,
    moved: false,
    pointerId: 0,
  });
  const suppressClick = useRef(false);
  const [cardWidth, setCardWidth] = useState(230);
  const [position, setPosition] = useState(
    Math.max(0, Math.floor((videos.length - 1) / 2)),
  );
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const measure = () => {
      const width = containerRef.current?.clientWidth ?? 0;
      setCardWidth(
        Math.max(CARD_MIN, Math.min(CARD_MAX, width * 0.22)),
      );
    };

    measure();
    const observer = new ResizeObserver(measure);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const fan = fanRef.current;
    if (!fan) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        fan,
        { xPercent: -10 },
        {
          xPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: fan,
            start: "top 88%",
            end: "bottom 12%",
            scrub: 1,
          },
        },
      );
    }, fan);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!lenis) return;
    const update = () => ScrollTrigger.update();
    lenis.on("scroll", update);
    return () => lenis.off("scroll", update);
  }, [lenis]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(frame);
  }, [cardWidth]);

  const maxIndex = videos.length - 1;
  const activeIndex = Math.round(position);
  const cardHeight = (cardWidth * 16) / 9;
  const radius = cardWidth * RADIUS_FACTOR;
  const stepRad = (STEP_DEG * Math.PI) / 180;
  const maxY = radius * (1 - Math.cos(stepRad * 2));

  const clamp = (value: number) => Math.min(maxIndex, Math.max(0, value));

  const goTo = (value: number) => {
    if (dragging) return;
    setPosition(clamp(value));
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    drag.current = {
      startX: event.clientX,
      startY: event.clientY,
      startPosition: position,
      moved: false,
      pointerId: event.pointerId,
    };
    setDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragging) return;

    const dx = event.clientX - drag.current.startX;
    const dy = event.clientY - drag.current.startY;

    if (!drag.current.moved) {
      if (Math.abs(dx) < 7 || Math.abs(dx) < Math.abs(dy)) return;
      drag.current.moved = true;
    }

    event.preventDefault();
    const stepPx = cardWidth * 1.05;
    setPosition(clamp(drag.current.startPosition - dx / stepPx));
  };

  const endDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    const moved = drag.current.moved;

    setDragging(false);
    setPosition((current) => clamp(Math.round(current)));
    suppressClick.current = moved;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    if (moved) {
      window.setTimeout(() => {
        suppressClick.current = false;
      }, 120);
    }
  };

  return (
    <div className="relative">
      <div ref={fanRef} className="will-change-transform">
        <div
          ref={containerRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Best reels"
        tabIndex={0}
        className="relative w-full cursor-grab select-none overflow-hidden outline-none active:cursor-grabbing focus-visible:ring-1 focus-visible:ring-ink/20"
        style={{
          height: cardHeight + maxY + 64,
          touchAction: "pan-y",
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={(event) => {
          if (suppressClick.current) {
            event.preventDefault();
            event.stopPropagation();
          }
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            goTo(activeIndex - 1);
          }
          if (event.key === "ArrowRight") {
            event.preventDefault();
            goTo(activeIndex + 1);
          }
        }}
      >
        {videos.map((video, index) => {
          const delta = index - position;
          const angle = delta * stepRad;
          const x = radius * Math.sin(angle);
          const y = radius * (1 - Math.cos(angle));
          const rotate = (angle * 180) / Math.PI;
          const isHidden = Math.abs(delta) > 2.35;

          return (
            <div
              key={video.title}
              className="absolute top-0"
              style={{
                left: "50%",
                marginLeft: -cardWidth / 2,
                width: cardWidth,
                zIndex: 20 - Math.round(Math.abs(delta) * 2),
                opacity: isHidden ? 0 : 1,
                pointerEvents: isHidden ? "none" : "auto",
                transform: `translate3d(${x}px, ${y}px, 0) rotate(${rotate}deg)`,
                transformOrigin: "center center",
                transition: dragging
                  ? "none"
                  : "transform 720ms cubic-bezier(0.16, 1, 0.3, 1), opacity 320ms ease",
                willChange: "transform",
              }}
            >
              <ReelCard video={video} />
            </div>
          );
        })}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-ink/10 pt-4">
        <p className="label text-[8px] text-ink-soft">
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(videos.length).padStart(2, "0")}
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => goTo(activeIndex - 1)}
            disabled={activeIndex === 0}
            className="grid size-8 place-items-center rounded-full border border-ink/20 text-ink transition-colors hover:bg-ink hover:text-paper disabled:pointer-events-none disabled:opacity-30"
            aria-label="Previous reel"
          >
            <ChevronLeft className="size-3.5" strokeWidth={1.4} />
          </button>
          <button
            type="button"
            onClick={() => goTo(activeIndex + 1)}
            disabled={activeIndex === maxIndex}
            className="grid size-8 place-items-center rounded-full border border-ink/20 text-ink transition-colors hover:bg-ink hover:text-paper disabled:pointer-events-none disabled:opacity-30"
            aria-label="Next reel"
          >
            <ChevronRight className="size-3.5" strokeWidth={1.4} />
          </button>
        </div>
      </div>
    </div>
  );
}
