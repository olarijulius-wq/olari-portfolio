"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

export default function CursorGlow() {
  const reduced = useReducedMotion();

  const rawX = useMotionValue(-300);
  const rawY = useMotionValue(-300);

  // Spring lag — lower stiffness = more delay
  const x = useSpring(rawX, { stiffness: 120, damping: 28, mass: 0.5 });
  const y = useSpring(rawY, { stiffness: 120, damping: 28, mass: 0.5 });

  useEffect(() => {
    if (reduced) return;

    // Only on devices with a real pointer (not touch-only)
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mq.matches) return;

    const move = (e: MouseEvent) => {
      rawX.set(e.clientX - 150);
      rawY.set(e.clientY - 150);
    };

    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [reduced, rawX, rawY]);

  if (reduced) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none z-30"
      style={{
        x,
        y,
        background:
          "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
      }}
      aria-hidden="true"
    />
  );
}
