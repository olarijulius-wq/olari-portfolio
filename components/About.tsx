"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "Next.js", icon: "N", color: "text-white" },
  { name: "TypeScript", icon: "TS", color: "text-blue-400" },
  { name: "Supabase", icon: "SB", color: "text-green-400" },
  { name: "Stripe", icon: "ST", color: "text-purple-400" },
  { name: "PostgreSQL", icon: "PG", color: "text-blue-300" },
  { name: "Vercel", icon: "V", color: "text-white" },
  { name: "Tailwind", icon: "TW", color: "text-cyan-400" },
  { name: "Resend", icon: "RE", color: "text-orange-400" },
  { name: "Three.js", icon: "3J", color: "text-zinc-300" },
];

function SkillCard({
  skill,
  index,
}: {
  skill: (typeof skills)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.07,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="gradient-border gradient-border-hover p-4 rounded-xl cursor-default transition-all duration-200 group"
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-xs font-bold ${skill.color}`}
          aria-hidden="true"
        >
          {skill.icon}
        </div>
        <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors duration-200">
          {skill.name}
        </span>
      </div>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-28 md:py-36 w-full"
      aria-label="About section"
    >
      {/* Section border top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs text-zinc-600 uppercase tracking-[0.2em] font-medium mb-12"
        >
          About
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight tracking-tight">
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
                payments, database, deploy. No handoffs, no gaps, no excuses.
              </p>
              <p className="text-zinc-500">
                When I&apos;m not shipping code, I&apos;m on the tennis court
                (11 years), at the piano, or in the gym. I think in systems —
                whether it&apos;s music theory, court geometry, or database
                architecture, the logic is the same.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <div>
                <p className="text-2xl font-bold text-white">2+</p>
                <p className="text-xs text-zinc-600 mt-0.5">Products shipped</p>
              </div>
              <div className="w-px h-10 bg-white/8" />
              <div>
                <p className="text-2xl font-bold text-white">Fast</p>
                <p className="text-xs text-zinc-600 mt-0.5">Delivery speed</p>
              </div>
              <div className="w-px h-10 bg-white/8" />
              <div>
                <p className="text-2xl font-bold text-white">AI</p>
                <p className="text-xs text-zinc-600 mt-0.5">Augmented dev</p>
              </div>
            </div>
          </motion.div>

          {/* Right — skill grid */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs text-zinc-600 uppercase tracking-[0.2em] font-medium mb-6">
              Tech stack
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skills.map((skill, i) => (
                <SkillCard key={skill.name} skill={skill} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
