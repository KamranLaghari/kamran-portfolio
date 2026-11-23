import {
  Braces,
  Database,
  Layers,
  LayoutTemplate,
  Server,
  Smartphone,
  Sparkles,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import { skillGroups } from "@/config/site";

import { Section } from "./section";

const icons: Record<string, LucideIcon> = {
  languages: Braces,
  backend: Server,
  frontend: LayoutTemplate,
  mobile: Smartphone,
  database: Database,
  concepts: Layers,
  tools: Wrench,
  ai: Sparkles,
};

export function Skills() {
  return (
    <Section
      id="skills"
      index="02"
      eyebrow="Skills"
      title="The stack I work with."
      intro="From APIs and databases to mobile and web interfaces — the languages, frameworks and tools I use to ship."
      className="bg-surface"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = icons[group.id] ?? Wrench;
          return (
            <article
              key={group.id}
              className="reveal card-interactive group rounded-2xl border border-border bg-card p-6 shadow-card"
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow transition-transform group-hover:scale-110">
                  <Icon className="size-5" />
                </span>
                <h3 className="text-lg font-semibold">{group.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-secondary px-3 py-1 font-mono text-xs text-secondary-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
