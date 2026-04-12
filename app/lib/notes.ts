export type NoteSection = {
  heading: string;
  paragraphs: string[];
};

export type Note = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readingTime: string;
  sections: NoteSection[];
};

export const notes: Note[] = [
  {
    slug: "building-with-speed-without-faking-quality",
    title: "Building with speed without faking quality",
    description:
      "How I use tight scope, reusable systems, and AI-assisted development without shipping fragile work.",
    publishedAt: "2026-04-08",
    readingTime: "4 min read",
    sections: [
      {
        heading: "Speed is mostly scope control",
        paragraphs: [
          "Most slow projects are not blocked by typing speed. They are blocked by muddy decisions, too many optional features, and unclear ownership.",
          "The fastest builds I ship are the ones where the first version has a clear job and every screen is working toward that outcome.",
        ],
      },
      {
        heading: "AI helps when the structure is already sound",
        paragraphs: [
          "AI is useful for acceleration, not for replacing taste or technical judgment. I use it to compress implementation time once the architecture, constraints, and UX decisions are already coherent.",
          "That means I still care about types, boundaries, copy, failure states, and what happens when the first shortcut becomes a maintenance burden.",
        ],
      },
      {
        heading: "Quality shows up in boring places",
        paragraphs: [
          "Good work is visible in empty states, metadata, link structure, form errors, and handoff clarity. Those details are usually where rushed projects fall apart.",
          "If the product feels calm and obvious to use, the engineering underneath was probably disciplined.",
        ],
      },
    ],
  },
  {
    slug: "what-i-look-for-in-an-mvp-brief",
    title: "What I look for in an MVP brief",
    description:
      "The inputs I need before turning an idea into a build plan, scope, and launchable first version.",
    publishedAt: "2026-03-21",
    readingTime: "3 min read",
    sections: [
      {
        heading: "One user, one pain, one promise",
        paragraphs: [
          "A useful MVP brief names a specific user, a painful enough problem, and the promise the product should deliver in the first session.",
          "If that part is vague, the build usually expands in the wrong direction.",
        ],
      },
      {
        heading: "Constraints are part of the brief",
        paragraphs: [
          "Budget, launch deadline, existing tools, compliance needs, and required integrations all change the right technical shape of an MVP.",
          "The best brief is not the most detailed one. It is the one that exposes the real constraints early.",
        ],
      },
      {
        heading: "Shipping beats deckware",
        paragraphs: [
          "I would rather start with a narrower brief that gets to a real login, real workflow, and real users than a polished document with no delivery path.",
          "The first version should be small enough to ship and strong enough to learn from.",
        ],
      },
    ],
  },
];

export function getNoteBySlug(slug: string) {
  return notes.find((note) => note.slug === slug);
}
