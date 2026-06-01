/**
 * Shared “Get in touch” glass: gradient fill, 2px hairline border, blur, 200ms hover to white + glow.
 * Use `glassCta` for buttons/links that invert to white on hover; `glassPanelInteractive` for large cards.
 */
const blur = "backdrop-blur-[25px]";
const borderBase = "border-2 border-white/5";
const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black";

const glassCtaVisual = [
  borderBase,
  blur,
  "bg-[linear-gradient(104deg,rgba(253,253,253,0.05)_5%,rgba(240,240,228,0.1)_100%)]",
  "font-semibold text-white",
  "transition-all duration-200",
  "hover:border-white hover:bg-white hover:text-black hover:shadow-[0_0_32px_rgba(255,255,255,0.15)]",
  focusRing,
].join(" ");

export const glassCta = [
  "inline-flex items-center justify-center",
  glassCtaVisual,
  "active:scale-[0.98]",
].join(" ");

/** CTA glass on large links/cards — same look as `glassCta`, top-aligned content (no centering). */
export const glassCtaCard = ["flex flex-col items-start", glassCtaVisual, "active:scale-[0.995]"].join(" ");

/** Secondary control: same glass frame, lighter hover (no full invert). */
export const glassGhost = [
  "inline-flex items-center justify-center",
  borderBase,
  blur,
  "bg-[linear-gradient(104deg,rgba(253,253,253,0.03)_5%,rgba(240,240,228,0.06)_100%)]",
  "font-medium text-zinc-400",
  "transition-all duration-200",
  "hover:border-white hover:bg-white/[0.08] hover:text-white hover:shadow-[0_0_28px_rgba(255,255,255,0.1)]",
  "active:scale-[0.98]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
].join(" ");

/** Surfaces (cards, form shells): border glow + lift, no text invert. */
export const glassPanelInteractive = [
  borderBase,
  blur,
  "bg-[linear-gradient(104deg,rgba(253,253,253,0.05)_5%,rgba(240,240,228,0.08)_100%)]",
  "transition-all duration-200",
  "hover:border-white hover:shadow-[0_0_32px_rgba(255,255,255,0.12)]",
  "hover:bg-[linear-gradient(104deg,rgba(253,253,253,0.08)_5%,rgba(240,240,228,0.11)_100%)]",
  "active:scale-[0.995]",
].join(" ");

export const glassField = [
  "rounded-2xl border-2 border-white/5 bg-black/60 px-4 py-3 text-white placeholder:text-zinc-600",
  blur,
  "transition-all duration-200",
  "hover:border-white/15",
  "focus:border-white focus:shadow-[0_0_24px_rgba(255,255,255,0.08)] focus:outline-none",
].join(" ");
