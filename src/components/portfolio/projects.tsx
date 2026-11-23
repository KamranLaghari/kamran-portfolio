import { Code2, ExternalLink, Gamepad2, Github, MapPinned, type LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { projects, type Project } from "@/config/site";

import { Section } from "./section";

const icons: Record<string, LucideIcon> = {
  "friend-locator": MapPinned,
  "java-rest-api": Code2,
  "leap-adventure": Gamepad2,
};

export function Projects() {
  return (
    <Section
      id="projects"
      index="03"
      eyebrow="Projects"
      title="Selected work."
      intro="A few projects that show how I approach backend services, mobile apps and interactive web experiences."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} delay={(i % 3) * 90} />
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const Icon = icons[project.id] ?? Code2;
  return (
    <article
      className="reveal card-interactive group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative h-40 overflow-hidden bg-gradient-hero">
        <div aria-hidden className="absolute inset-0 bg-grid opacity-80" />
        <div className="absolute inset-0 grid place-items-center">
          <span className="grid size-16 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground shadow-glow transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
            <Icon className="size-7" />
          </span>
        </div>
        <span className="glass absolute left-4 top-4 rounded-full border border-border px-3 py-1 font-mono text-[11px] text-muted-foreground">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

        <ul className="mt-5 space-y-1.5">
          {project.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gradient-brand" />
              {f}
            </li>
          ))}
        </ul>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <li key={t} className="rounded-md bg-accent px-2 py-0.5 font-mono text-[11px] text-accent-foreground">
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex gap-2 pt-6">
          <ProjectLink href={project.github} label="GitHub" icon={<Github />} />
          <ProjectLink href={project.demo} label="Live demo" icon={<ExternalLink />} />
        </div>
      </div>
    </article>
  );
}

function ProjectLink({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  if (!href) {
    return (
      <Button variant="outline" size="sm" disabled className="flex-1 rounded-full" title={`${label} coming soon`}>
        {icon}
        {label} · soon
      </Button>
    );
  }
  return (
    <Button asChild variant="outline" size="sm" className="flex-1 rounded-full hover:border-primary/50 hover:text-primary">
      <a href={href} target="_blank" rel="noopener noreferrer">
        {icon}
        {label}
      </a>
    </Button>
  );
}
