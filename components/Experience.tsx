import Section from "@/components/Section";
import { experience } from "@/data/content";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-6">
        {experience.map((job) => (
          <article
            key={`${job.role}-${job.company}`}
            className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-6 transition-colors hover:border-zinc-700"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold text-zinc-100">
                {job.role}{" "}
                <span className="font-normal text-zinc-400">
                  — {job.company}
                </span>
              </h3>
              <p className="shrink-0 text-sm text-zinc-500">
                {job.location ? `${job.location} | ${job.dates}` : job.dates}
              </p>
            </div>
            {job.bullets.length > 0 && (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-400">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
