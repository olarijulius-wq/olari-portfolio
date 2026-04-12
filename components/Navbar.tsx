"use client";

import { useEffect, useState, type MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import BrandLogo from "@/components/BrandLogo";
import { glassCta, glassGhost } from "@/app/lib/glass";
import { homeSectionLinks, primaryNavigation } from "@/app/lib/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /** After client navigation to `/#section`, scroll to the target (hash click alone is not enough from other routes). */
  useEffect(() => {
    if (pathname !== "/") return;
    const id = window.location.hash.slice(1);
    if (!id) return;
    const el = document.getElementById(id);
    if (!el) return;
    const raf = requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: "smooth" });
    });
    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  const handleHashLink = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    setOpen(false);
    if (!href.includes("#")) return;
    const [pathPart, hash] = href.split("#");
    if (!hash) return;
    const base = pathPart === "" ? "/" : pathPart;
    if (base === "/" && pathname === "/") {
      event.preventDefault();
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/[0.08] bg-black/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="hidden h-[58px] items-center justify-between md:flex">
          <Link href="/" className="cursor-pointer select-none text-left" aria-label="Go to homepage">
            <BrandLogo />
          </Link>

          <nav className="flex items-center gap-0.5" aria-label="Main navigation">
            {primaryNavigation.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="my-auto flex h-10 items-center rounded-lg px-3 text-sm font-medium text-zinc-400 transition-all duration-200 hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/#work"
              onClick={(event) => handleHashLink(event, "/#work")}
              className={`${glassGhost} h-10 rounded-2xl px-4 text-sm`}
            >
              View work
            </Link>
            <Link
              href="/contact"
              className={`${glassCta} relative h-10 px-4 text-sm rounded-2xl`}
              aria-label="Get in touch"
            >
              Get in touch
            </Link>
          </div>
        </div>

        <div className="flex h-14 items-center justify-between md:hidden">
          <Link href="/" className="cursor-pointer select-none" aria-label="Go to homepage">
            <BrandLogo />
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              {open ? (
                <>
                  <path d="M4 4L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <path d="M3 6h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M3 10h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M3 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-white/[0.08] bg-black/90 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col gap-0.5 px-6 py-3" aria-label="Mobile navigation">
              {primaryNavigation.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-3 text-left text-sm text-zinc-400 transition-all duration-200 hover:bg-white/[0.06] hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 border-t border-white/[0.08] pt-3">
                <p className="px-2 pb-2 text-[11px] uppercase tracking-[0.18em] text-zinc-600">
                  Home sections
                </p>
                {homeSectionLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(event) => handleHashLink(event, link.href)}
                    className="block rounded-lg px-2 py-3 text-sm text-zinc-500 transition-all duration-200 hover:bg-white/[0.06] hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-2 border-t border-white/[0.08] pb-1 pt-3">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className={`${glassCta} w-full justify-center rounded-2xl py-2.5 text-center text-sm`}
                >
                  Get in touch
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
