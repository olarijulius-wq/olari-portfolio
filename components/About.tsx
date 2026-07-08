"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { glassGhost, glassPanelInteractive } from "@/app/lib/glass";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 md:py-32 w-full"
      aria-label="About"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-[11px] text-zinc-600 uppercase tracking-[0.2em] font-medium mb-14"
        >
          About
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — large text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-[1.15] tracking-tight mb-8">
              What I build,
              <br />
              <span className="text-zinc-500">based in Estonia.</span>
            </h2>

            <div className="space-y-5 text-zinc-400 text-[1.0625rem] leading-[1.75]">
              <p>
                I&apos;m an Estonian full-stack developer shipping production SaaS and focused web
                products with end-to-end ownership.
              </p>
              <p>
                From idea to deployed product: auth, payments, database, and deployment. I&apos;m also
                building a practical security foundation through SOC L1, Jr Pentester, and AI
                Security lab work.{" "}
                <Link href="/about" className={`${glassGhost} ml-1 inline-flex rounded-2xl px-3 py-1.5 text-sm`}>
                  Full profile
                </Link>
              </p>
              <p className="text-zinc-600">
                I think in systems: how the product works, where the data moves, and how the same
                flow can break under real-world pressure.
              </p>
            </div>
          </motion.div>

          {/* Right — stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              {[
                { value: "Solo", label: "Product ownership" },
                { value: "SOC L1", label: "Security foundation" },
                { value: "Labs", label: "Hands-on practice" },
              ].map((s) => (
                <div
                  key={s.value}
                  className={`group/stat rounded-2xl px-3 py-3 -mx-1 sm:mx-0 ${glassPanelInteractive}`}
                >
                  <p className="text-2xl font-bold text-white mb-1">{s.value}</p>
                  <p className="text-xs text-zinc-600 leading-snug transition-colors group-hover/stat:text-zinc-500">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
