import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import Prose from "@/components/Prose";
import Reveal from "@/components/Reveal";
import { createPageMetadata } from "@/app/lib/metadata";
import { getNoteBySlug, notes } from "@/app/lib/notes";
import { personName } from "@/app/lib/site";

type NotePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return notes.map((note) => ({
    slug: note.slug,
  }));
}

export async function generateMetadata({ params }: NotePageProps): Promise<Metadata> {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note) {
    return createPageMetadata({
      title: "Note not found",
      description: "The requested note could not be found.",
      path: `/notes/${slug}`,
      type: "article",
    });
  }

  return createPageMetadata({
    title: note.title,
    description: `${note.description} By ${personName}.`,
    path: `/notes/${note.slug}`,
    type: "article",
  });
}

export default async function NoteDetailPage({ params }: NotePageProps) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note) {
    notFound();
  }

  return (
    <div>
      <PageHeader
        eyebrow={`${note.publishedAt} · ${note.readingTime}`}
        title={note.title}
        description={note.description}
      />
      <section className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-20">
        <Reveal>
          <article className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 md:p-10">
            <Prose>
              {note.sections.map((section) => (
                <section key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </section>
              ))}
            </Prose>
          </article>
        </Reveal>
      </section>
    </div>
  );
}
