import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SpotlightSurface from "@/components/SpotlightSurface";
import { createPageMetadata } from "@/app/lib/metadata";
import { projects } from "@/app/lib/projects";

export const metadata: Metadata = createPageMetadata({
  title: "Projects",
  description: "Selected case studies covering SaaS products, booking flows, and product-focused web builds.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Projects"
        title="Selected builds with the thinking behind them."
        description="Case studies for the products and websites I’ve shipped, including the constraint, approach, stack, and the result each build was designed to create."
      />
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-5">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.08}>
              <SpotlightSurface
                glowRadius={580}
                glowStrength={0.11}
                className="rounded-3xl border border-white/[0.08] bg-white/[0.02]"
              >
                <article className="grid gap-6 p-8 md:grid-cols-[1.35fr_0.65fr] md:p-10">
                  <div>
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <p className="text-sm text-zinc-500">{project.year}</p>
                      <span className="rounded-full border border-white/[0.1] px-2.5 py-1 text-xs text-zinc-300">
                        {project.status}
                      </span>
                    </div>
                    <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
                      {project.title}
                    </h2>
                    <p className="mt-3 text-lg text-zinc-300">{project.tagline}</p>
                    <p className="mt-5 max-w-2xl leading-8 text-zinc-400">{project.summary}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1 text-xs text-zinc-500"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col justify-between gap-8 border-t border-white/[0.08] pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-600">Outcome</p>
                      <ul className="mt-4 space-y-3 text-sm leading-7 text-zinc-400">
                        {project.results.slice(0, 2).map((result) => (
                          <li key={result}>{result}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center rounded-full border border-white/[0.12] bg-white/[0.05] px-4 py-2 text-sm font-medium text-white transition hover:border-white/[0.22] hover:bg-white/[0.09]"
                      >
                        Read case study
                      </Link>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-zinc-400 transition hover:bg-white/[0.06] hover:text-white"
                      >
                        Live site
                      </a>
                    </div>
                  </div>
                </article>
              </SpotlightSurface>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
