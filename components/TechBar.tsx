"use client";

import { motion } from "framer-motion";

// Inline SVG logos for the tech stack — minimal monochrome
const tech = [
  {
    name: "Next.js",
    icon: (
      <svg width="18" height="18" viewBox="0 0 180 180" fill="currentColor" aria-hidden="true">
        <mask id="nx-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180" style={{ maskType: "alpha" }}>
          <circle cx="90" cy="90" r="90" />
        </mask>
        <g mask="url(#nx-mask)">
          <circle cx="90" cy="90" r="90" />
          <path d="M149.508 157.52L69.142 54H54v71.97h11.926V69.59l72.508 95.456a90.277 90.277 0 0011.074-7.527z" fill="white" />
          <rect x="115" y="54" width="12" height="72" fill="white" />
        </g>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <svg width="18" height="18" viewBox="0 0 400 400" fill="none" aria-hidden="true">
        <rect width="400" height="400" rx="50" fill="currentColor" fillOpacity="0.15" />
        <path d="M87.6 200.7V217h52v152h36V217h52v-16.3c0-9 0-16.5-.4-16.7-.3-.2-31.7-.3-70-.3l-69.2.3v16.7z" fill="currentColor" />
        <path d="M321.8 184c-10.2-2.7-20.7-3.6-30.8-2.5-13.3 1.5-24.9 7.7-32 17.3-4.6 6.2-6.8 13.2-6.5 21.2.3 8.6 3.4 15.9 9.4 21.9 5 5 11.3 8.5 22 12.1 16.2 5.3 20.7 8.5 21.2 15.2.6 7.7-4.5 12.7-14.7 14.2-6.3.9-12.8.3-21-2-5.2-1.4-10-3.4-17.4-7v33.2l3.4 1.3c7.8 3 16.8 4.8 27.2 5.4 13.4.8 25.3-.7 35.4-4.7 12.7-5 21.6-14.5 24.9-26.5 1.2-4.3 1.6-8.7 1.4-13.2-.5-10.6-4.5-18.6-12.3-24.9-4.7-3.7-10.9-7-23.5-11.8-11.5-4.2-15.4-7.4-15.4-12.7 0-5.1 4.3-9 11.8-10.5 5.2-1 10.8-.7 18.2 1 5 1.2 10.5 3.2 16.3 6l4.3 2V184z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Supabase",
    icon: (
      <svg width="18" height="18" viewBox="0 0 109 113" fill="none" aria-hidden="true">
        <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="currentColor" fillOpacity="0.8" />
        <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#sb1)" />
        <path d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.04075L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z" fill="currentColor" />
        <defs>
          <linearGradient id="sb1" x1="53.9738" y1="54.974" x2="94.1635" y2="71.8295" gradientUnits="userSpaceOnUse">
            <stop stopColor="currentColor" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "Stripe",
    icon: (
      <svg width="18" height="18" viewBox="0 0 60 25" fill="currentColor" aria-hidden="true">
        <path d="M59.6 10.8c0-3.6-1.8-6.4-5.2-6.4-3.4 0-5.5 2.8-5.5 6.4 0 4.2 2.4 6.3 5.8 6.3 1.7 0 2.9-.4 3.9-.9v-2.8c-1 .5-2.1.8-3.5.8-1.4 0-2.6-.5-2.7-2.2h6.8c0-.2.4-1.2.4-2.2zm-6.8-.7c0-1.6 1-2.3 1.9-2.3s1.8.7 1.8 2.3h-3.7zM41.4 4.4c-1.4 0-2.3.6-2.8 1.1l-.2-.9h-3.1v16.8l3.5-.7V18c.5.4 1.3.9 2.6.9 2.6 0 5-2.1 5-6.7 0-4.2-2.4-6.3-4.9-6.3-.1.5-.1.5-.1.5zm-.9 9.7c-.9 0-1.4-.3-1.7-.7V8.9c.4-.4.9-.7 1.7-.7 1.3 0 2.2 1.5 2.2 3 0 1.5-.8 3-2.2 3zM34 3.5L30.5 4.3V1.5L27 2.3v14.1h3.5V8.2c.9-1.1 2.4-.9 2.9-.7V4.4c-.5-.2-2.1-.5-2.1-.5L34 3.5zM23.5 2.4l-3.5.7v13.3h3.5V2.4zM23.5 0l-3.5.7v2.8l3.5-.7V0zM17.5 5.7l-.2-1.3h-3v13.9h3.5V8.6c.8-1.1 2.2-1 2.6-.8V4.5c-.5-.2-2.1-.5-2.9 1.2zM10.5 7.4c0-.5.4-.8 1.1-.8.9 0 2.1.3 3 .8V4.6c-1-.4-2-.6-3-.6-3.1 0-5.1 1.6-5.1 4.3 0 4.2 5.8 3.5 5.8 5.3 0 .6-.5 1-1.4 1-1.2 0-2.7-.5-3.8-1.2v2.9c1.3.6 2.6.9 3.8.9 3.2 0 5.3-1.6 5.3-4.3 0-4.5-5.7-3.7-5.7-5.5z" />
      </svg>
    ),
  },
  {
    name: "Vercel",
    icon: (
      <svg width="18" height="18" viewBox="0 0 1155 1000" fill="currentColor" aria-hidden="true">
        <path d="M577.344 0L1154.69 1000H0L577.344 0Z" />
      </svg>
    ),
  },
  {
    name: "Resend",
    icon: (
      <svg width="18" height="18" viewBox="0 0 72 72" fill="none" aria-hidden="true">
        <rect width="72" height="72" rx="16" fill="currentColor" fillOpacity="0.12" />
        <path d="M20 52V20h20c6.627 0 12 5.373 12 12s-5.373 12-12 12H32l12 8" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function TechBar() {
  return (
    <section
      className="relative py-14 w-full"
      aria-label="Tech stack"
    >
      {/* Hairline borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-[11px] text-zinc-600 uppercase tracking-[0.2em] font-medium mb-8"
        >
          Built with
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {tech.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-center gap-2.5 text-zinc-500 hover:text-zinc-300 transition-colors duration-200 cursor-default"
            >
              {t.icon}
              <span className="text-sm font-medium">{t.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
