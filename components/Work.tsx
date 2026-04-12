"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SpotlightSurface from "@/components/SpotlightSurface";
import { projects } from "@/app/lib/projects";
import { personName } from "@/app/lib/site";

export default function Work() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" ref={ref} className="relative w-full py-24 md:py-32" aria-label="Work">
      <div
        className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-600">
            Work
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
            Selected projects by {personName}
          </h2>
        </motion.div>

        <div className="space-y-4">
          {projects.map((project, i) => (
            <motion.article
              key={project.slug}
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
                className="rounded-2xl border border-white/[0.08] bg-white/[0.02] transition-all duration-300 hover:border-white/[0.18] hover:shadow-[0_0_60px_rgba(255,255,255,0.04)]"
              >
                <div
                  className="absolute left-0 right-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <div
                  className="absolute left-1/2 top-0 z-20 h-24 w-72 -translate-x-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(ellipse at top, rgba(255,255,255,0.06) 0%, transparent 72%)",
                  }}
                  aria-hidden="true"
                />

                <div className="p-8 md:p-10">
                  <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    <div className="min-w-0 flex-1">
                      <div className="mb-4 flex items-center gap-4">
                        <h3 className="font-display text-3xl font-bold leading-none tracking-tight text-white md:text-4xl">
                          {project.title}
                        </h3>
                        <span className="hidden shrink-0 items-center gap-1.5 rounded-full border border-green-400/20 bg-green-400/[0.06] px-2.5 py-1 text-xs text-green-400 md:inline-flex">
                          <span className="h-1 w-1 rounded-full bg-green-400" aria-hidden="true" />
                          {project.status}
                        </span>
                      </div>
                      <p className="max-w-2xl text-base leading-relaxed text-zinc-400">
                        {project.summary}
                      </p>
                    </div>

                    <div className="flex shrink-0 items-center justify-between gap-4 md:flex-col md:items-end md:justify-start">
                      <p className="text-sm text-zinc-600">{project.year}</p>
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] text-zinc-600 transition-all duration-200 group-hover:border-white/25 group-hover:text-white">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                          <path
                            d="M2.5 11.5L11.5 2.5M11.5 2.5H5M11.5 2.5V9"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-2 border-t border-white/[0.06] pt-6">
                    {project.stack.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1 text-xs text-zinc-600 transition-all duration-200 group-hover:border-white/[0.10] group-hover:text-zinc-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center rounded-full border border-white/[0.12] bg-white/[0.04] px-4 py-2 text-sm font-medium text-white transition hover:border-white/[0.22] hover:bg-white/[0.08]"
                    >
                      Read case study
                    </Link>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-zinc-400 transition hover:bg-white/[0.06] hover:text-white"
                    >
                      View live site
                    </a>
                  </div>
                </div>
              </SpotlightSurface>
            </motion.article>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/projects"
            className="inline-flex items-center text-sm font-medium text-zinc-400 transition hover:text-white"
          >
            Browse all case studies
          </Link>
        </div>
      </div>
    </section>
  );
}
