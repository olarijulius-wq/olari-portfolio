"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ArrowDown, ArrowRight } from "lucide-react";

const ThreeScene = dynamic(() => import("./ThreeScene"), { ssr: false });

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden flex items-center"
      aria-label="Hero section"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden="true" />

      {/* Radial gradient glow centre */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(255,255,255,0.03) 0%, transparent 70%)",
        }}
      />

      {/* Top fade */}
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "linear-gradient(to bottom, #080808 0%, transparent 100%)",
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "linear-gradient(to top, #080808 0%, transparent 100%)",
        }}
      />

      {/* Three.js — right side desktop, centered mobile */}
      <div
        className="absolute right-0 top-0 w-full md:w-1/2 h-full opacity-70 pointer-events-none"
        aria-hidden="true"
      >
        <ThreeScene />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-400 font-medium tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
              Available for projects
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-4"
          >
            <span className="text-gradient">Olari</span>
            <br />
            <span className="text-white">Julius</span>
          </motion.h1>

          {/* Role */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="text-xl md:text-2xl font-medium text-zinc-400 tracking-tight">
              Full-Stack Developer
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-zinc-500 mb-10 leading-relaxed max-w-lg"
          >
            I build products that work.{" "}
            <span className="text-white font-medium">Fast.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() => handleScroll("#work")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-semibold rounded-full hover:bg-zinc-200 transition-colors duration-200 cursor-pointer"
            >
              View work
              <ArrowRight size={15} aria-hidden="true" />
            </button>
            <button
              onClick={() => handleScroll("#contact")}
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/15 text-white text-sm font-medium rounded-full hover:bg-white/5 hover:border-white/25 transition-all duration-200 cursor-pointer"
            >
              Get in touch
            </button>
          </motion.div>

          {/* Floating stat pills */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex flex-wrap gap-3"
          >
            {["Next.js 15", "TypeScript", "Supabase", "Stripe"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs text-zinc-500 border border-white/6 rounded-full bg-white/3"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        onClick={() => handleScroll("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600 hover:text-zinc-400 transition-colors cursor-pointer group"
        aria-label="Scroll to about section"
      >
        <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} aria-hidden="true" />
        </motion.div>
      </motion.button>
    </section>
  );
}
