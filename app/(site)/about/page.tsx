import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Prose from "@/components/Prose";
import Reveal from "@/components/Reveal";
import { createPageMetadata } from "@/app/lib/metadata";
import { glassPanelInteractive } from "@/app/lib/glass";
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
  "Background, experience, and working style of Olari Julius Valdma, Estonian full-stack developer and product-minded builder.";

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
        description="Background, how I work end to end, and the kinds of products I like shipping — from SaaS and booking flows to fast MVPs."
      />
      <section className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-20">
        <Reveal>
          <div className={`rounded-3xl p-8 md:p-10 ${glassPanelInteractive}`}>
            <Prose>
              <p>
                I&apos;m {personName}, an Estonian full-stack developer — you may also see{" "}
                {personAlternateName}. This page is the long-form profile: how I work, what I optimize
                for, and the kind of builds I take on.
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
                <Link href="/contact">Contact</Link>
              </p>
            </Prose>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
