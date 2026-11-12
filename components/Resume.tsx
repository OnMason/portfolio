import Section from "@/components/Section";
import { resume } from "@/data/content";

export default function Resume() {
  return (
    <Section id="resume" title="Resume">
      <p className="max-w-2xl text-base leading-relaxed text-zinc-400">
        {resume.blurb}
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
        <a
          href={resume.file}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-zinc-700 px-4 py-2 font-medium text-zinc-100 transition-colors hover:border-zinc-400"
        >
          View PDF ↗
        </a>
        <a
          href={resume.file}
          download
          className="text-zinc-400 transition-colors hover:text-zinc-100"
        >
          Download
        </a>
      </div>
      <iframe
        src={`${resume.file}#view=FitH`}
        title="Resume preview"
        className="mt-10 hidden h-[900px] w-full rounded-lg border border-zinc-800 bg-zinc-900 md:block"
      />
    </Section>
  );
}
