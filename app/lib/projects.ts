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
  problem: string;
  approach: string;
  stack: string[];
  results: string[];
  summary: string;
  gallery: ProjectGalleryItem[];
};

export const projects: Project[] = [
  {
    slug: "lateless",
    title: "Lateless",
    tagline: "Invoice SaaS that removes follow-up work from freelance billing.",
    year: "2026",
    status: "Live",
    liveUrl: "https://lateless.org",
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
