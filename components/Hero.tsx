"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import FloatingIntegrationPills from "@/components/FloatingIntegrationPills";
import { glassCta, glassGhost } from "@/app/lib/glass";
import { personName } from "@/app/lib/site";

const go = (href: string) =>
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

// ─── CSS-only abstract sphere ──────────────────────────────────────────────────

function AbstractSphere() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-[480px] mx-auto aspect-square flex items-center justify-center"
      aria-hidden="true"
    >
      {/* Outer corner marks */}
      <span className="absolute top-0 left-0 w-5 h-5 border-t border-l border-white/[0.15]" />
      <span className="absolute top-0 right-0 w-5 h-5 border-t border-r border-white/[0.15]" />
      <span className="absolute bottom-0 left-0 w-5 h-5 border-b border-l border-white/[0.15]" />
      <span className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-white/[0.15]" />

      {/* Orbital ring outer */}
      <div className="absolute inset-[8%] rounded-full border border-white/[0.04] rotate-[20deg]" />
      {/* Orbital ring inner */}
      <div className="absolute inset-[16%] rounded-full border border-white/[0.03] -rotate-[12deg]" />

      {/* Floating container — Framer Motion y-bob */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
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
          {/* Primary specular highlight */}
          <div
            className="absolute rounded-full blur-xl"
            style={{
              top: "14%",
              left: "18%",
              width: "22%",
              aspectRatio: "1",
              background: "rgba(255,255,255,0.07)",
            }}
          />
          {/* Secondary micro-highlight */}
          <div
            className="absolute rounded-full blur-sm"
            style={{
              top: "10%",
              left: "14%",
              width: "9%",
              aspectRatio: "1",
              background: "rgba(255,255,255,0.10)",
            }}
          />
        </div>
      </motion.div>

      {/* Subtle ambient glow behind sphere */}
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
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 48]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.6], [1, 0.35]);

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center min-h-[calc(100vh-58px)] w-full overflow-hidden"
      aria-label="Hero"
    >
      {/* Top hairline + radial glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
        aria-hidden="true"
      />
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] pointer-events-none"
        aria-hidden="true"
        style={{
          opacity: opacityBg,
          background:
            "radial-gradient(ellipse 55% 45% at 50% 0%, rgba(255,255,255,0.055) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20 lg:py-24">

        {/* ── Left — text ────────────────────────────────────────────────── */}
        <motion.div style={{ y: yText }}>
          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`mb-8 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium ${glassGhost}`}
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"
              aria-hidden="true"
            />
            <span className="text-xs text-zinc-400 font-medium tracking-wide">
              Available for work
            </span>
          </motion.div>

          {/* Headline — full name for person-entity clarity */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold leading-[1.05] tracking-tight mb-4"
            style={{ fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)" }}
          >
            <span className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
              {personName}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-white/90 font-medium tracking-tight mb-6 max-w-[480px] leading-snug"
          >
            Full-stack developer in Estonia building SaaS products, MVPs, and modern web apps.
          </motion.p>
         
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 max-w-[480px]"
          >
            <Link href="/about" className={`${glassGhost} rounded-2xl px-4 py-2 text-sm`}>
              Full profile &amp; background
            </Link>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="flex flex-wrap items-center gap-3"
          >
            <button
              type="button"
              onClick={() => go("#work")}
              className={`${glassCta} h-11 rounded-2xl px-6 text-sm cursor-pointer`}
            >
              View my work
            </button>

            <button
              type="button"
              onClick={() => go("#contact")}
              className={`${glassGhost} h-11 rounded-2xl px-5 text-sm cursor-pointer`}
            >
              Get in touch →
            </button>
          </motion.div>
        </motion.div>

        {/* ── Right — floating integrations + sphere ─────────────────────── */}
        <div className="relative w-full min-h-[min(72vw,480px)] lg:min-h-[520px]">
          <FloatingIntegrationPills />
          <div className="relative z-10">
            <AbstractSphere />
          </div>
        </div>
      </div>
    </section>
  );
}
