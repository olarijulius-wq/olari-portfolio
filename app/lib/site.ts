const fallbackSiteUrl = "https://olarijulius.dev";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || fallbackSiteUrl
).replace(/\/$/, "");

export const personName = "Olari Julius Valdma";
export const brandName = "OJ Studio";
export const siteTitle = `${personName} | Full-Stack Developer in Estonia`;
export const siteDescription =
  "Portfolio website of Olari Julius Valdma, an Estonian full-stack developer building SaaS products, booking platforms, MVPs, and modern web apps with Next.js, AI workflows, and product-focused execution.";

export const socialLinks = [
  "https://github.com/olarijulius-wq",
  "https://www.linkedin.com/in/olari-julius-1a597a38b/",
  "https://www.upwork.com/freelancers/~01a0d137e6456690c1",
  "https://www.fiverr.com/julius_olari",
];

export const contactEmail = "hello@olarijulius.dev";
