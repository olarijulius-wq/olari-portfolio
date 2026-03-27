"use client";

import { motion, useScroll, useReducedMotion } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reduced = useReducedMotion();

  if (reduced) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-px origin-left pointer-events-none z-[60]"
      style={{
        scaleX: scrollYProgress,
        background: "rgba(255,255,255,0.5)",
      }}
      aria-hidden="true"
    />
  );
}
