import { hero, site } from "@/data/content";

export default function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
      <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-zinc-100 sm:text-4xl md:text-5xl">
        {hero.headline}
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
        {hero.subheadline}
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-4 text-sm">
        <a
          href={`mailto:${site.email}`}
          className="rounded-md border border-zinc-700 px-4 py-2 font-medium text-zinc-100 transition-colors hover:border-zinc-400"
        >
          Get in touch
        </a>
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 transition-colors hover:text-zinc-100"
        >
          GitHub ↗
        </a>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 transition-colors hover:text-zinc-100"
        >
          LinkedIn ↗
        </a>
      </div>
    </section>
  );
}
