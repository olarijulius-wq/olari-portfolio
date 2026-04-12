import Link from "next/link";
import { footerNavigation } from "@/app/lib/navigation";
import { brandName, contactEmail, studioWordmark } from "@/app/lib/site";

export default function Footer() {
  return (
    <footer
      className="relative border-t border-white/[0.06] py-8 transition-colors hover:border-white/[0.09]"
      role="contentinfo"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 md:px-10 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="font-display text-xl text-white">{brandName}</p>
          <p className="mt-1 text-xs text-zinc-600">{studioWordmark}</p>
          <p className="mt-2 max-w-xl text-sm leading-7 text-zinc-500">
            Product-focused full-stack development for SaaS, booking flows, and fast MVP launches.
          </p>
          <a
            href={`mailto:${contactEmail}`}
            className="mt-3 inline-block text-sm text-zinc-400 underline decoration-white/20 underline-offset-4 transition hover:text-white"
          >
            {contactEmail}
          </a>
        </div>
        <div className="flex flex-col items-start gap-4 lg:items-end">
          <nav className="flex flex-wrap gap-3 text-sm text-zinc-500" aria-label="Footer">
            {footerNavigation.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
          <p
            className="text-xs text-zinc-700 transition-colors duration-300 hover:text-zinc-500"
            suppressHydrationWarning
          >
            {`© ${new Date().getFullYear()} Built with Next.js & Framer Motion.`}
          </p>
        </div>
      </div>
    </footer>
  );
}
