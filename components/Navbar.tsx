"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BrandLogo from "@/components/BrandLogo";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    // Matches resend.com: sticky, transparent until scrolled, then blurred dark border-b
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/[0.08] bg-black/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Desktop — 58px height, exactly resend.com */}
        <div className="hidden h-[58px] md:flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="cursor-pointer select-none text-left"
            aria-label="Scroll to top"
          >
            <BrandLogo />
          </button>

          {/* Centre nav links */}
          <nav className="flex items-center" aria-label="Main navigation">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                className="h-10 my-auto flex items-center mx-1 px-3 rounded-lg text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/[0.06] active:scale-[0.97] transition-all duration-200 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                {l.label}
              </button>
            ))}
          </nav>

          {/* Right CTAs — resend.com pattern: Log In ghost + Get Started frosted */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => go("#work")}
              className="text-sm font-semibold text-zinc-400 hover:text-white transition-all duration-200 cursor-pointer px-4 h-10 rounded-lg hover:bg-white/[0.06] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              View work
            </button>
            <button
              onClick={() => go("#contact")}
              className="relative inline-flex items-center justify-center text-white border-[2px] border-white/5 backdrop-blur-[25px] bg-[linear-gradient(104deg,rgba(253,253,253,0.05)_5%,rgba(240,240,228,0.1)_100%)] hover:bg-white hover:text-black hover:border-white hover:shadow-[0_0_32px_rgba(255,255,255,0.15)] active:scale-[0.98] transition-all duration-200 rounded-2xl px-4 h-10 text-sm font-semibold cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              aria-label="Get in touch"
            >
              Get in touch
            </button>
          </div>
        </div>

        {/* Mobile — 56px */}
        <div className="flex h-14 md:hidden items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="cursor-pointer select-none"
            aria-label="Scroll to top"
          >
            <BrandLogo />
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="w-10 h-10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors cursor-pointer rounded-lg hover:bg-white/5"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              {open ? (
                <>
                  <path d="M4 4L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </>
              ) : (
                <>
                  <path d="M3 6h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M3 10h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M3 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-white/[0.08] bg-black/90 backdrop-blur-xl"
          >
            <nav className="flex flex-col px-6 py-3 gap-0.5" aria-label="Mobile navigation">
              {links.map((l) => (
                <button
                  key={l.href}
                  onClick={() => go(l.href)}
                  className="text-sm text-zinc-400 hover:text-white py-3 px-2 -mx-2 rounded-lg text-left transition-all duration-200 cursor-pointer hover:bg-white/[0.06] active:scale-[0.99]"
                >
                  {l.label}
                </button>
              ))}
              <div className="pt-3 pb-1 border-t border-white/[0.08] mt-2">
                <button
                  onClick={() => go("#contact")}
                  className="w-full py-2.5 text-sm font-semibold text-white border-[2px] border-white/5 bg-[linear-gradient(104deg,rgba(253,253,253,0.05)_5%,rgba(240,240,228,0.1)_100%)] hover:bg-white hover:text-black hover:shadow-[0_0_28px_rgba(255,255,255,0.12)] active:scale-[0.99] rounded-2xl transition-all duration-200 cursor-pointer"
                >
                  Get in touch
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
