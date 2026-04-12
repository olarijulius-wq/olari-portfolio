import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { createPageMetadata } from "@/app/lib/metadata";
import { getProjectBySlug, projects } from "@/app/lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return createPageMetadata({
      title: "Project not found",
      description: "The requested case study could not be found.",
      path: `/projects/${slug}`,
    });
  }

  return createPageMetadata({
    title: project.title,
    description: project.tagline,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div>
      <PageHeader
        eyebrow={`${project.year} · ${project.status}`}
        title={project.title}
        description={project.tagline}
      />
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <Reveal className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8">
            <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-600">Problem</p>
            <p className="mt-4 text-base leading-8 text-zinc-400">{project.problem}</p>
          </Reveal>
          <Reveal delay={0.08} className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8">
            <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-600">Approach</p>
            <p className="mt-4 text-base leading-8 text-zinc-400">{project.approach}</p>
            <div className="mt-6">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-white/[0.12] bg-white/[0.05] px-4 py-2 text-sm font-medium text-white transition hover:border-white/[0.22] hover:bg-white/[0.09]"
              >
                Visit live site
              </a>
            </div>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <Reveal className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8">
            <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-600">Stack</p>
            <ul className="mt-5 space-y-3 text-base text-zinc-400">
              {project.stack.map((item) => (
                <li key={item} className="border-b border-white/[0.06] pb-3 last:border-b-0 last:pb-0">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08} className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8">
            <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-600">Results</p>
            <ul className="mt-5 space-y-4 text-base leading-8 text-zinc-400">
              {project.results.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="mt-8">
          <div className="mb-6">
            <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-600">Gallery</p>
            <p className="mt-2 text-sm text-zinc-500">Selected interface views from the build.</p>
          </div>
          <div className="grid gap-5">
            {project.gallery.map((image) => (
              <figure
                key={image.src}
                className="overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="h-auto w-full"
                />
              </figure>
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
