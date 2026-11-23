import { site } from "@/config/site";

export function Logo() {
  return (
    <a href="#top" className="group flex items-center gap-2.5" aria-label={`${site.name} — back to top`}>
      <span className="grid size-9 place-items-center rounded-xl bg-gradient-brand font-mono text-sm font-bold text-primary-foreground shadow-glow transition-transform group-hover:rotate-6">
        {site.initials}
      </span>
      <span className="font-display text-base font-semibold tracking-tight">{site.name}</span>
    </a>
  );
}
