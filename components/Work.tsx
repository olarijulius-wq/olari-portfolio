"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import SpotlightSurface from "@/components/SpotlightSurface";

const projects = [
  {
    id: "lateless",
    title: "Lateless",
    description:
      "Invoice SaaS with Stripe payments, automated reminders, and analytics. Solo-built and launched on Product Hunt.",
    tags: ["SaaS", "Stripe", "Supabase", "Next.js"],
    link: "https://lateless.org",
    year: "2026",
    status: "Live",
  },
  {
    id: "looduskeskus",
    title: "Looduskeskus",
    description:
      "Booking website for a nature accommodation business. Amenities pages, contact form, and email notifications.",
    tags: ["Booking", "Next.js", "Tailwind", "Resend"],
    link: "https://naturestonia.com",
    year: "2026",
    status: "Live",
  },
];

export default function Work() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="work"
      ref={ref}
      className="relative py-24 md:py-32 w-full"
      aria-label="Work"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-[11px] text-zinc-600 uppercase tracking-[0.2em] font-medium mb-3">
            Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">
            Selected projects
          </h2>
        </motion.div>

        {/* Full-width stacked cards */}
        <div className="space-y-4">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative"
            >
              <SpotlightSurface
                glowRadius={640}
                glowStrength={0.12}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.02] transition-all duration-300 hover:border-white/[0.18] hover:shadow-[0_0_60px_rgba(255,255,255,0.04)] active:scale-[0.998]"
              >
                {/* Glow at top on hover */}
                <div
                  className="absolute top-0 left-0 right-0 z-20 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden="true"
                />
                <div
                  className="absolute top-0 left-1/2 z-20 w-72 h-24 -translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "radial-gradient(ellipse at top, rgba(255,255,255,0.06) 0%, transparent 72%)",
                  }}
                  aria-hidden="true"
                />

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-8 md:p-10 focus-visible:outline-none"
                  aria-label={`View ${project.title}`}
                >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  {/* Left — title + description */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight leading-none">
                        {project.title}
                      </h3>
                      <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 text-xs text-green-400 border border-green-400/20 bg-green-400/[0.06] rounded-full shrink-0">
                        <span className="w-1 h-1 rounded-full bg-green-400" aria-hidden="true" />
                        {project.status}
                      </span>
                    </div>
                    <p className="text-zinc-400 text-base leading-relaxed max-w-2xl">
                      {project.description}
                    </p>
                  </div>

                  {/* Right — year + arrow */}
                  <div className="flex md:flex-col items-center md:items-end justify-between md:justify-start gap-4 shrink-0">
                    <p className="text-sm text-zinc-600">{project.year}</p>
                    <div className="w-9 h-9 rounded-full border border-white/[0.08] flex items-center justify-center text-zinc-600 group-hover:text-white group-hover:border-white/25 transition-all duration-200">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5M11.5 2.5V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-7 pt-6 border-t border-white/[0.06]">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs text-zinc-600 border border-white/[0.06] rounded-full bg-white/[0.02] group-hover:text-zinc-500 group-hover:border-white/[0.10] transition-all duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
              </SpotlightSurface>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
