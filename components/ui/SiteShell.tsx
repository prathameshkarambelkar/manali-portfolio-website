"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Cursor } from "@/components/ui/Cursor";
import { Grain } from "@/components/ui/Grain";
import { IntroContext } from "@/components/ui/IntroContext";
import { Nav } from "@/components/ui/Nav";
import { Preloader } from "@/components/ui/Preloader";
import { ReelPlayerProvider } from "@/components/ui/ReelPlayerProvider";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { SmoothScroll } from "@/components/ui/SmoothScroll";

export function SiteShell({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [skipIntro, setSkipIntro] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let seen: string | null = null;
    try {
      seen = sessionStorage.getItem("mj-intro");
    } catch {
      seen = null;
    }
    const skipParam = new URLSearchParams(window.location.search).has(
      "nopreload",
    );

    if (reduced || seen || skipParam) {
      setSkipIntro(true);
      setReady(true);
    }
  }, []);

  return (
    <IntroContext.Provider value={{ ready }}>
      <SmoothScroll>
        <ReelPlayerProvider>
        <a
          href="#main"
          className="sr-only z-[140] rounded-full bg-ink px-5 py-3 text-sm text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Preloader skip={skipIntro} onDone={() => setReady(true)} />
        <Cursor />
        <Grain />
        <ScrollProgress />
        <Nav />
        {children}
        </ReelPlayerProvider>
      </SmoothScroll>
    </IntroContext.Provider>
  );
}
