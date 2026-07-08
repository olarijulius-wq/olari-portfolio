import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { createPageMetadata } from "@/app/lib/metadata";
import { glassCtaCard, glassPanelInteractive } from "@/app/lib/glass";
import {
  personAlternateName,
  personGraphId,
  personName,
  siteUrl,
  websiteGraphId,
} from "@/app/lib/site";

const aboutMetaTitle = `About ${personName}`;
const aboutHeading = aboutMetaTitle;
const aboutDescription =
  "Background, experience, and working style of Olari Julius Valdma, an Estonian full-stack developer building secure production SaaS and a hands-on security foundation.";

const principles = [
  "Scope the first version around one core workflow.",
  "Ship real integrations under production constraints.",
  "Treat payments, auth, database, and deployment as one surface.",
  "Keep the interface calm, fast, and obvious to use.",
];

const focusAreas = [
  "Secure production SaaS with clear conversion paths",
  "Booking flows that remove friction instead of adding admin",
  "Security foundation work across SOC L1, Jr Pentester, and AI Security labs",
];

const exploreLinks = [
  { href: "/projects", label: "Projects and case studies", detail: "See shipped work and problem framing." },
  {
    href: "/services",
    label: "Services and scopes",
    detail: "What I build, how it is scoped, and where I draw the line.",
  },
  { href: "/contact", label: "Contact", detail: "Start with a concrete workflow, timeline, or blocker." },
];

export const metadata: Metadata = createPageMetadata({
  title: aboutMetaTitle,
  description: aboutDescription,
  path: "/about",
});

const profileJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/about#profilepage`,
      url: `${siteUrl}/about`,
      name: aboutMetaTitle,
      description: aboutDescription,
      isPartOf: { "@id": websiteGraphId },
      mainEntity: { "@id": personGraphId },
    },
  ],
};

export default function AboutPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profileJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <PageHeader
        eyebrow="About"
        title={aboutHeading}
        description="Background, how I work end to end, and the kinds of products I like shipping - from secure SaaS and booking flows to hands-on security lab work."
      />
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <article className={`relative overflow-hidden rounded-[2rem] p-8 md:p-10 ${glassPanelInteractive}`}>
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_32%)]" />
              <div className="relative">
                <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-500">Profile</p>
                <p className="mt-6 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                  I build production SaaS end to end and keep sharpening the security side of how
                  those systems fail.
                </p>
                <div className="mt-8 grid gap-6 border-t border-white/[0.08] pt-8 md:grid-cols-[0.85fr_1.15fr]">
                  <div>
                    <p className="text-sm uppercase tracking-[0.22em] text-zinc-600">Identity</p>
                    <p className="mt-3 text-lg leading-8 text-zinc-300">
                      I&apos;m {personName}, an Estonian full-stack developer. You may also see{" "}
                      {personAlternateName}.
                    </p>
                  </div>
                  <p className="text-base leading-8 text-zinc-400 md:text-lg">
                    I ship solo across product, payments, auth, database, and deployment. Alongside
                    that, I am building a security foundation through SOC Level 1, Jr Penetration
                    Tester, and AI Security lab work.
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
          <div className="grid gap-6">
            <Reveal delay={0.06}>
              <article className={`rounded-[2rem] p-8 ${glassPanelInteractive}`}>
                <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-500">Focus</p>
                <ul className="mt-6 space-y-4">
                  {focusAreas.map((area) => (
                    <li key={area} className="border-l border-white/10 pl-4 text-base leading-7 text-zinc-300">
                      {area}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
            <Reveal delay={0.12}>
              <article className={`rounded-[2rem] p-8 ${glassPanelInteractive}`}>
                <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-500">Default Mode</p>
                <p className="mt-4 text-base leading-8 text-zinc-400">
                  End-to-end ownership: product thinking, implementation, payments, auth, database,
                  deployment, metadata, and the security basics that matter once a product is live.
                </p>
              </article>
            </Reveal>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal delay={0.08}>
            <article className={`rounded-[2rem] p-8 md:p-10 ${glassPanelInteractive}`}>
              <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-500">How I Work</p>
              <p className="mt-5 text-xl leading-9 text-zinc-200">
                I focus on projects where the value is clear, the scope can stay disciplined, and the
                first release needs to be useful in production.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400">
                That usually means SaaS products, booking systems, and fast-moving MVP work. I prefer
                real workflows, real integrations, and production constraints, while using security
                labs to keep improving how I think about monitoring, testing, and failure modes.
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="grid gap-4 sm:grid-cols-2">
              {principles.map((principle, index) => (
                <article key={principle} className={`rounded-[1.75rem] p-6 ${glassPanelInteractive}`}>
                  <p className="text-sm text-zinc-500">{String(index + 1).padStart(2, "0")}</p>
                  <p className="mt-4 text-base leading-7 text-zinc-300">{principle}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>

            <Reveal className="mt-6" delay={0.18}>
              <div className="grid gap-4 lg:grid-cols-3">
              {exploreLinks.map((item) => {
                const isContact = item.href === "/contact";
                return (

              <Link
                key={item.href}
                href={item.href}
                className={`group flex min-h-[12rem] flex-col items-start rounded-[1.75rem] p-6 ${
                  isContact ? glassCtaCard :glassPanelInteractive
                }`}
                  >
                <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-500 transition-colors group-hover:text-inherit">
                  Explore
                </p>
                <div className="w-full">
                  <p className={`mt-4 text-xl font-semibold text-white ${isContact ? "group-hover:text-black" : ""}`}>
                    {item.label}
                  </p>
                  <p className={`mt-3 text-sm leading-7 text-zinc-400 transition-colors group-hover:text-inherit ${isContact ? "group-hover:text-zinc-700" : ""}`}>
                    {item.detail}
                  </p>
                </div>
              </Link>
                );
              })}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
