"use client";

import { motion } from "framer-motion";
import {
  NextjsIcon,
  ResendIcon,
  StripeIcon,
  SupabaseIcon,
  TypeScriptIcon,
  VercelIcon,
} from "@/components/integrations/IntegrationIcons";

const row = [
  { name: "Next.js" as const, iconClass: "w-4 h-4" },
  { name: "TypeScript" as const, iconClass: "w-4 h-4" },
  { name: "Supabase" as const, iconClass: "w-4 h-4" },
  { name: "Stripe" as const, iconClass: "w-[22px] h-3.5" },
  { name: "Vercel" as const, iconClass: "w-3.5 h-3" },
  { name: "Resend" as const, iconClass: "w-4 h-4" },
];

function TechIcon({ name, className }: { name: (typeof row)[number]["name"]; className: string }) {
  switch (name) {
    case "Next.js":
      return <NextjsIcon className={className} onDark />;
    case "TypeScript":
      return <TypeScriptIcon className={className} />;
    case "Supabase":
      return <SupabaseIcon className={className} />;
    case "Stripe":
      return <StripeIcon className={className} />;
    case "Vercel":
      return <VercelIcon className={className} />;
    case "Resend":
      return <ResendIcon className={className} />;
    default:
      return null;
  }
}

function TechStrip() {
  return (
    <div className="flex items-center gap-10 md:gap-14 shrink-0 px-6">
      {row.map((t) => (
        <div
          key={t.name}
          className="group flex cursor-default items-center gap-2.5 rounded-2xl border-2 border-white/5 bg-[linear-gradient(104deg,rgba(253,253,253,0.03)_5%,rgba(240,240,228,0.06)_100%)] px-3 py-1.5 text-zinc-500 backdrop-blur-[25px] transition-all duration-200 hover:border-white/25 hover:text-zinc-200 hover:shadow-[0_0_28px_rgba(255,255,255,0.1)] active:scale-[0.98] -my-1"
        >
          <span className="flex items-center justify-center opacity-90 transition-transform duration-200 group-hover:scale-110 group-hover:opacity-100">
            <TechIcon name={t.name} className={t.iconClass} />
          </span>
          <span className="text-sm font-medium whitespace-nowrap">{t.name}</span>
        </div>
      ))}
    </div>
  );
}

export default function TechBar() {
  return (
    <section className="relative py-12 w-full overflow-hidden" aria-label="Tech stack">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center text-[11px] text-zinc-600 uppercase tracking-[0.2em] font-medium mb-7"
        >
          Built with
        </motion.p>
      </div>

      <div className="relative">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 z-10 bg-gradient-to-r from-black to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 z-10 bg-gradient-to-l from-black to-transparent"
          aria-hidden
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="flex w-max tech-marquee-track"
        >
          <TechStrip />
          <TechStrip />
        </motion.div>
      </div>
    </section>
  );
}
