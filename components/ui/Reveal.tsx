"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  once?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  duration = 0.9,
  once = true,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-10% 0px -10% 0px" }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

type MaskLinesProps = {
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  play?: boolean;
};

export function MaskLines({
  lines,
  className,
  lineClassName,
  delay = 0,
  play,
}: MaskLinesProps) {
  const usesPlay = typeof play === "boolean";

  return (
    <span className={className}>
      {lines.map((line, index) => (
        <span
          key={index}
          className="block overflow-hidden pb-[0.06em] -mb-[0.06em]"
        >
          <motion.span
            className={`block ${lineClassName ?? ""}`}
            initial={{ y: "112%" }}
            {...(usesPlay
              ? { animate: play ? { y: 0 } : { y: "112%" } }
              : { whileInView: { y: 0 } })}
            viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
            transition={{
              duration: 1.05,
              delay: delay + index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
