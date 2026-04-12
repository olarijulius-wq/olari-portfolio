import type { ReactNode } from "react";

export default function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="prose prose-invert max-w-none prose-headings:font-display prose-headings:text-white prose-p:text-zinc-400 prose-p:leading-8 prose-strong:text-white prose-li:text-zinc-400 prose-a:text-white prose-a:decoration-white/30">
      {children}
    </div>
  );
}
