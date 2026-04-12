"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  NextjsIcon,
  ResendIcon,
  StripeIcon,
  SupabaseIcon,
  TypeScriptIcon,
  VercelIcon,
} from "@/components/integrations/IntegrationIcons";

const pillNames = [
  "Next.js",
  "TypeScript",
  "Supabase",
  "Stripe",
  "Vercel",
  "Resend",
] as const;

function PillIcon({ name }: { name: (typeof pillNames)[number] }) {
  const c = "w-4 h-4 shrink-0";
  switch (name) {
    case "Next.js":
      return <NextjsIcon className={c} onDark />;
    case "TypeScript":
      return <TypeScriptIcon className={c} />;
    case "Supabase":
      return <SupabaseIcon className={c} />;
    case "Stripe":
      return <StripeIcon className={c} />;
    case "Vercel":
      return <VercelIcon className={`${c} scale-90`} />;
    case "Resend":
      return <ResendIcon className={c} />;
    default:
      return null;
  }
}

const floats: {
  x: number[];
  y: number[];
  duration: number;
  delay: number;
}[] = [
  { x: [0, 12, -6, 0], y: [0, -10, 6, 0], duration: 11, delay: 0 },
  { x: [0, -14, 8, 0], y: [0, 8, -12, 0], duration: 13, delay: 0.4 },
  { x: [0, 10, -12, 0], y: [0, -8, 10, 0], duration: 12, delay: 0.8 },
  { x: [0, -8, 14, 0], y: [0, 12, -8, 0], duration: 14, delay: 0.2 },
  { x: [0, 14, -10, 0], y: [0, -6, 8, 0], duration: 10.5, delay: 0.6 },
  { x: [0, -12, 6, 0], y: [0, 10, -10, 0], duration: 15, delay: 1 },
];

function Pill({ name, i }: { name: (typeof pillNames)[number]; i: number }) {
  const reduce = useReducedMotion();
  const f = floats[i % floats.length];

  return (
    <motion.div
      className="absolute"
      style={{
        left: `${[6, 72, 38, 88, 18, 55][i % 6]}%`,
        top: `${[8, 22, 48, 12, 62, 78][i % 6]}%`,
      }}
      animate={
        reduce
          ? undefined
          : {
              x: f.x,
              y: f.y,
            }
      }
      transition={{
        duration: f.duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: f.delay,
      }}
    >
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
        className="flex cursor-default items-center gap-2 rounded-2xl border-2 border-white/5 bg-[linear-gradient(104deg,rgba(253,253,253,0.05)_5%,rgba(240,240,228,0.1)_100%)] py-1.5 pl-2.5 pr-3 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-[25px] transition-all duration-200 hover:scale-105 hover:border-white hover:shadow-[0_0_32px_rgba(255,255,255,0.12)]"
      >
        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-black/40 border border-white/[0.06]">
          <PillIcon name={name} />
        </span>
        <span className="text-[11px] font-semibold text-zinc-300 tracking-wide whitespace-nowrap">
          {name}
        </span>
      </motion.div>
    </motion.div>
  );
}

/**
 * Absolutely positioned within a relative parent — drifts like a premium SaaS marketing hero.
 */
export default function FloatingIntegrationPills() {
  return (
    <div
      className="absolute inset-0 pointer-events-none hidden lg:pointer-events-auto lg:block"
      aria-hidden
    >
      {pillNames.map((name, i) => (
        <Pill key={name} name={name} i={i} />
      ))}
    </div>
  );
}
