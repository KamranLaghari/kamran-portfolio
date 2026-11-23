import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { navLinks } from "@/config/site";
import { cn } from "@/lib/utils";

import { Logo } from "./logo";
import { ResumeButton } from "./resume-button";
import { ThemeToggle } from "./theme-toggle";
import { useActiveSection } from "./use-active-section";

const ids = ["top", ...navLinks.map((l) => l.id)];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open ? "glass border-b border-border" : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Main">
        <Logo />

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors hover:text-foreground",
                  active === link.id ? "text-foreground" : "text-muted-foreground",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-gradient-brand transition-transform duration-300",
                    active === link.id ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <ResumeButton variant="hero" size="sm" className="hidden rounded-full px-4 sm:inline-flex" />
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border px-5 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-lg px-3 py-3 font-medium transition-colors hover:bg-accent",
                    active === link.id ? "text-primary" : "text-foreground",
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ResumeButton variant="hero" className="mt-3 w-full rounded-full sm:hidden" />
        </div>
      )}
    </header>
  );
}
