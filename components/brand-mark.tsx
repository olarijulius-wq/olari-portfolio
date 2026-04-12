type BrandMarkProps = {
  className?: string;
  gradientId?: string;
};

export const BRAND_MARK_VIEW_BOX = "0 0 48 48";
export const BRAND_MARK_OUTER_RECT = {
  x: 1,
  y: 1,
  width: 46,
  height: 46,
  rx: 14,
} as const;

export const BRAND_MARK_PRIMARY_PATH =
  "M24 12c-5.5 0-10 4.2-10 9.5 0 3.2 1.6 6 4 7.7-1.1 2.4-2.5 4.1-4.2 5.1-.5.3-.7.9-.4 1.4.3.5 1 .6 1.5.3 2.3-1.4 4.1-3.6 5.4-6.2.8.2 1.6.2 2.5.2 5.5 0 10-4.2 10-9.5S29.5 12 24 12Zm0 3.5c3.7 0 6.7 2.7 6.7 6s-3 6-6.7 6-6.7-2.7-6.7-6 3-6 6.7-6Z";

export const BRAND_MARK_SECONDARY_PATH =
  "M30.5 28.2c-.4-.5-1.1-.6-1.6-.2-1.9 1.5-4.3 2.4-6.9 2.4h-.6l5.8 7.8c.4.5 1.1.6 1.6.2l1.2-.9c.5-.4.6-1.1.2-1.6l-4.7-6.3c2-.4 3.8-1.2 5.3-2.4.5-.4.6-1.1.2-1.6l-.5-.4Z";

export function BrandMark({
  className = "",
  gradientId = "brand-mark-gradient",
}: BrandMarkProps) {
  return (
    <svg
      width="36"
      height="36"
      viewBox={BRAND_MARK_VIEW_BOX}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="8"
          y1="6"
          x2="42"
          y2="44"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fafafa" />
          <stop offset="1" stopColor="#a1a1aa" />
        </linearGradient>
      </defs>
      <rect
        {...BRAND_MARK_OUTER_RECT}
        className="stroke-white/[0.12] fill-white/[0.03]"
        strokeWidth="1"
      />
      <path d={BRAND_MARK_PRIMARY_PATH} fill={`url(#${gradientId})`} />
      <path
        d={BRAND_MARK_SECONDARY_PATH}
        fill={`url(#${gradientId})`}
        fillOpacity="0.92"
      />
    </svg>
  );
}
