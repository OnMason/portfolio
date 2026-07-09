import { site } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-10 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="text-zinc-400">{site.name}</p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a
            href={`mailto:${site.email}`}
            className="text-zinc-500 transition-colors hover:text-zinc-200"
          >
            {site.email}
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition-colors hover:text-zinc-200"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition-colors hover:text-zinc-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
