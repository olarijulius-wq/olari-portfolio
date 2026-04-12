"use client";

import { useId } from "react";
import { BrandMark } from "@/components/brand-mark";

type BrandLogoProps = {
  className?: string;
  /** Show full wordmark next to mark */
  showWordmark?: boolean;
};

/**
 * Personal mark: interlocking O + J — minimal, works at favicon and nav sizes.
 */
export default function BrandLogo({
  className = "",
  showWordmark = false,
}: BrandLogoProps) {
  const gid = useId().replace(/:/g, "");
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <BrandMark className="shrink-0" gradientId={`oj-mark-g-${gid}`} />
      {showWordmark && (
        <span className="text-sm font-semibold text-white tracking-tight leading-none">
          OJ Studio
        </span>
      )}
    </span>
  );
}
