import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { glassCta, glassPanelInteractive } from "@/app/lib/glass";
import { createPageMetadata } from "@/app/lib/metadata";
import { personName } from "@/app/lib/site";

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
  description: `${personName}: Next.js development, SaaS MVP delivery, booking platform builds, marketing sites, and integrations — clear scopes and timelines.`,
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Services"
        title="Next.js, SaaS MVPs, booking flows — scoped the way I ship."
        description="Three delivery lanes with explicit timelines, outputs, and what stays out of scope."
      />
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-5 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <Reveal key={tier.title} delay={index * 0.08}>
              <article className={`flex h-full flex-col rounded-3xl p-8 ${glassPanelInteractive}`}>
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
          <Link href="/contact" className={`${glassCta} rounded-2xl px-5 py-3 text-sm`}>
            Ask about scope
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
