import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Prose from "@/components/Prose";
import Reveal from "@/components/Reveal";
import { createPageMetadata } from "@/app/lib/metadata";
import {
  personAlternateName,
  personGraphId,
  personName,
  siteUrl,
  websiteGraphId,
} from "@/app/lib/site";

const aboutTitle = "About";
const aboutHeading = `About ${personName}`;
const aboutDescription =
  "Background, experience, and working style of Olari Julius Valdma, Estonian full-stack developer and product-minded builder.";

export const metadata: Metadata = createPageMetadata({
  title: aboutTitle,
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
      name: aboutTitle,
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
        description="Background, how I work end to end, and the kinds of products I like shipping — from SaaS and booking flows to fast MVPs."
      />
      <section className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-20">
        <Reveal>
          <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 md:p-10">
            <Prose>
              <p>
                I&apos;m {personName}, an Estonian full-stack developer also referred to as{" "}
                {personAlternateName} in shorter contexts. This page is the profile anchor for who I
                am and how I work: product-minded engineering with a bias toward finished software, not
                handoff theatre.
              </p>
              <p>
                I focus on SaaS products, booking systems, and fast-moving MVP work — projects where
                the value is clear, the scope can be disciplined, and shipping matters more than
                ceremony. My default mode is end-to-end ownership: product thinking, implementation,
                deployment, form flows, metadata, and the details that usually get left behind when
                too many people touch a small build.
              </p>
              <h2>Principles</h2>
              <ul>
                <li>Scope the first version around one core workflow.</li>
                <li>Ship real integrations instead of speculative architecture.</li>
                <li>Keep the interface calm, fast, and obvious to use.</li>
                <li>Document enough for the next decision, not just the last one.</li>
              </ul>
              <h2>Explore</h2>
              <p>
                <Link href="/projects">Projects and case studies</Link>
                {" · "}
                <Link href="/services">Services and scopes</Link>
                {" · "}
                <Link href="/notes">Notes</Link>
                {" · "}
                <Link href="/contact">Contact</Link>
              </p>
            </Prose>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
