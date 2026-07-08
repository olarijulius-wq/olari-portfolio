export type ProjectGalleryItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  status: string;
  liveUrl: string;
  caseStudy: {
    role: string;
    timeline: string;
    scope: string[];
    highlights: string[];
  };
  problem: string;
  approach: string;
  stack: string[];
  results: string[];
  summary: string;
  gallery: ProjectGalleryItem[];
};

export const projects: Project[] = [
  {
    slug: "glowel",
    title: "Glowel",
    tagline: "AI skincare web app that turns one photo into personalized insights.",
    year: "2026",
    status: "Live",
    liveUrl: "https://glowel.app",
    caseStudy: {
      role: "Product design and full-stack build",
      timeline: "Solo launch",
      scope: ["Landing page", "Camera scan flow", "Account gating", "Stripe upgrade path"],
      highlights: [
        "A one-photo scan flow keeps the first action obvious.",
        "Privacy messaging is repeated before users commit to a scan.",
        "The Pro path is simple enough to understand from the pricing section alone.",
      ],
    },
    summary:
      "Scan your skin from one photo, get a Skin Score with personalized insights.",
    problem:
      "Skincare research often pushes people into product overload before they understand what their skin likely needs, while photo-based tools can feel vague about privacy, limitations, and what happens after the scan.",
    approach:
      "I built the experience around one direct action: take or upload a clear face photo, then receive ingredient-first guidance and routine order without sponsored product noise. The landing page, account flow, pricing, and privacy messaging keep the product easy to understand before someone starts a scan.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Supabase"],
    results: [
      "Launched a live web app with a clear free-to-Pro path for recurring skincare scans.",
      "Created a guided camera-to-recommendation flow that sets expectations around privacy and analysis limits.",
      "Positioned the product around brand-neutral, ingredient-first guidance instead of generic product browsing.",
    ],
    gallery: [
      {
        src: "/projects/glowel-home.svg",
        alt: "Glowel landing page concept with skincare scan call to action and phone demo.",
        width: 1600,
        height: 1000,
      },
      {
        src: "/projects/glowel-routine.svg",
        alt: "Glowel scan and routine recommendation interface with concern chart and product steps.",
        width: 1600,
        height: 1000,
      },
    ],
  },
  {
    slug: "lateless",
    title: "Lateless",
    tagline: "Invoice SaaS that removes follow-up work from freelance billing.",
    year: "2026",
    status: "Live",
    liveUrl: "https://lateless.org",
    caseStudy: {
      role: "Product design and full-stack build",
      timeline: "Solo MVP",
      scope: ["Invoice workflow", "Stripe payments", "Automated reminders", "Analytics dashboard"],
      highlights: [
        "The invoice flow is built around fewer steps from draft to paid.",
        "Reminder automation reduces the need to manually chase every client.",
        "The dashboard keeps payment status and cash flow visible without extra reporting tools.",
      ],
    },
    summary:
      "Solo-built invoicing SaaS with Stripe payments, automated reminders, and a focused analytics surface for small businesses.",
    problem:
      "Freelancers and small teams lose time chasing invoices, checking payment status manually, and stitching together invoicing with reminders and reporting.",
    approach:
      "I designed a focused billing workflow around fast invoice creation, Stripe-backed payment collection, automated reminder sequences, and a simple dashboard that makes cash flow visible without accounting bloat.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Stripe", "Supabase", "Tailwind CSS"],
    results: [
      "Reduced the number of manual follow-up steps between sending an invoice and collecting payment.",
      "Shipped a complete solo MVP with product, payments, auth, database, and deployment under one codebase.",
      "Launched publicly with a clearer product story and social proof through Product Hunt.",
    ],
    gallery: [
      {
        src: "/projects/lateless-overview.svg",
        alt: "Lateless dashboard overview showing invoice status and payment metrics.",
        width: 1600,
        height: 1000,
      },
      {
        src: "/projects/lateless-invoices.svg",
        alt: "Lateless invoice management screen with timeline and reminder flow.",
        width: 1600,
        height: 1000,
      },
    ],
  },
  {
    slug: "naturestonia",
    title: "Naturestonia",
    tagline: "Booking-focused wildlife tourism and guiding website in Estonia.",
    year: "2026",
    status: "Live",
    liveUrl: "https://naturestonia.com",
    caseStudy: {
      role: "Website strategy and full-stack build",
      timeline: "Focused launch",
      scope: ["Marketing site", "Booking-focused content", "Wildlife guiding pages", "Responsive build"],
      highlights: [
        "The page structure keeps wildlife experiences and booking intent close together.",
        "The content is organized around practical visitor decisions.",
        "The site stays lightweight while still giving visitors a clear next step.",
      ],
    },
    summary:
      "Booking-focused wildlife tourism and guiding website in Estonia built with Next.js, TypeScript, and Tailwind CSS.",
    problem:
      "Naturestonia needed a website that could explain wildlife tourism and guiding options clearly, then move interested visitors toward booking without adding unnecessary platform weight.",
    approach:
      "I built a lean Next.js site around clear service content, booking-focused page structure, and responsive Tailwind layouts for visitors researching guided wildlife experiences in Estonia.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    results: [
      "Created a clearer path from discovery to booking intent for wildlife tourism visitors.",
      "Combined guiding context and practical booking information in one fast-loading site.",
      "Kept the build focused on the real visitor journey instead of unnecessary booking-platform complexity.",
    ],
    gallery: [
      {
        src: "/projects/looduskeskus-home.svg",
        alt: "Naturestonia homepage hero with wildlife tourism overview and booking intent.",
        width: 1600,
        height: 1000,
      },
      {
        src: "/projects/looduskeskus-amenities.svg",
        alt: "Naturestonia wildlife experience section designed for visitor confidence.",
        width: 1600,
        height: 1000,
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
