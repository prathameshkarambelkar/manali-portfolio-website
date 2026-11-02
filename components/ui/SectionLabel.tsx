import type { ReactNode } from "react";

type SectionLabelProps = {
  index: string;
  children: ReactNode;
  light?: boolean;
  className?: string;
};

export function SectionLabel({
  index,
  children,
  light = false,
  className = "",
}: SectionLabelProps) {
  return (
    <div
      className={`flex items-center gap-4 ${
        light ? "text-paper/60" : "text-ink-soft"
      } ${className}`}
    >
      <span className="label">{index}</span>
      <span
        className={`h-px w-8 ${light ? "bg-paper/30" : "bg-ink/25"}`}
        aria-hidden="true"
      />
      <span className="label">{children}</span>
    </div>
  );
}
