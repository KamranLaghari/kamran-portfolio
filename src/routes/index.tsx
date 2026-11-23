import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/portfolio/about";
import { Contact } from "@/components/portfolio/contact";
import { Education } from "@/components/portfolio/education";
import { Footer } from "@/components/portfolio/footer";
import { Hero } from "@/components/portfolio/hero";
import { Internships } from "@/components/portfolio/internships";
import { Navbar } from "@/components/portfolio/navbar";
import { Projects } from "@/components/portfolio/projects";
import { Skills } from "@/components/portfolio/skills";
import { useReveal } from "@/components/portfolio/use-reveal";
import { site } from "@/config/site";

const title = `${site.name} — ${site.title} | Open to Internships`;
const description = `${site.name} is a Computer Science graduate and software developer in ${site.location}, open to Java backend, full-stack and Flutter mobile internships.`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: site.fullName,
          jobTitle: site.title,
          address: { "@type": "PostalAddress", addressLocality: "Islamabad", addressCountry: "PK" },
          alumniOf: "Arid Agriculture University",
          sameAs: [site.socials.linkedin, site.socials.github].filter(Boolean),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Internships />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
