const normalizeUrl = (value: string) => value.replace(/\/$/, "");

const resolveSiteUrl = () => {
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL;

  if (configuredUrl) {
    const absoluteUrl = configuredUrl.startsWith("http")
      ? configuredUrl
      : `https://${configuredUrl}`;

    return normalizeUrl(absoluteUrl);
  }

  if (process.env.NODE_ENV === "production") {
    if (process.env.VERCEL === "1" || process.env.CI === "true") {
      throw new Error(
        "Missing site URL configuration. Set NEXT_PUBLIC_SITE_URL for production builds.",
      );
    }
  }

  return "http://localhost:3000";
};

export const siteUrl = resolveSiteUrl();

export const personName = "Olari Julius Valdma";
/** Shorter name variant for natural copy and structured data. */
export const personAlternateName = "Olari Valdma";
/** Primary site / entity label for metadata, OG, manifest, and footer. */
export const brandName = personName;
/** Visual wordmark in the nav mark; keeps “OJ Studio” as a studio label without replacing the person entity. */
export const studioWordmark = "OJ Studio";
export const manifestShortName = "Olari Valdma";
export const personGraphId = `${siteUrl}#person`;
export const websiteGraphId = `${siteUrl}#website`;
export const siteTitle = `${personName} | Full-Stack Developer in Estonia`;
export const siteDescription =
  "Olari Julius Valdma is an Estonian full-stack developer building SaaS products, MVPs, booking systems, and modern web apps with Next.js and AI-assisted workflows.";

export const socialLinks = [
  "https://github.com/olarijulius-wq",
  "https://www.linkedin.com/in/olari-julius-1a597a38b/",
  "https://www.upwork.com/freelancers/~01a0d137e6456690c1",
  "https://www.fiverr.com/julius_olari",
];

export const contactEmail = "hello@olarijulius.dev";
export const calendarUrl = process.env.NEXT_PUBLIC_CALENDAR_URL || "";
