import type { ReactNode } from "react";

type PhoneFrameProps = {
  children: ReactNode;
  className?: string;
};

export function PhoneFrame({ children, className = "" }: PhoneFrameProps) {
  return (
    <div
      className={`relative rounded-[2rem] bg-ink p-[5px] shadow-[0_30px_60px_-38px_rgba(23,19,16,0.65)] ${className}`}
    >
      <div className="relative overflow-hidden rounded-[1.65rem] bg-paper-2">
        {children}
      </div>
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-[9px] z-20 h-[13px] w-[34%] -translate-x-1/2 rounded-b-[10px] bg-ink"
      />
    </div>
  );
}
