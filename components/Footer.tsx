"use client";

const footerLinks = [
  {
    group: "Work",
    links: [
      { label: "Lateless", href: "https://lateless.org" },
      { label: "Naturestonia", href: "https://naturestonia.com" },
    ],
  },
  {
    group: "Connect",
    links: [
      { label: "GitHub", href: "https://github.com/olarijulius" },
      { label: "LinkedIn", href: "https://linkedin.com/in/olarijulius" },
      { label: "Upwork", href: "https://www.upwork.com/" },
    ],
  },
  {
    group: "Site",
    links: [
      { label: "Work", href: "#work" },
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNav = (href: string) => {
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      className="relative border-t border-white/[0.08]"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-sm font-semibold text-white tracking-tight cursor-pointer mb-3 block text-left"
            >
              Olari Julius
            </button>
            <p className="text-sm text-zinc-600 leading-relaxed max-w-[180px]">
              Full-stack developer from Estonia.
            </p>
          </div>

          {/* Link groups */}
          {footerLinks.map((group) => (
            <div key={group.group}>
              <p className="text-[11px] text-zinc-600 uppercase tracking-[0.15em] font-medium mb-4">
                {group.group}
              </p>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("#") ? (
                      <button
                        onClick={() => handleNav(link.href)}
                        className="text-sm text-zinc-500 hover:text-white transition-colors duration-150 cursor-pointer"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-zinc-500 hover:text-white transition-colors duration-150"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-zinc-700">
            © {year} Olari Julius. Built with Next.js &amp; Framer Motion.
          </p>
          <p className="text-xs text-zinc-700">Estonia</p>
        </div>
      </div>
    </footer>
  );
}
