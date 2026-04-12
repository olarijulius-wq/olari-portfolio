import { ImageResponse } from "next/og";
import {
  BRAND_MARK_OUTER_RECT,
  BRAND_MARK_PRIMARY_PATH,
  BRAND_MARK_SECONDARY_PATH,
  BRAND_MARK_VIEW_BOX,
} from "@/components/brand-mark";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
        }}
      >
        <svg
          width="512"
          height="512"
          viewBox={BRAND_MARK_VIEW_BOX}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="icon-gradient"
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
            fill="rgba(255,255,255,0.03)"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="1"
          />
          <path d={BRAND_MARK_PRIMARY_PATH} fill="url(#icon-gradient)" />
          <path
            d={BRAND_MARK_SECONDARY_PATH}
            fill="url(#icon-gradient)"
            fillOpacity="0.92"
          />
        </svg>
      </div>
    ),
    size,
  );
}
