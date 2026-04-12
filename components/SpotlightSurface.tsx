"use client";

import { useReducedMotion } from "framer-motion";
import {
  useRef,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from "react";

type SpotlightSurfaceProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  /** Radial gradient circle radius in px */
  glowRadius?: number;
  /** Peak opacity of the glow (0–1) */
  glowStrength?: number;
};

/**
 * Cursor-following spotlight (Magic MCP / 21st-style dark card pattern).
 * Glow is disabled when the user prefers reduced motion.
 */
export default function SpotlightSurface({
  children,
  className = "",
  glowRadius = 520,
  glowStrength = 0.11,
  ...rest
}: SpotlightSurfaceProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current || reduceMotion) return;
    const r = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => {
        if (!reduceMotion) setActive(true);
      }}
      onMouseLeave={() => setActive(false)}
      className={`relative overflow-hidden ${className}`}
      {...rest}
    >
      {!reduceMotion && (
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
          style={{
            opacity: active ? 1 : 0,
            background: `radial-gradient(${glowRadius}px circle at ${pos.x}px ${pos.y}px, rgba(255,255,255,${glowStrength}), transparent 42%)`,
          }}
          aria-hidden
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
