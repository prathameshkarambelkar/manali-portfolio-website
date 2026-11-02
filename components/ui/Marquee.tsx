import type { CSSProperties, ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  speed?: number;
  reverse?: boolean;
  className?: string;
};

export function Marquee({
  children,
  speed = 34,
  reverse = false,
  className = "",
}: MarqueeProps) {
  return (
    <div
      className={`marquee ${className}`}
      data-reverse={reverse ? "true" : "false"}
      style={{ "--marquee-duration": `${speed}s` } as CSSProperties}
    >
      <div className="marquee-track">
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
