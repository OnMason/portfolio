import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Section from "@/components/Section";
import { about, site } from "@/data/content";

export default function About() {
  // Rendered at build time: the photo appears automatically once
  // public/about.jpg exists; until then a neutral placeholder is shown.
  const photoExists = fs.existsSync(
    path.join(process.cwd(), "public", about.photo)
  );

  return (
    <Section id="about" title="About">
      <div className="grid items-start gap-10 md:grid-cols-[2fr_1fr]">
        <p className="text-base leading-relaxed text-zinc-400">
          {about.paragraph}
        </p>
        <div className="relative mx-auto aspect-[4/3] w-full max-w-sm overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 md:mx-0">
          {photoExists ? (
            <Image
              src={about.photo}
              alt={`Portrait of ${site.name}`}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 33vw, 100vw"
            />
          ) : (
            <div className="flex h-full items-center justify-center p-6 text-center text-xs text-zinc-600">
              Photo placeholder — add public/about.jpg
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
