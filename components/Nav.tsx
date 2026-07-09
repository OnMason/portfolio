import { navLinks, site } from "@/data/content";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
        <a
          href="#top"
          className="whitespace-nowrap font-semibold tracking-tight text-zinc-100 hover:text-white"
        >
          <span className="sm:hidden">{site.shortName}</span>
          <span className="hidden sm:inline">{site.name}</span>
        </a>
        <div className="flex items-center gap-4 text-xs sm:gap-6 sm:text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-zinc-400 transition-colors hover:text-zinc-100"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${site.email}`}
            className="hidden text-zinc-400 transition-colors hover:text-zinc-100 md:inline"
          >
            {site.email}
          </a>
        </div>
      </nav>
    </header>
  );
}
