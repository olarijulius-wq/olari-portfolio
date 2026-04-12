import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { createPageMetadata } from "@/app/lib/metadata";

const categories = [
  {
    title: "Dev",
    items: ["Next.js 16", "React 19", "TypeScript", "Tailwind v4", "Framer Motion", "Supabase"],
  },
  {
    title: "Productivity",
    items: ["Codex", "Cursor", "Linear-style planning", "Figma for rough UI decisions", "Apple Notes for briefs"],
  },
  {
    title: "Desk",
    items: ["MacBook setup", "External display", "Mechanical keyboard", "A clean workspace that stays quiet enough to focus"],
  },
];

export const metadata: Metadata = createPageMetadata({
  title: "Uses",
  description: "A snapshot of the tools, software, and desk setup behind my daily work.",
  path: "/uses",
});

export default function UsesPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Uses"
        title="Tools I reach for often enough to matter."
        description="Not a gear obsession page. Just the stack and setup that currently helps me ship work quickly."
      />
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category, index) => (
            <Reveal key={category.title} delay={index * 0.08}>
              <article className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8">
                <h2 className="text-2xl font-semibold text-white">{category.title}</h2>
                <ul className="mt-6 space-y-3 text-sm leading-7 text-zinc-400">
                  {category.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
