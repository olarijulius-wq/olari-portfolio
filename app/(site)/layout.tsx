import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { defaultInnerPageDescription, defaultTitleTemplate } from "@/app/lib/metadata";

export const metadata: Metadata = {
  title: {
    template: defaultTitleTemplate,
    default: defaultTitleTemplate.replace("%s | ", ""),
  },
  description: defaultInnerPageDescription,
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageShell>{children}</PageShell>;
}
