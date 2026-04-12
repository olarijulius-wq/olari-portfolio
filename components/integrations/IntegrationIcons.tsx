"use client";

import { useId } from "react";

function cn(...parts: (string | false | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

export function SupabaseIcon({ className }: { className?: string }) {
  const uid = useId().replace(/:/g, "");
  return (
    <svg
      viewBox="0 0 109 113"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      aria-hidden
    >
      <path
        d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
        fill={`url(#sbp0-${uid})`}
      />
      <path
        d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
        fill={`url(#sbp1-${uid})`}
        fillOpacity={0.2}
      />
      <path
        d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z"
        fill="#3ECF8E"
      />
      <defs>
        <linearGradient
          id={`sbp0-${uid}`}
          x1="53.9738"
          y1="54.974"
          x2="94.1635"
          y2="71.8295"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#249361" />
          <stop offset="1" stopColor="#3ECF8E" />
        </linearGradient>
        <linearGradient
          id={`sbp1-${uid}`}
          x1="36.1558"
          y1="30.578"
          x2="54.4844"
          y2="65.0806"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function VercelIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 256 222"
      className={cn("text-white", className)}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path fill="currentColor" d="m128 0 128 221.705H0z" />
    </svg>
  );
}

export function NextjsIcon({
  className,
  onDark,
}: {
  className?: string;
  /** White mark for dark / glass UI */
  onDark?: boolean;
}) {
  const uid = useId().replace(/:/g, "");
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 180 180"
      className={cn(className)}
      aria-hidden
    >
      <mask
        height="180"
        id={`nxm-${uid}`}
        maskUnits="userSpaceOnUse"
        width="180"
        x="0"
        y="0"
        style={{ maskType: "alpha" }}
      >
        <circle cx="90" cy="90" fill="black" r="90" />
      </mask>
      <g mask={`url(#nxm-${uid})`}>
        <circle
          cx="90"
          cy="90"
          data-circle="true"
          fill={onDark ? "rgba(255,255,255,0.12)" : "black"}
          r="90"
        />
        <path
          d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
          fill={onDark ? "white" : `url(#nxp0-${uid})`}
        />
        <rect
          fill={onDark ? "white" : `url(#nxp1-${uid})`}
          height="72"
          width="12"
          x="115"
          y="54"
        />
      </g>
      {!onDark && (
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`nxp0-${uid}`}
            x1="109"
            x2="144.5"
            y1="116.5"
            y2="160.5"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`nxp1-${uid}`}
            x1="121"
            x2="120.799"
            y1="54"
            y2="106.875"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      )}
    </svg>
  );
}

export function TypeScriptIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      aria-hidden
    >
      <path
        d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z"
        fill="#3178C6"
      />
      <path
        d="M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.151 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.96-1.266 11.187-3.352 15.678-6.257 4.492-2.906 8.048-6.704 10.669-11.394 2.62-4.689 3.93-10.486 3.93-17.391 0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898-3.945-2.33-8.394-4.531-13.347-6.602-3.628-1.497-6.881-2.949-9.761-4.359-2.879-1.41-5.327-2.848-7.342-4.316-2.016-1.467-3.571-3.021-4.665-4.661-1.094-1.64-1.641-3.495-1.641-5.567 0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547 2.591-.604 5.471-.906 8.638-.906 2.304 0 4.737.173 7.299.518 2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 0 1 7.558 2.719 41.7 41.7 0 0 1 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582-4.981-.777-10.697-1.165-17.147-1.165-6.565 0-12.784.705-18.658 2.115-5.874 1.409-11.043 3.61-15.506 6.602-4.463 2.993-7.99 6.805-10.582 11.437-2.591 4.632-3.887 10.17-3.887 16.615 0 8.228 2.375 15.248 7.127 21.06 4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0 1 10.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66 2.39 1.611 4.276 3.366 5.658 5.265 1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 0 1-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97-1.756 1.122-3.945 1.999-6.565 2.632-2.62.633-5.687.95-9.2.95-5.989 0-11.92-1.05-17.794-3.151-5.875-2.1-11.317-5.25-16.327-9.451Zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742Z"
        fill="#FFF"
      />
    </svg>
  );
}

export function ResendIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-white", className)}
      aria-hidden
    >
      <path
        d="M40 18c12.5 0 20 7.4 20 16.2 0 8.8-7.5 16.2-20 16.2h-7.2L54 54H41.6L28.3 41.2c-1.3-1.2-2-2.8-2-4.4 0-2.6 1.8-4.8 5.6-5.7l9.5-2.5c3.6-.9 6-3.8 6-8.1 0-5.4-4.3-8.7-10.9-8.7H18V18h22Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function StripeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 25"
      fill="currentColor"
      className={cn("text-zinc-200", className)}
      aria-hidden
    >
      <path d="M59.6 10.8c0-3.6-1.8-6.4-5.2-6.4-3.4 0-5.5 2.8-5.5 6.4 0 4.2 2.4 6.3 5.8 6.3 1.7 0 2.9-.4 3.9-.9v-2.8c-1 .5-2.1.8-3.5.8-1.4 0-2.6-.5-2.7-2.2h6.8c0-.2.4-1.2.4-2.2zm-6.8-.7c0-1.6 1-2.3 1.9-2.3s1.8.7 1.8 2.3h-3.7zM41.4 4.4c-1.4 0-2.3.6-2.8 1.1l-.2-.9h-3.1v16.8l3.5-.7V18c.5.4 1.3.9 2.6.9 2.6 0 5-2.1 5-6.7 0-4.2-2.4-6.3-4.9-6.3-.1.5-.1.5-.1.5zm-.9 9.7c-.9 0-1.4-.3-1.7-.7V8.9c.4-.4.9-.7 1.7-.7 1.3 0 2.2 1.5 2.2 3 0 1.5-.8 3-2.2 3zM34 3.5L30.5 4.3V1.5L27 2.3v14.1h3.5V8.2c.9-1.1 2.4-.9 2.9-.7V4.4c-.5-.2-2.1-.5-2.1-.5L34 3.5zM23.5 2.4l-3.5.7v13.3h3.5V2.4zM23.5 0l-3.5.7v2.8l3.5-.7V0zM17.5 5.7l-.2-1.3h-3v13.9h3.5V8.6c.8-1.1 2.2-1 2.6-.8V4.5c-.5-.2-2.1-.5-2.9 1.2zM10.5 7.4c0-.5.4-.8 1.1-.8.9 0 2.1.3 3 .8V4.6c-1-.4-2-.6-3-.6-3.1 0-5.1 1.6-5.1 4.3 0 4.2 5.8 3.5 5.8 5.3 0 .6-.5 1-1.4 1-1.2 0-2.7-.5-3.8-1.2v2.9c1.3.6 2.6.9 3.8.9 3.2 0 5.3-1.6 5.3-4.3 0-4.5-5.7-3.7-5.7-5.5z" />
    </svg>
  );
}
