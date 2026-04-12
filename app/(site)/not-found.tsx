import NotFoundContent from "@/components/NotFoundContent";

/**
 * Rendered when notFound() is called from a route under (site).
 * Parent app/(site)/layout.tsx already wraps children in PageShell — do not nest another shell here.
 */
export default function SiteNotFound() {
  return <NotFoundContent />;
}
