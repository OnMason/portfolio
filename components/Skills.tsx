import Section from "@/components/Section";
import { skillGroups } from "@/data/content";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="space-y-10">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm font-medium uppercase tracking-wider text-zinc-500">
              {group.title}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-baseline gap-2 rounded-md border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 transition-colors hover:border-zinc-600"
                >
                  <span className="text-sm text-zinc-200">{skill.name}</span>
                  <span className="text-xs text-zinc-500">{skill.level}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
