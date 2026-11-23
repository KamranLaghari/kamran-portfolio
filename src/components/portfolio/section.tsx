import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  index: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function Section({ id, index, eyebrow, title, intro, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("relative py-24 sm:py-32", className)} aria-labelledby={`${id}-title`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <header className="reveal mb-12 max-w-2xl sm:mb-16">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            <span className="text-muted-foreground">{index} /</span> {eyebrow}
          </p>
          <h2 id={`${id}-title`} className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            {title}
          </h2>
          {intro && <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
