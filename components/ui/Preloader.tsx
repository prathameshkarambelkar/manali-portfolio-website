"use client";

import { useEffect, useRef, useState } from "react";

type PreloaderProps = {
  skip: boolean;
  onDone: () => void;
};

export function Preloader({ skip, onDone }: PreloaderProps) {
  const [count, setCount] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const startedRef = useRef(false);
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useEffect(() => {
    if (skip || startedRef.current) return;
    startedRef.current = true;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onDoneRef.current();
      return;
    }

    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    window.scrollTo(0, 0);

    let raf = 0;
    const start = performance.now();
    const duration = 1300;

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * 100));

      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        window.setTimeout(() => setLeaving(true), 150);
        window.setTimeout(() => onDoneRef.current(), 350);
        window.setTimeout(() => {
          document.documentElement.style.overflow = previousOverflow;
          try {
            sessionStorage.setItem("mj-intro", "1");
          } catch {
            /* private mode — the intro will simply play again */
          }
        }, 1150);
      }
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      document.documentElement.style.overflow = previousOverflow;
    };
  }, [skip]);

  if (skip) return null;

  return (
    <div
      className="fixed inset-0 z-[130] flex flex-col justify-between overflow-hidden bg-paper px-5 py-6 text-ink sm:px-8 sm:py-8"
      style={{
        clipPath: leaving ? "inset(0 0 100% 0)" : "inset(0 0 0% 0)",
        transition: "clip-path 950ms cubic-bezier(0.76, 0, 0.24, 1)",
      }}
      aria-hidden={leaving}
    >
      <div className="flex items-start justify-between">
        <p className="label">Manali Jagtap</p>
        <p className="label text-right text-ink-soft">
          Portfolio
          <br />
          2026
        </p>
      </div>

      <div className="relative">
        <h1 className="display pre-reveal text-[clamp(3.8rem,15vw,13rem)] leading-[0.8]">
          Manali
        </h1>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
          <p className="script text-[clamp(2rem,5vw,4.5rem)] text-wine">
            the travel edit
          </p>
          <p className="mb-2 hidden max-w-[15rem] text-right text-sm leading-relaxed text-ink-soft sm:block">
            A little patience,
            <br />a lot of wander.
          </p>
        </div>
      </div>

      <div className="flex items-end justify-between gap-6">
        <div className="flex-1">
          <div className="mb-3 flex items-center justify-between">
            <span className="label text-ink-soft">
              Travel · Lifestyle · UGC
            </span>
            <span className="label text-ink-soft">Mumbai, IN</span>
          </div>
          <div className="h-px w-full bg-line">
            <div
              className="h-px bg-wine transition-[width] duration-150 ease-out"
              style={{ width: `${count}%` }}
            />
          </div>
        </div>
        <p className="display min-w-[3.2ch] text-right text-[clamp(2.5rem,7vw,6rem)] leading-none">
          {String(count).padStart(2, "0")}
          <span className="text-[0.28em] align-top text-ink-soft">%</span>
        </p>
      </div>
    </div>
  );
}
