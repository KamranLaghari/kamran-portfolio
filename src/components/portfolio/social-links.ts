import { Github, Linkedin, Mail, MessageCircle, type LucideIcon } from "lucide-react";

import { site } from "@/config/site";
import { whatsappLink } from "@/lib/contact";

export type SocialLink = { id: string; label: string; display: string; href: string; icon: LucideIcon };

export const socialLinks: SocialLink[] = [
  {
    id: "email",
    label: "Email",
    display: site.socials.email,
    href: site.socials.email ? `mailto:${site.socials.email}` : "",
    icon: Mail,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    display: site.socials.linkedin.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""),
    href: site.socials.linkedin,
    icon: Linkedin,
  },
  {
    id: "github",
    label: "GitHub",
    display: site.socials.github.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""),
    href: site.socials.github,
    icon: Github,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    display: site.socials.whatsapp ? "Message on WhatsApp" : "",
    href: whatsappLink(site.socials.whatsapp),
    icon: MessageCircle,
  },
];
