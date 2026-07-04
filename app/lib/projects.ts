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
    tagline: "Skincare guidance app that turns one photo into a clear routine.",
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
      "Privacy-minded skincare web app with a camera-based scan flow, brand-neutral product guidance, free scan quota, and a Stripe-backed Pro path.",
    problem:
      "Skincare research often pushes people into product overload before they understand what their skin likely needs, while photo-based tools can feel vague about privacy, limitations, and what happens after the scan.",
    approach:
      "I built the experience around one direct action: take or upload a clear face photo, then receive ingredient-first guidance and routine order without sponsored product noise. The landing page, account flow, pricing, and privacy messaging keep the product easy to understand before someone starts a scan.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Stripe Checkout",
      "Camera upload flow",
      "Responsive product design",
    ],
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
    slug: "looduskeskus",
    title: "Looduskeskus",
    tagline: "Nature stay booking site built to turn quiet traffic into confirmed stays.",
    year: "2026",
    status: "Live",
    liveUrl: "https://naturestonia.com",
    caseStudy: {
      role: "Website strategy and full-stack build",
      timeline: "Focused launch",
      scope: ["Marketing site", "Booking inquiry flow", "Amenity storytelling", "Email notifications"],
      highlights: [
        "The page structure answers practical guest questions before the inquiry step.",
        "Direct form submission keeps booking conversations under the operator's control.",
        "The site avoids booking-platform weight while still giving visitors a clear next step.",
      ],
    },
    summary:
      "Booking-focused website for a nature accommodation business with amenity storytelling, inquiry flow, and email notifications.",
    problem:
      "The business needed a site that could explain the location clearly, answer common guest questions, and convert interest into direct booking inquiries without relying on a heavy booking platform.",
    approach:
      "I built a lean marketing and booking experience with clear accommodation details, trust-building content, and a direct contact flow that keeps the operator in control of guest communication.",
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS", "Resend", "Responsive content design"],
    results: [
      "Created a clearer decision path from discovery to inquiry for prospective guests.",
      "Combined storytelling, amenities, and practical booking details in one fast-loading site.",
      "Set up direct form-based communication with email notifications instead of adding unnecessary platform complexity.",
    ],
    gallery: [
      {
        src: "/projects/looduskeskus-home.svg",
        alt: "Looduskeskus homepage hero with lodging overview and booking intent.",
        width: 1600,
        height: 1000,
      },
      {
        src: "/projects/looduskeskus-amenities.svg",
        alt: "Looduskeskus amenities and experience section designed for guest confidence.",
        width: 1600,
        height: 1000,
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
