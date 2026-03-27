"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "lateless",
    title: "Lateless",
    description:
      "Invoice SaaS with Stripe payments, automated reminders, and analytics. Solo-built and launched on Product Hunt.",
    tags: ["SaaS", "Stripe", "Supabase", "Next.js"],
    link: "https://lateless.org",
    year: "2024",
    status: "Live",
    accent: "from-zinc-900 to-black",
    highlight: "rgba(255,255,255,0.04)",
  },
  {
    id: "looduskeskus",
    title: "Looduskeskus",
    description:
      "Booking website for a nature accommodation business. Amenities pages, contact form, and email notifications.",
    tags: ["Booking", "Next.js", "Tailwind", "Resend"],
    link: "https://naturestonia.com",
    year: "2024",
    status: "Live",
    accent: "from-zinc-900 to-black",
    highlight: "rgba(255,255,255,0.03)",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl overflow-hidden gradient-border glow-card transition-all duration-400 cursor-pointer"
      style={{ transitionDuration: "400ms" }}
    >
      {/* Background gradient on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl"
        style={{
          background: `radial-gradient(ellipse 100% 80% at 50% 0%, ${project.highlight} 0%, transparent 70%)`,
        }}
        aria-hidden="true"
      />

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-8 md:p-10 focus-visible:outline-none"
        aria-label={`View ${project.title} project`}
      >
        {/* Top row */}
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/6 border border-white/10 flex items-center justify-center">
              <span className="text-xs font-bold text-white">
                {project.title.slice(0, 2).toUpperCase()}
              </span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white leading-tight">
                {project.title}
              </h3>
              <p className="text-xs text-zinc-600 mt-0.5">{project.year}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs text-green-400 border border-green-400/20 bg-green-400/8 rounded-full">
              <span className="w-1 h-1 rounded-full bg-green-400" aria-hidden="true" />
              {project.status}
            </span>
            <motion.div
              whileHover={{ rotate: 45 }}
              transition={{ duration: 0.2 }}
              className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 group-hover:text-white group-hover:border-white/25 transition-all duration-200"
              aria-hidden="true"
            >
              <ArrowUpRight size={14} />
            </motion.div>
          </div>
        </div>

        {/* Description */}
        <p className="text-zinc-400 text-base leading-relaxed mb-8 max-w-xl">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs text-zinc-500 border border-white/6 rounded-full bg-white/3 group-hover:border-white/10 group-hover:text-zinc-400 transition-all duration-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </a>
    </motion.article>
  );
}

export default function Work() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="work"
      ref={ref}
      className="relative py-28 md:py-36 w-full"
      aria-label="Portfolio work section"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p className="text-xs text-zinc-600 uppercase tracking-[0.2em] font-medium mb-3">
              Work
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Selected Work
            </h2>
          </div>
          <p className="text-zinc-600 text-sm hidden md:block">
            {projects.length} projects
          </p>
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
