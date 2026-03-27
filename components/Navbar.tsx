"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-auto"
      role="navigation"
      aria-label="Main navigation"
    >
      <div
        className={`flex items-center gap-1 px-2 py-2 rounded-full border transition-all duration-300 ${
          scrolled
            ? "bg-black/80 border-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
            : "bg-black/50 border-white/8 backdrop-blur-md"
        }`}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="px-4 py-2 text-sm font-semibold text-white tracking-tight cursor-pointer select-none"
          aria-label="Olari Julius — home"
        >
          OJ
        </a>

        {/* Divider */}
        <div className="w-px h-4 bg-white/10" />

        {/* Nav links — desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="px-4 py-2 text-sm text-zinc-400 hover:text-white rounded-full hover:bg-white/5 transition-all duration-200 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA button */}
        <a
          href="#contact"
          onClick={(e) => handleNav(e, "#contact")}
          className="hidden md:inline-flex ml-1 px-4 py-2 text-sm font-medium text-black bg-white rounded-full hover:bg-zinc-200 transition-colors duration-200 cursor-pointer"
        >
          Hire me
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden px-3 py-2 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            {menuOpen ? (
              <>
                <path d="M2 2L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M16 2L2 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            ) : (
              <>
                <path d="M2 5H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M2 9H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M2 13H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-black/90 border border-white/10 backdrop-blur-xl rounded-2xl py-2 shadow-xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="block px-5 py-3 text-sm text-zinc-400 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <div className="mx-4 my-2 border-t border-white/8" />
            <a
              href="#contact"
              onClick={(e) => handleNav(e, "#contact")}
              className="block mx-4 mb-1 px-4 py-2 text-sm font-medium text-center text-black bg-white rounded-full hover:bg-zinc-200 transition-colors cursor-pointer"
            >
              Hire me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
