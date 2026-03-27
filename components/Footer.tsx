"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-10 border-t border-white/6">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-zinc-700">
          © {year} Olari Julius. Built with Next.js & Framer Motion.
        </p>
        <p className="text-xs text-zinc-700">
          Estonia 🇪🇪
        </p>
      </div>
    </footer>
  );
}
