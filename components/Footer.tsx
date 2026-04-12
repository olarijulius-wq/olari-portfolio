export default function Footer() {
  return (
    <footer
      className="relative border-t border-white/[0.06] py-8"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-center">
        <p
          className="text-xs text-zinc-700 text-center"
          suppressHydrationWarning
        >
          {`© ${new Date().getFullYear()} Built with Next.js & Framer Motion.`}
        </p>
      </div>
    </footer>
  );
}
