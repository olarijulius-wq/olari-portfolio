import NotFoundContent from "@/components/NotFoundContent";
import PageShell from "@/components/PageShell";

/**
 * Global 404 for URLs that never enter a layout with PageShell (e.g. unmatched paths).
 * Routes under (site) use app/(site)/not-found.tsx instead so Navbar/Footer are not duplicated.
 */
export default function NotFound() {
  return (
    <PageShell>
      <NotFoundContent />
    </PageShell>
  );
}
