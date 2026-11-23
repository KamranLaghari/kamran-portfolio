import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { site } from "@/config/site";

import { CodeWindow } from "./code-window";
import { ResumeButton } from "./resume-button";

export function Hero() {
  const reduce = useReducedMotion();
  const fadeUp = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-hero" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-24 size-96 animate-drift rounded-full bg-violet/20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_1fr]">
        <div className="min-w-0">
          <motion.div {...fadeUp(0)} className="mb-7 flex flex-wrap items-center gap-3">
            {site.status && (
              <a
                href="#internships"
                className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-primary/20"
              >
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75 motion-reduce:hidden" />
                  <span className="relative inline-flex size-2 rounded-full bg-primary" />
                </span>
                {site.status}
              </a>
            )}
            <span className="glass inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
              <MapPin className="size-3.5 text-primary" />
              {site.location}
            </span>
          </motion.div>

          <motion.p {...fadeUp(0.08)} className="mb-4 font-mono text-sm text-primary">
            {"// "}
            {site.title} · {site.specialization.join(" | ")}
          </motion.p>

          <motion.h1 {...fadeUp(0.14)} className="text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
            <Highlighted text={site.hero.greeting} highlight={site.hero.highlight} />
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="mt-5 text-xl font-medium leading-snug text-foreground/90 sm:text-2xl">
            {site.hero.tagline}
          </motion.p>

          <motion.p {...fadeUp(0.26)} className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {site.hero.intro}
          </motion.p>

          <motion.div {...fadeUp(0.32)} className="mt-9 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="xl">
              <a href="#projects">
                {site.hero.primaryCta} <ArrowRight />
              </a>
            </Button>
            <ResumeButton variant="glass" size="xl" label={site.hero.resumeCta} />
          </motion.div>
        </div>

        <motion.div {...fadeUp(0.4)} className="relative min-w-0">
          <div className="animate-float">
            <CodeWindow />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Highlighted({ text, highlight }: { text: string; highlight: string }) {
  const i = highlight ? text.indexOf(highlight) : -1;
  if (i < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, i)}
      <span className="text-gradient">{highlight}</span>
      {text.slice(i + highlight.length)}
    </>
  );
}
