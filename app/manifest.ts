import type { MetadataRoute } from "next";
import { brandName, manifestShortName, siteDescription, siteUrl } from "@/app/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: brandName,
    short_name: manifestShortName,
    description: siteDescription,
    start_url: "/",
    display: "standalone",
    scope: "/",
    id: siteUrl,
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
