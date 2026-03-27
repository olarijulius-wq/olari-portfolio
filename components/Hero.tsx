"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const ThreeScene = dynamic(() => import("./ThreeScene"), { ssr: false });

const go = (href: string) =>
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

export default function Hero() {
  return (
    <section
      className="relative flex items-center min-h-[calc(100vh-58px)] w-full overflow-hidden"
      aria-label="Hero"
    >
      {/* ── Top hairline + radial glow ─────────────────────────────────────── */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(255,255,255,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20 lg:py-28">

        {/* ── Left — text content ────────────────────────────────────────────── */}
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
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(3rem,7vw,5.5rem)] font-bold leading-[1.04] tracking-tight mb-6"
          >
            <span className="effect-font-gradient">Full-stack</span>
            <br />
            <span className="effect-font-gradient">developer.</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-zinc-400 leading-relaxed mb-10 max-w-md"
          >
            I build products that work.{" "}
            <span className="text-white font-medium">Fast.</span>{" "}
            SaaS apps, booking platforms, and MVPs — from idea to shipped.
          </motion.p>

          {/* CTAs — frosted primary + ghost secondary, same as Navbar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() => go("#work")}
              className="relative inline-flex items-center justify-center text-white border-[2px] border-white/5 backdrop-blur-[25px] bg-[linear-gradient(104deg,rgba(253,253,253,0.05)_5%,rgba(240,240,228,0.1)_100%)] hover:bg-white hover:text-black transition-all duration-200 rounded-2xl px-5 h-11 text-sm font-semibold cursor-pointer"
            >
              View my work
            </button>
            <button
              onClick={() => go("#contact")}
              className="h-11 px-5 text-sm font-semibold text-zinc-400 hover:text-white transition-colors duration-150 cursor-pointer"
            >
              Get in touch →
            </button>
          </motion.div>
        </div>

        {/* ── Right — Three.js matte black cube ──────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-square w-full max-w-[480px] mx-auto lg:max-w-none"
          aria-hidden="true"
        >
          {/* Card with hairline border */}
          <div className="absolute inset-0 rounded-2xl border border-white/[0.08] bg-white/[0.01] overflow-hidden">
            <ThreeScene />
          </div>

          {/* Corner accent marks — resend.com card detail */}
          <span className="absolute -top-px -left-px w-5 h-5 border-t-2 border-l-2 border-white/20 rounded-tl-2xl" />
          <span className="absolute -top-px -right-px w-5 h-5 border-t-2 border-r-2 border-white/20 rounded-tr-2xl" />
          <span className="absolute -bottom-px -left-px w-5 h-5 border-b-2 border-l-2 border-white/20 rounded-bl-2xl" />
          <span className="absolute -bottom-px -right-px w-5 h-5 border-b-2 border-r-2 border-white/20 rounded-br-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
