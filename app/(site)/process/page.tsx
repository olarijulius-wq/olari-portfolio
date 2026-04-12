import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { glassCta, glassPanelInteractive } from "@/app/lib/glass";
import { createPageMetadata } from "@/app/lib/metadata";

const steps = [
  {
    title: "Discovery",
    summary: "Clarify the business problem, user flow, and what the first shipped version actually needs.",
  },
  {
    title: "Build",
    summary: "Design and implement the product with working flows, real integrations, and tight scope control.",
  },
  {
    title: "Launch",
    summary: "Ship a production-ready version with metadata, forms, deployment, and the core conversion path in place.",
  },
  {
    title: "Handoff",
    summary: "Document the system, tradeoffs, and next sensible steps so the project stays usable after launch.",
  },
];

export const metadata: Metadata = createPageMetadata({
  title: "Process",
  description: "A practical four-step delivery process from discovery to launch and handoff.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Process"
        title="A delivery process built for shipping, not theatre."
        description="The goal is to get from vague idea to working product with fewer loops, fewer handoffs, and fewer avoidable surprises."
      />
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-5 md:grid-cols-2">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.08}>
              <article className={`rounded-3xl p-8 ${glassPanelInteractive}`}>
                <p className="text-sm text-zinc-500">{String(index + 1).padStart(2, "0")}</p>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white">
                  {step.title}
                </h2>
                <p className="mt-4 leading-8 text-zinc-400">{step.summary}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <Link href="/contact" className={`${glassCta} rounded-2xl px-5 py-3 text-sm`}>
            Start with discovery
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
