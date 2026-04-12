import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Prose from "@/components/Prose";
import Reveal from "@/components/Reveal";
import { glassPanelInteractive } from "@/app/lib/glass";
import { createPageMetadata } from "@/app/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy",
  description: "Privacy information for the portfolio contact form and basic site usage.",
  path: "/legal/privacy",
});

export default function PrivacyPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Privacy"
        title="Simple privacy information for this site."
        description="This page covers the contact form and the limited information collected through it."
      />
      <section className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-20">
        <Reveal>
          <div className={`rounded-3xl p-8 md:p-10 ${glassPanelInteractive}`}>
            <Prose>
              <h2>Contact form data</h2>
              <p>
                When you submit the contact form, the site collects your name, email address, and
                message so I can respond to your inquiry.
              </p>
              <h2>How that information is used</h2>
              <p>
                The submitted information is used only for project communication and follow-up related
                to your inquiry.
              </p>
              <h2>Analytics and cookies</h2>
              <p>
                This site does not currently advertise additional analytics or marketing tracking on this
                page. If that changes, this section should be updated to reflect the actual tools in use.
              </p>
            </Prose>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
