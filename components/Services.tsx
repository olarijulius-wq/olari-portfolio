"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const services = [
  {
    id: "saas",
    title: "SaaS MVP",
    price: "from €3,000",
    description:
      "Full-stack web app from idea to launch. Stripe payments, authentication, database, and deploy — all handled.",
    features: [
      "Next.js + TypeScript",
      "Stripe integration",
      "Auth & user accounts",
      "Database (Supabase)",
      "Vercel deploy",
    ],
  },
  {
    id: "website",
    title: "Website",
    price: "from €1,000",
    description:
      "Fast, modern, and mobile-first. Booking systems, landing pages, portfolios — built to convert and perform.",
    features: [
      "Responsive design",
      "Contact forms",
      "Email notifications",
      "SEO optimized",
      "Vercel deploy",
    ],
  },
  {
    id: "integrations",
    title: "Integrations",
    price: "from €500",
    description:
      "Stripe, Resend, Supabase, and any third-party APIs. Connect your tools and automate your workflows.",
    features: [
      "Payment systems",
      "Email automation",
      "API connections",
      "Webhooks",
      "Data pipelines",
    ],
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-28 md:py-36 w-full"
      aria-label="Services section"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-xs text-zinc-600 uppercase tracking-[0.2em] font-medium mb-3">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            What I build
          </h2>
        </motion.div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6 }}
              className="group gradient-border glow-card p-7 rounded-2xl transition-all duration-300 cursor-default"
            >
              {/* Price */}
              <div className="mb-6">
                <span className="text-xs text-zinc-600 font-medium uppercase tracking-wider">
                  {service.price}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-white transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-500 text-sm leading-relaxed mb-7">
                {service.description}
              </p>

              {/* Feature list */}
              <ul className="space-y-2.5" aria-label={`${service.title} features`}>
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2.5 text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors duration-200"
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden="true"
                      className="flex-shrink-0"
                    >
                      <path
                        d="M2 6L5 9L10 3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <p className="text-zinc-600 text-sm">
            Not sure what you need?{" "}
            <button
              onClick={() => {
                const el = document.querySelector("#contact");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-white underline underline-offset-4 hover:text-zinc-300 transition-colors cursor-pointer"
            >
              Let&apos;s talk
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
