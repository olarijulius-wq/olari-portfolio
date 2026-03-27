"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

const go = (href: string) =>
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

// ─── CSS-only abstract sphere with mouse tracking ──────────────────────────────

function AbstractSphere({
  mouseX,
  mouseY,
  reduced,
}: {
  mouseX: number;
  mouseY: number;
  reduced: boolean | null;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.1,
        delay: 0.3,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      }}
      className="relative w-full max-w-[480px] mx-auto aspect-square flex items-center justify-center"
      aria-hidden="true"
    >
      {/* Corner marks — fixed, do not move with sphere */}
      <span className="absolute top-0 left-0 w-5 h-5 border-t border-l border-white/[0.15]" />
      <span className="absolute top-0 right-0 w-5 h-5 border-t border-r border-white/[0.15]" />
      <span className="absolute bottom-0 left-0 w-5 h-5 border-b border-l border-white/[0.15]" />
      <span className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-white/[0.15]" />

      {/* Mouse-tracked group: orbital rings + sphere together */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={
          reduced
            ? {}
            : {
                transform: `translate(${mouseX}px, ${mouseY}px)`,
                transition: "transform 0.3s ease",
              }
        }
      >
        {/* Orbital rings */}
        <div className="absolute inset-[8%] rounded-full border border-white/[0.04] rotate-[20deg]" />
        <div className="absolute inset-[16%] rounded-full border border-white/[0.03] -rotate-[12deg]" />

        {/* Float animation — wraps sphere only */}
        <motion.div
          animate={reduced ? {} : { y: [0, -14, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-[62%] aspect-square"
        >
          {/* Main sphere */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at 32% 28%, #282828 0%, #111111 30%, #060606 62%, #000000 100%)",
              boxShadow: [
                "inset -28px -28px 70px rgba(0,0,0,0.95)",
                "inset 14px 14px 48px rgba(255,255,255,0.035)",
                "inset 5px 5px 18px rgba(255,255,255,0.018)",
                "0 0 90px rgba(0,0,0,0.85)",
                "0 30px 60px rgba(0,0,0,0.6)",
              ].join(", "),
            }}
          >
            {/* Primary specular — moves OPPOSITE to mouse (light source illusion) */}
            <div
              className="absolute rounded-full blur-xl"
              style={{
                top: reduced ? "14%" : `calc(14% + ${-mouseY * 0.5}px)`,
                left: reduced ? "18%" : `calc(18% + ${-mouseX * 0.5}px)`,
                width: "22%",
                aspectRatio: "1",
                background: "rgba(255,255,255,0.07)",
                transition: reduced ? undefined : "top 0.3s ease, left 0.3s ease",
              }}
            />
            {/* Micro-highlight */}
            <div
              className="absolute rounded-full blur-sm"
              style={{
                top: reduced ? "10%" : `calc(10% + ${-mouseY * 0.3}px)`,
                left: reduced ? "14%" : `calc(14% + ${-mouseX * 0.3}px)`,
                width: "9%",
                aspectRatio: "1",
                background: "rgba(255,255,255,0.10)",
                transition: reduced ? undefined : "top 0.3s ease, left 0.3s ease",
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Ambient glow behind — stays fixed */}
      <div
        className="absolute inset-[20%] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.015) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />
    </motion.div>
  );
}

// ─── Hero ──────────────────────────────────────────────────────────────────────

export default function Hero() {
  const reduced = useReducedMotion();
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const handler = (e: MouseEvent) => {
      setMouseX((e.clientX / window.innerWidth - 0.5) * 15);
      setMouseY((e.clientY / window.innerHeight - 0.5) * 15);
    };
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, [reduced]);

  return (
    <section
      className="relative flex items-center min-h-[calc(100vh-58px)] w-full overflow-hidden"
      aria-label="Hero"
    >
      {/* ── Breathing background gradient (Change 2) ──────────────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div
          animate={
            reduced
              ? {}
              : { opacity: [0.3, 0.55, 0.3], scale: [1, 1.08, 1] }
          }
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(28,20,65,0.2) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
      </div>

      {/* Top hairline */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
        aria-hidden="true"
      />
      {/* Top radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 0%, rgba(255,255,255,0.045) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20 lg:py-24">

        {/* ── Left — text ────────────────────────────────────────────────── */}
        <div>
          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] mb-8"
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"
              aria-hidden="true"
            />
            <span className="text-xs text-zinc-400 font-medium tracking-wide">
              Available for work
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
            }}
            className="font-display font-bold leading-[1.02] tracking-tight mb-6"
            style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)" }}
          >
            <span className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
              Full-stack
            </span>
            <br />
            <span className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
              developer.
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.25,
              ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
            }}
            className="text-lg text-zinc-400 leading-relaxed mb-10 max-w-[400px]"
          >
            I build products that work.{" "}
            <span className="text-white font-medium">Fast.</span>{" "}
            SaaS apps, booking platforms, and MVPs — from idea to shipped.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() => go("#work")}
              className="inline-flex items-center justify-center rounded-full px-6 h-11 text-sm font-semibold text-white border border-white/[0.12] backdrop-blur-[25px] bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.04)_100%)] hover:bg-white hover:text-black hover:border-white transition-all duration-200 cursor-pointer"
            >
              View my work
            </button>
            <button
              onClick={() => go("#contact")}
              className="h-11 px-3 text-sm font-medium text-zinc-500 hover:text-white transition-colors duration-150 cursor-pointer"
            >
              Get in touch →
            </button>
          </motion.div>
        </div>

        {/* ── Right — interactive CSS sphere ─────────────────────────────── */}
        <AbstractSphere mouseX={mouseX} mouseY={mouseY} reduced={reduced} />
      </div>
    </section>
  );
}
