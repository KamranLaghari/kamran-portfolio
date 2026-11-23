import { ArrowUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { site } from "@/config/site";

import { Logo } from "./logo";
import { socialLinks } from "./social-links";

const footerSocials = socialLinks.filter((s) => (s.id === "github" || s.id === "linkedin") && s.href);

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <Logo />
          <p className="text-sm text-muted-foreground">
            {site.name} | {site.title}
          </p>
        </div>
        <ul className="flex items-center gap-2">
          {footerSocials.map(({ id, label, href, icon: Icon }) => (
            <li key={id}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
              >
                <Icon className="size-4" />
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {year} {site.name}. All rights reserved.
          </p>
          <Button asChild variant="outline" size="icon" className="rounded-full hover:border-primary/50 hover:text-primary">
            <a href="#top" aria-label="Back to top">
              <ArrowUp />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
