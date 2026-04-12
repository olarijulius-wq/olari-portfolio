import Link from "next/link";

export default function NotFoundContent() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-32 text-center md:px-10">
      <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-600">404</p>
      <h1 className="mt-4 font-display text-5xl font-bold tracking-tight text-white">Page not found</h1>
      <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-zinc-400">
        The route you requested does not exist or has moved. Use the links below to get back to a live page.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Link
          href="/projects"
          className="inline-flex items-center rounded-full border border-white/[0.12] bg-white/[0.05] px-5 py-3 text-sm font-medium text-white transition hover:border-white/[0.22] hover:bg-white/[0.09]"
        >
          View projects
        </Link>
        <Link
          href="/"
          className="inline-flex items-center rounded-full px-5 py-3 text-sm font-medium text-zinc-400 transition hover:bg-white/[0.06] hover:text-white"
        >
          Go home
        </Link>
      </div>
    </section>
  );
}
