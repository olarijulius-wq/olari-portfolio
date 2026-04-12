import type { Metadata } from "next";
import { brandName, personName, siteDescription, siteTitle, siteUrl } from "@/app/lib/site";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
};

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export function createPageMetadata({
  title,
  description,
  path,
  type = "website",
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${title} | ${personName}`,
      description,
      url,
      type,
      siteName: brandName,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${personName}`,
      description,
    },
  };
}

export const defaultInnerPageDescription = siteDescription;
export const defaultTitleTemplate = `%s | ${personName}`;
export const defaultOpenGraphImage = absoluteUrl("/icon");
export const rootTitle = siteTitle;
