import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { createPageMetadata } from "@/app/lib/metadata";

const tiers = [
  {
    title: "MVP Sprint",
    price: "from €3,000",
    timeline: "2-5 weeks",
    includes: ["Product scope definition", "Core app flow", "Auth, database, deployment"],
    excludes: ["Large admin suites", "Complex multi-role enterprise logic", "Ongoing support retainer"],
  },
  {
    title: "Marketing Site",
    price: "from €1,000",
    timeline: "1-2 weeks",
    includes: ["Fast responsive pages", "SEO-ready metadata", "Contact and conversion flows"],
    excludes: ["Large CMS migrations", "Multi-language rollout", "High-volume content operations"],
  },
  {
    title: "Integrations",
    price: "from €500",
    timeline: "project-based",
    includes: ["Stripe, Resend, API integrations", "Automation touchpoints", "Workflow simplification"],
    excludes: ["Unsupported vendor lock-in", "Opaque legacy systems", "Open-ended maintenance"],
  },
];

export const metadata: Metadata = createPageMetadata({
  title: "Services",
  description: "Delivery tiers for MVP builds, marketing sites, and product integrations.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Services"
        title="Clear scopes for the work I actually like shipping."
        description="Three service lanes, each with a tighter boundary around timeline, output, and what is intentionally not included."
      />
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-5 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <Reveal key={tier.title} delay={index * 0.08}>
              <article className="flex h-full flex-col rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8">
                <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-600">{tier.price}</p>
                <h2 className="mt-4 text-2xl font-semibold text-white">{tier.title}</h2>
                <p className="mt-2 text-sm text-zinc-500">{tier.timeline}</p>
                <div className="mt-8 border-t border-white/[0.08] pt-6">
                  <p className="text-sm font-medium text-white">Included</p>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-zinc-400">
                    {tier.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 border-t border-white/[0.08] pt-6">
                  <p className="text-sm font-medium text-white">Not included</p>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-zinc-500">
                    {tier.excludes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full border border-white/[0.12] bg-white/[0.05] px-5 py-3 text-sm font-medium text-white transition hover:border-white/[0.22] hover:bg-white/[0.09]"
          >
            Ask about scope
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
