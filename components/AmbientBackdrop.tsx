"use client";

import { useEffect, useRef } from "react";

/**
 * Interactive ambient field — inspired by 21st.dev patterns from Magic MCP
 * (“Background Gradient Animation” pointer lerp + stacked soft radials).
 * Pointer + scroll drive gradient focal points; no elongated “stick” ellipses.
 */
export default function AmbientBackdrop() {
  const rootRef = useRef<HTMLDivElement>(null);
  const reduceRef = useRef(false);
  const smoothRef = useRef({ x: 0.5, y: 0.32 });
  const targetRef = useRef({ x: 0.5, y: 0.32 });
  const scrollRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    reduceRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const applyStatic = () => {
      root.style.setProperty("--mx", "50");
      root.style.setProperty("--my", "32");
      root.style.setProperty("--parx", "50");
      root.style.setProperty("--pary", "68");
      root.style.setProperty("--tx", "58");
      root.style.setProperty("--ty", "44");
      root.style.setProperty("--scroll-y", "0px");
    };

    if (reduceRef.current) {
      applyStatic();
      return;
    }

    const sync = () => {
      const s = smoothRef.current;
      const t = targetRef.current;
      const lerp = 0.075;
      s.x += (t.x - s.x) * lerp;
      s.y += (t.y - s.y) * lerp;

      const mx = s.x * 100;
      const my = s.y * 100;
      const parx = (1 - s.x) * 100;
      const pary = (1 - s.y) * 100 * 0.85 + 8;
      const tx = Math.min(94, Math.max(6, mx + 7));
      const ty = Math.min(92, Math.max(8, my + 9));

      root.style.setProperty("--mx", mx.toFixed(2));
      root.style.setProperty("--my", my.toFixed(2));
      root.style.setProperty("--parx", parx.toFixed(2));
      root.style.setProperty("--pary", pary.toFixed(2));
      root.style.setProperty("--tx", tx.toFixed(2));
      root.style.setProperty("--ty", ty.toFixed(2));
      root.style.setProperty("--scroll-y", `${scrollRef.current * 0.04}px`);
    };

    const loop = () => {
      sync();
      rafRef.current = requestAnimationFrame(loop);
    };

    const onPointerMove = (e: PointerEvent) => {
      const w = Math.max(window.innerWidth, 1);
      const h = Math.max(window.innerHeight, 1);
      targetRef.current = {
        x: e.clientX / w,
        y: e.clientY / h,
      };
    };

    const onPointerLeave = () => {
      targetRef.current = { x: 0.5, y: 0.32 };
    };

    const onScroll = () => {
      scrollRef.current = window.scrollY;
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onPointerLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    applyStatic();
    onScroll();
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerMove);
      document.documentElement.removeEventListener("mouseleave", onPointerLeave);
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="ambient-backdrop fixed inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden
    >
      <div className="ambient-backdrop__base absolute inset-0 bg-[#030303]" />

      <div
        className="ambient-backdrop__mesh absolute inset-0 opacity-100 will-change-[transform]"
        style={{
          transform: "translate3d(0, var(--scroll-y, 0px), 0)",
        }}
      >
        <div
          className="absolute -inset-[20%] opacity-[0.95] motion-reduce:opacity-100 ambient-breathe"
          style={{
            background: `
              radial-gradient(ellipse 85% 70% at calc(var(--mx, 50) * 1%) calc(var(--my, 32) * 1%),
                rgba(139, 92, 246, 0.16) 0%,
                rgba(99, 102, 241, 0.06) 38%,
                transparent 62%),
              radial-gradient(ellipse 75% 65% at calc(var(--parx, 50) * 1%) calc(var(--pary, 68) * 1%),
                rgba(34, 211, 238, 0.11) 0%,
                rgba(6, 182, 212, 0.04) 42%,
                transparent 58%),
              radial-gradient(ellipse 55% 50% at calc(var(--tx, 58) * 1%) calc(var(--ty, 44) * 1%),
                rgba(251, 113, 133, 0.07) 0%,
                transparent 52%),
              radial-gradient(ellipse 90% 80% at 50% 110%,
                rgba(15, 23, 42, 0.55) 0%,
                transparent 45%)
            `,
            filter: "blur(0px)",
          }}
        />

        <div
          className="absolute -inset-[30%] mix-blend-screen opacity-[0.35] motion-reduce:opacity-0"
          style={{
            background: `
              radial-gradient(circle at calc(var(--mx, 50) * 1%) calc(var(--my, 32) * 1%),
                rgba(255, 255, 255, 0.09) 0%,
                rgba(255, 255, 255, 0.02) 28%,
                transparent 55%)
            `,
            filter: "blur(50px)",
          }}
        />
      </div>

      <div
        className="absolute inset-0 opacity-[0.22] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: "180px 180px",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 85% 70% at calc(var(--mx, 50) * 1%) calc(var(--my, 32) * 1%), black 0%, transparent 72%)",
        }}
      />
    </div>
  );
}
