"use client";

import { motion } from "framer-motion";
import { glassPanelInteractive } from "@/app/lib/glass";

const techGroups = [
  {
    label: "Development",
    items: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Supabase", "Stripe", "Vercel"],
  },
  {
    label: "Security",
    items: ["Burp Suite", "Nmap", "Wireshark", "SIEM"],
  },
] as const;

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
          Tools
        </motion.p>

        <div className="grid gap-4 md:grid-cols-2">
          {techGroups.map((group, index) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`rounded-2xl p-5 md:p-6 ${glassPanelInteractive}`}
            >
              <h2 className="text-sm font-semibold tracking-tight text-white">{group.label}</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 text-sm font-medium text-zinc-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
