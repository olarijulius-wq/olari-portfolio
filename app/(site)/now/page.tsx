import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { createPageMetadata } from "@/app/lib/metadata";

const updatedAt = "2026-04-12";

export const metadata: Metadata = createPageMetadata({
  title: "Now",
  description: "What I’m focused on right now, updated as priorities change.",
  path: "/now",
});

export default function NowPage() {
  return (
    <div>
      <PageHeader
        eyebrow={`Now · Updated ${updatedAt}`}
        title="Current focus, in plain terms."
        description="A small snapshot of what I’m working on and paying attention to at the moment."
      />
      <section className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-20">
        <Reveal>
          <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 text-base leading-8 text-zinc-400">
            <p>
              I’m focused on tightening my portfolio, writing clearer case studies, and continuing to
              build product work that stays fast without feeling rushed.
            </p>
            <p className="mt-6">
              I’m also interested in projects where a small team needs one person to take ownership of
              the full build instead of splitting a straightforward MVP across too many roles.
            </p>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
