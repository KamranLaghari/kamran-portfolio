import { Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/config/site";
import { buildMailtoLink, contactSchema, type ContactInput } from "@/lib/contact";
import { cn } from "@/lib/utils";

import { Section } from "./section";
import { socialLinks } from "./social-links";

type Errors = Partial<Record<keyof ContactInput, string>>;
const empty: ContactInput = { name: "", email: "", subject: "", message: "" };

export function Contact() {
  const [values, setValues] = useState<ContactInput>(empty);
  const [errors, setErrors] = useState<Errors>({});

  const update = (key: keyof ContactInput) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(values);
    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof ContactInput;
        next[key] ??= issue.message;
      }
      setErrors(next);
      return;
    }
    if (!site.socials.email) {
      toast.error("Contact email isn't set up yet.");
      return;
    }
    window.location.href = buildMailtoLink(site.socials.email, result.data);
    toast.success("Opening your email app…", { description: "Your message is ready — just press send." });
    setValues(empty);
  };

  return (
    <Section
      id="contact"
      index="06"
      eyebrow="Contact"
      title={<>Let's build something <span className="text-gradient">together.</span></>}
      intro="Have a role, project or idea in mind? Send a message and I'll get back to you."
      className="bg-surface"
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.35fr]">
        <ul className="reveal space-y-3">
          {socialLinks.map(({ id, label, display, href, icon: Icon }) => {
            const inner = (
              <>
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-gradient-brand group-hover:text-primary-foreground">
                  <Icon className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm text-muted-foreground">{label}</span>
                  <span className="block truncate font-medium">{href ? display : "Coming soon"}</span>
                </span>
              </>
            );
            const base = "group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-card";
            return (
              <li key={id}>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className={cn(base, "card-interactive")}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className={cn(base, "opacity-60")}>{inner}</div>
                )}
              </li>
            );
          })}
        </ul>

        <form
          onSubmit={onSubmit}
          noValidate
          className="reveal gradient-border space-y-5 rounded-2xl bg-card p-6 shadow-card sm:p-8"
          aria-label="Contact form"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="name" label="Name" error={errors.name}>
              <Input id="name" autoComplete="name" maxLength={100} value={values.name} onChange={update("name")} placeholder="Your name" aria-invalid={!!errors.name} className="h-11" />
            </Field>
            <Field id="email" label="Email" error={errors.email}>
              <Input id="email" type="email" autoComplete="email" maxLength={255} value={values.email} onChange={update("email")} placeholder="you@company.com" aria-invalid={!!errors.email} className="h-11" />
            </Field>
          </div>
          <Field id="subject" label="Subject" error={errors.subject}>
            <Input id="subject" maxLength={150} value={values.subject} onChange={update("subject")} placeholder="What's this about?" aria-invalid={!!errors.subject} className="h-11" />
          </Field>
          <Field id="message" label="Message" error={errors.message}>
            <Textarea id="message" rows={6} maxLength={2000} value={values.message} onChange={update("message")} placeholder="Tell me a little about your project or role…" aria-invalid={!!errors.message} />
          </Field>
          <Button type="submit" variant="hero" size="xl" className="w-full sm:w-auto">
            Send message <Send />
          </Button>
        </form>
      </div>
    </Section>
  );
}

function Field({ id, label, error, children }: { id: string; label: string; error?: string | undefined; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
}
