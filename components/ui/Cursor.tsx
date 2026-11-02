"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState("");

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const dotX = useSpring(x, { stiffness: 1100, damping: 55, mass: 0.2 });
  const dotY = useSpring(y, { stiffness: 1100, damping: 55, mass: 0.2 });
  const ringX = useSpring(x, { stiffness: 260, damping: 26, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 260, damping: 26, mass: 0.5 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const onMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    const onOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const interactive = target?.closest("a, button, [data-cursor]");
      if (interactive) {
        setHovering(true);
        setLabel(interactive.getAttribute("data-cursor") ?? "");
      } else {
        setHovering(false);
        setLabel("");
      }
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("mouseover", onOver);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[127] hidden md:block"
    >
      <motion.div
        className="absolute -ml-[3px] -mt-[3px] size-1.5 rounded-full bg-paper mix-blend-difference"
        style={{ x: dotX, y: dotY }}
      />
      <motion.div
        className="absolute -ml-5 -mt-5 flex size-10 items-center justify-center rounded-full border border-paper/80 mix-blend-difference"
        style={{ x: ringX, y: ringY }}
        animate={{ scale: hovering ? 1.5 : 1, opacity: hovering ? 0.9 : 0.45 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.span
        className="label absolute mt-4 ml-3 whitespace-nowrap text-[8px] text-paper mix-blend-difference"
        style={{ x: dotX, y: dotY }}
        animate={{ opacity: label ? 1 : 0 }}
        transition={{ duration: 0.25 }}
      >
        {label}
      </motion.span>
    </div>
  );
}
