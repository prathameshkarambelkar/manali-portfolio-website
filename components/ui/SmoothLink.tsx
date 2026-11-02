"use client";

import type { ReactNode } from "react";
import { useLenis } from "@/components/ui/SmoothScroll";

type SmoothLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
};

export function SmoothLink({ href, className, children }: SmoothLinkProps) {
  const lenis = useLenis();

  return (
    <a
      href={href}
      className={className}
      onClick={(event) => {
        event.preventDefault();
        const element = document.querySelector(href);
        if (!element) return;
        if (lenis) lenis.scrollTo(element as HTMLElement, { offset: -20 });
        else element.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {children}
    </a>
  );
}
