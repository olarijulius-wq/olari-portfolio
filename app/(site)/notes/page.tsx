import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { createPageMetadata } from "@/app/lib/metadata";
import { notes } from "@/app/lib/notes";
import { personName } from "@/app/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Notes",
  description: `Notes by ${personName} on product work, shipping speed, Next.js, and building software with better constraints.`,
  path: "/notes",
});

export default function NotesPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Notes"
        title="Working notes on shipping products."
        description={`Short pieces by ${personName} on scope, delivery, AI-assisted engineering, and making software feel finished.`}
      />
      <section className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-5">
          {notes.map((note, index) => (
            <Reveal key={note.slug} delay={index * 0.08}>
              <article className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8">
                <p className="text-sm text-zinc-500">
                  {note.publishedAt} · {note.readingTime}
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white">
                  {note.title}
                </h2>
                <p className="mt-4 leading-8 text-zinc-400">{note.description}</p>
                <Link
                  href={`/notes/${note.slug}`}
                  className="mt-6 inline-flex items-center text-sm font-medium text-zinc-300 transition hover:text-white"
                >
                  Read note
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
