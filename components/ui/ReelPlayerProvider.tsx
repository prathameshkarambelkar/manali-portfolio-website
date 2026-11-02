"use client";

import { AnimatePresence, motion } from "motion/react";
import { Play, X } from "lucide-react";
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useLenis } from "@/components/ui/SmoothScroll";

export type PlayableReel = {
  title: string;
  brand: string;
  image: string;
  views?: string;
  duration?: string;
  type?: string;
  video?: string;
  webm?: string;
  startAt?: number;
};

type ReelPlayerContextValue = {
  openReel: (reel: PlayableReel) => void;
};

const ReelPlayerContext = createContext<ReelPlayerContextValue | null>(null);

export function useReelPlayer() {
  const context = useContext(ReelPlayerContext);
  if (!context) {
    throw new Error("useReelPlayer must be used inside ReelPlayerProvider");
  }
  return context;
}

export function ReelPlayerProvider({ children }: { children: ReactNode }) {
  const [reel, setReel] = useState<PlayableReel | null>(null);
  const lenis = useLenis();

  useEffect(() => {
    if (!reel) return;

    lenis?.stop();
    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setReel(null);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.documentElement.style.overflow = previousOverflow;
      lenis?.start();
      window.removeEventListener("keydown", onKey);
    };
  }, [reel, lenis]);

  const requestFullReel = () => {
    setReel(null);
    window.setTimeout(() => {
      const element = document.querySelector("#contact");
      if (!element) return;
      if (lenis) lenis.scrollTo(element as HTMLElement, { offset: -20 });
      else element.scrollIntoView({ behavior: "smooth" });
    }, 450);
  };

  return (
    <ReelPlayerContext.Provider value={{ openReel: setReel }}>
      {children}
      <AnimatePresence>
        {reel && (
          <ReelModal
            key={`${reel.title}-${reel.video ?? "preview"}`}
            reel={reel}
            onClose={() => setReel(null)}
            onRequest={requestFullReel}
          />
        )}
      </AnimatePresence>
    </ReelPlayerContext.Provider>
  );
}

function ReelModal({
  reel,
  onClose,
  onRequest,
}: {
  reel: PlayableReel;
  onClose: () => void;
  onRequest: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMetadata = () => {
    const video = videoRef.current;
    if (!video) return;
    if (reel.startAt && reel.startAt > 0) {
      video.currentTime = reel.startAt;
    }
    video.play().catch(() => {
      /* Autoplay may be blocked — the native controls still work. */
    });
  };

  return (
    <motion.div
      className="fixed inset-0 z-[118] flex flex-col bg-ink/95 text-paper backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      role="dialog"
      aria-modal="true"
      aria-label={`${reel.brand} — ${reel.title}`}
    >
      <div className="flex shrink-0 items-center justify-between gap-4 border-b border-paper/15 px-5 py-4 sm:px-8">
        <div className="min-w-0">
          <p className="label text-[7px] text-paper/40">{reel.brand}</p>
          <h3 className="display-soft truncate text-lg sm:text-xl">
            {reel.title}
          </h3>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="group flex shrink-0 items-center gap-2"
          aria-label="Close reel"
        >
          <span className="label text-[8px]">Close</span>
          <span className="grid size-9 place-items-center rounded-full border border-paper/20 transition-colors duration-300 group-hover:bg-paper group-hover:text-ink">
            <X className="size-4" strokeWidth={1.5} />
          </span>
        </button>
      </div>

      <div className="flex flex-1 items-center justify-center overflow-y-auto p-4 sm:p-8">
        <div className="w-full max-w-[420px]">
          <div className="overflow-hidden rounded-[2rem] border border-paper/15 bg-black shadow-[0_40px_90px_-40px_rgba(0,0,0,0.8)]">
            {reel.video ? (
              <video
                ref={videoRef}
                poster={reel.image}
                controls
                autoPlay
                playsInline
                preload="metadata"
                onLoadedMetadata={handleMetadata}
                className="aspect-[9/16] max-h-[calc(100dvh-9rem)] w-full bg-black object-contain"
              >
                <source src={reel.video} type="video/mp4" />
                {reel.webm && <source src={reel.webm} type="video/webm" />}
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="relative aspect-[9/16] max-h-[calc(100dvh-9rem)] overflow-hidden">
                <img
                  src={reel.image}
                  alt={reel.title}
                  className="h-full w-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-ink/55" />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-7 text-center">
                  <span className="grid size-14 place-items-center rounded-full border border-paper/35 bg-paper/10 backdrop-blur-sm">
                    <Play className="ml-0.5 size-4 fill-current" />
                  </span>
                  <p className="script mt-6 text-3xl text-gold">
                    full film on request
                  </p>
                  <p className="mt-2 max-w-[15rem] text-sm leading-relaxed text-paper/65">
                    This film is part of the private media kit. Ask for the link
                    and I&apos;ll send it over.
                  </p>
                  <button
                    type="button"
                    onClick={onRequest}
                    className="btn btn--ghost-light mt-6"
                  >
                    Request the full film
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="mt-4 flex items-center justify-between gap-4">
            <div>
              <p className="label text-[7px] text-paper/40">
                {reel.type ?? "Reel"}
              </p>
              <p className="mt-1 text-sm text-paper/65">
                {reel.views
                  ? `${reel.views} views`
                  : reel.duration ?? "Brand collaboration"}
              </p>
            </div>
            <p className="label text-[7px] text-paper/35">
              {reel.video ? "Playing on-site" : "Private link"}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
