"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SpotlightSurface from "@/components/SpotlightSurface";

const services = [
  {
    id: "saas",
    title: "SaaS MVP",
    price: "from €3,000",
    description:
      "Full-stack web app from idea to launch. Stripe payments, authentication, database, and deploy — all handled.",
  },
  {
    id: "website",
    title: "Website",
    price: "from €1,000",
    description:
      "Fast, modern, and mobile-first. Booking systems, landing pages, and portfolios — built to convert and perform.",
  },
  {
    id: "integrations",
    title: "Integrations",
    price: "from €500",
    description:
      "Stripe, Resend, Supabase, and any third-party APIs. Connect your tools and automate your workflows.",
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-24 md:py-32 w-full"
      aria-label="Services"
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
            Services
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">
            What I build
          </h2>
        </motion.div>

        {/* Three items — separated by vertical lines on desktop, horizontal on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="py-6 md:py-0 md:px-6 first:md:pl-0 last:md:pr-0"
            >
              <SpotlightSurface
                glowRadius={480}
                glowStrength={0.1}
                className="group rounded-2xl border border-transparent bg-transparent transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.03] active:scale-[0.995] md:px-4 md:py-8 py-6 px-1 -mx-1 md:mx-0"
              >
                <p className="text-[11px] text-zinc-600 uppercase tracking-[0.15em] font-medium mb-4 transition-colors group-hover:text-zinc-500">
                  {service.price}
                </p>
                <h3 className="text-xl font-semibold text-white mb-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">
                  {service.description}
                </p>
              </SpotlightSurface>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 pt-8 border-t border-white/[0.08]"
        >
          <p className="text-sm text-zinc-600">
            Not sure what you need?{" "}
            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-zinc-400 hover:text-white transition-colors cursor-pointer underline underline-offset-4 decoration-white/25 hover:decoration-white/50 rounded-sm px-0.5 -mx-0.5 hover:bg-white/[0.06] active:scale-[0.98]"
            >
              Let&apos;s talk
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
