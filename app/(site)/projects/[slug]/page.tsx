import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { glassCta, glassGhost, glassPanelInteractive } from "@/app/lib/glass";
import { createPageMetadata } from "@/app/lib/metadata";
import { getProjectBySlug, projects } from "@/app/lib/projects";
import { personName } from "@/app/lib/site";

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
    description: `${project.tagline} Case study by ${personName}.`,
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
        <Reveal className={`mb-8 rounded-3xl p-8 md:p-10 ${glassPanelInteractive}`}>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-600">Case study</p>
              <dl className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-zinc-600">Role</dt>
                  <dd className="mt-2 text-sm leading-6 text-zinc-300">{project.caseStudy.role}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-zinc-600">Timeline</dt>
                  <dd className="mt-2 text-sm leading-6 text-zinc-300">{project.caseStudy.timeline}</dd>
                </div>
              </dl>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-zinc-600">Scope</p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-400">
                  {project.caseStudy.scope.map((item) => (
                    <li key={item} className="border-b border-white/[0.06] pb-3 last:border-b-0 last:pb-0">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-zinc-600">What shipped</p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-400">
                  {project.caseStudy.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <Reveal className={`rounded-3xl p-8 ${glassPanelInteractive}`}>
            <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-600">Problem</p>
            <p className="mt-4 text-base leading-8 text-zinc-400">{project.problem}</p>
          </Reveal>
          <Reveal delay={0.08} className={`rounded-3xl p-8 ${glassPanelInteractive}`}>
            <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-600">Approach</p>
            <p className="mt-4 text-base leading-8 text-zinc-400">{project.approach}</p>
            <div className="mt-6">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${glassCta} rounded-2xl px-4 py-2 text-sm`}
              >
                Visit live site
              </a>
            </div>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <Reveal className={`rounded-3xl p-8 ${glassPanelInteractive}`}>
            <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-600">Stack</p>
            <ul className="mt-5 space-y-3 text-base text-zinc-400">
              {project.stack.map((item) => (
                <li key={item} className="border-b border-white/[0.06] pb-3 last:border-b-0 last:pb-0">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08} className={`rounded-3xl p-8 ${glassPanelInteractive}`}>
            <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-600">Results</p>
            <ul className="mt-5 space-y-4 text-base leading-8 text-zinc-400">
              {project.results.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="mt-8">
          <p className="mb-8 flex flex-wrap items-center gap-x-1 gap-y-2 text-sm text-zinc-500">
            <Link href="/about" className={`${glassCta} rounded-2xl px-3 py-1.5 text-xs`}>
              Builder profile
            </Link>
            <span className="text-zinc-600">·</span>
            <Link href="/projects" className={`${glassGhost} rounded-2xl px-3 py-1.5 text-xs`}>
              All projects
            </Link>
            <span className="text-zinc-600">·</span>
            <Link href="/services" className={`${glassGhost} rounded-2xl px-3 py-1.5 text-xs`}>
              Services
            </Link>
          </p>
          <div className="mb-6">
            <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-600">Gallery</p>
            <p className="mt-2 text-sm text-zinc-500">Selected interface views from the build.</p>
          </div>
          <div className="grid gap-5">
            {project.gallery.map((image) => (
              <figure
                key={image.src}
                className={`overflow-hidden rounded-3xl ${glassPanelInteractive}`}
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
