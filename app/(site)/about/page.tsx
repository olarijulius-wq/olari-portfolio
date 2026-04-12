import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Prose from "@/components/Prose";
import Reveal from "@/components/Reveal";
import { createPageMetadata } from "@/app/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description: "Longer background on how I work, what I value, and the kinds of products I like building.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        eyebrow="About"
        title="Product-minded engineering with a bias toward finished work."
        description="I build the full path from idea to deployment and care more about useful outcomes than handoff theatre."
      />
      <section className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-20">
        <Reveal>
          <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 md:p-10">
            <Prose>
              <p>
                I’m Olari Julius Valdma, an Estonian full-stack developer focused on SaaS products,
                booking systems, and fast-moving MVP work. I like projects where the value is clear,
                the scope can be disciplined, and shipping matters more than ceremony.
              </p>
              <p>
                My default mode is end-to-end ownership. That means product thinking, implementation,
                deployment, form flows, metadata, and the details that usually get left behind when too
                many people are involved in a small project.
              </p>
              <h2>Principles</h2>
              <ul>
                <li>Scope the first version around one core workflow.</li>
                <li>Ship real integrations instead of speculative architecture.</li>
                <li>Keep the interface calm, fast, and obvious to use.</li>
                <li>Document enough for the next decision, not just the last one.</li>
              </ul>
            </Prose>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
