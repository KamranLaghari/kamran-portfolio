import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2, GraduationCap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { site } from "@/config/site";

export function Internships() {
  const reduce = useReducedMotion();
  const { title, description, roles, cta } = site.internships;

  return (
    <section id="internships" aria-labelledby="internships-title" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="gradient-border relative overflow-hidden rounded-3xl bg-card p-8 shadow-card sm:p-12"
        >
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-hero opacity-90" />
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 size-72 animate-drift rounded-full bg-violet/25 blur-3xl"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div className="min-w-0">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-primary">
                <span className="text-muted-foreground">05 /</span> Internships
              </p>
              <h2 id="internships-title" className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
                <span className="text-gradient">{title}</span>
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{description}</p>
              <Button asChild variant="hero" size="xl" className="mt-8">
                <a href="#contact">
                  {cta} <ArrowRight />
                </a>
              </Button>
            </div>

            <ul className="grid gap-3">
              {roles.map((role, i) => (
                <motion.li
                  key={role}
                  initial={reduce ? false : { opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                  className="glass card-interactive flex items-center gap-4 rounded-2xl border border-border p-4"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow">
                    {i === 0 ? <GraduationCap className="size-5" /> : <CheckCircle2 className="size-5" />}
                  </span>
                  <span className="font-medium">{role}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
