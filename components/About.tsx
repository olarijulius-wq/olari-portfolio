"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const interests = [
  { label: "11 years tennis" },
  { label: "Piano & Euphonium" },
  { label: "Gym" },
  { label: "Logic & systems" },
];

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
          transition={{ duration: 0.5 }}
          className="text-[11px] text-zinc-600 uppercase tracking-[0.2em] font-medium mb-14"
        >
          About
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — large text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-[1.15] tracking-tight mb-8">
              Building the future,
              <br />
              <span className="text-zinc-500">one sprint at a time.</span>
            </h2>

            <div className="space-y-5 text-zinc-400 text-[1.0625rem] leading-[1.75]">
              <p>
                I build web apps and MVPs using AI-assisted development. What
                takes others months takes me weeks.
              </p>
              <p>
                From idea to deployed product — I handle the full stack. Auth,
                payments, database, deploy. No handoffs, no gaps.
              </p>
              <p className="text-zinc-600">
                I think in systems — whether it&apos;s music theory, court
                geometry, or database architecture, the underlying logic is
                always the same.
              </p>
            </div>
          </motion.div>

          {/* Right — stats + interests */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10"
          >
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "2+", label: "Products shipped" },
                { value: "Fast", label: "Delivery" },
                { value: "AI", label: "Augmented dev" },
              ].map((s) => (
                <div key={s.value}>
                  <p className="text-2xl font-bold text-white mb-1">{s.value}</p>
                  <p className="text-xs text-zinc-600 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-white/[0.06]" />

            {/* Interests */}
            <div>
              <p className="text-[11px] text-zinc-600 uppercase tracking-[0.2em] font-medium mb-5">
                Beyond code
              </p>
              <ul className="space-y-3">
                {interests.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center gap-3 text-sm text-zinc-500"
                  >
                    <span
                      className="w-1 h-1 rounded-full bg-zinc-700 shrink-0"
                      aria-hidden="true"
                    />
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
