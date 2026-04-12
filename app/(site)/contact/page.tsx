import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { createPageMetadata } from "@/app/lib/metadata";
import { calendarUrl, contactEmail } from "@/app/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description: "Send a project inquiry, email directly, or book a call if you want to discuss scope and timeline.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Contact"
        title="Start with the problem, the timeline, or the rough idea."
        description="The form posts to the site’s contact endpoint. If email delivery is unavailable, use the direct email fallback and I’ll still get the message."
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:px-10 md:py-20">
        <Reveal>
          <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8">
            <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-600">Send a message</p>
            <p className="mt-4 max-w-xl leading-8 text-zinc-400">
              Include what you’re building, what has to happen first, and what would make this project successful.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="space-y-5 rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-600">Fallback</p>
              <a
                href={`mailto:${contactEmail}`}
                className="mt-4 inline-block font-display text-3xl text-white underline decoration-white/20 underline-offset-8"
              >
                {contactEmail}
              </a>
            </div>
            {calendarUrl ? (
              <div className="border-t border-white/[0.08] pt-5">
                <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-600">Calendar</p>
                <a
                  href={calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center rounded-full border border-white/[0.12] bg-white/[0.05] px-4 py-2 text-sm font-medium text-white transition hover:border-white/[0.22] hover:bg-white/[0.09]"
                >
                  Book a call
                </a>
              </div>
            ) : null}
            <div className="border-t border-white/[0.08] pt-5">
              <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-600">What helps</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-zinc-400">
                <li>Current stage of the project or business.</li>
                <li>Main workflow that needs to exist in v1.</li>
                <li>Deadline, budget range, and any required integrations.</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
