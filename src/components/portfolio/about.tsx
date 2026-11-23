import { Brain, Layers, Server, Smartphone } from "lucide-react";

import { site } from "@/config/site";

import { Section } from "./section";

const icons = [Server, Smartphone, Layers, Brain];

export function About() {
  return (
    <Section id="about" index="01" eyebrow="About" title={<>Computer Science graduate, <span className="text-gradient">backend at heart.</span></>}>
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div className="reveal space-y-5 text-lg leading-relaxed text-muted-foreground">
          {site.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <ul className="flex flex-wrap gap-2 pt-2" aria-label="Highlights">
            {site.highlights.map((h) => (
              <li
                key={h}
                className="rounded-full border border-border bg-secondary px-3 py-1 font-mono text-xs text-secondary-foreground"
              >
                {h}
              </li>
            ))}
          </ul>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {site.interests.map((item, i) => {
            const Icon = icons[i % icons.length] ?? Server;
            return (
              <li
                key={item.title}
                className="reveal card-interactive rounded-2xl border border-border bg-card p-5 shadow-card"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <span className="mb-4 grid size-10 place-items-center rounded-xl bg-accent text-primary">
                  <Icon className="size-5" />
                </span>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
