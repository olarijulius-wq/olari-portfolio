type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="border-b border-white/[0.08]">
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-24 md:px-10 md:pb-16 md:pt-32">
        <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-600">
          {eyebrow}
        </p>
        <h1 className="font-display max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
          {description}
        </p>
      </div>
    </header>
  );
}
