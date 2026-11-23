import { CalendarDays, GraduationCap, MapPin } from "lucide-react";

import { education } from "@/config/site";

import { Section } from "./section";

export function Education() {
  return (
    <Section id="education" index="04" eyebrow="Education" title="Where I studied." className="bg-surface">
      <div className="space-y-5">
        {education.map((e) => (
          <article
            key={e.degree + e.institution}
            className="reveal card-interactive gradient-border flex flex-col gap-6 rounded-2xl bg-card p-7 shadow-card sm:flex-row sm:items-center"
          >
            <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground shadow-glow">
              <GraduationCap className="size-7" />
            </span>
            <div className="flex-1">
              <h3 className="text-xl font-semibold sm:text-2xl">{e.degree}</h3>
              <p className="mt-1 text-lg text-muted-foreground">{e.institution}</p>
            </div>
            <div className="flex flex-col gap-2 font-mono text-sm text-muted-foreground sm:items-end">
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="size-4 text-primary" />
                {e.period}
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-4 text-primary" />
                {e.location}
              </span>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
