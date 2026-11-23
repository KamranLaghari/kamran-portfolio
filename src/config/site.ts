/**
 * All personal details, links and content for the portfolio live in this file.
 * Edit the values below — the whole site updates automatically.
 * Leave a link as an empty string ("") to show it as "Coming soon".
 */

export const site = {
  name: "Kamran Laghari",
  fullName: "Muhammad Kamran Laghari",
  initials: "KL",
  title: "Software Developer",
  specialization: ["Java Backend", "Full-Stack", "Mobile Applications"],
  location: "Islamabad, Pakistan",

  /** Put your resume at public/resume.pdf (or change this path). */
  resumeUrl: "/resume.pdf",
  resumeFileName: "Kamran-Laghari-Resume.pdf",

  /** Status badge shown in the hero. Set to "" to hide it. */
  status: "Open to Internship Opportunities",

  hero: {
    greeting: "Hi, I'm Kamran Laghari.",
    /** Part of the greeting shown in the blue-purple gradient. */
    highlight: "Kamran Laghari",
    tagline: "Building Scalable Backend Systems & Modern Applications.",
    intro:
      "I'm a Computer Science graduate passionate about software development, backend engineering, and mobile application development. I enjoy turning ideas into practical digital solutions using modern technologies.",
    primaryCta: "Explore My Projects",
    resumeCta: "Download My Resume",
  },

  about: [
    "I'm a Computer Science graduate interested in building reliable, scalable, and user-friendly applications. My main focus is backend engineering — designing clean REST APIs, modelling relational data and writing services that are easy to maintain.",
    "Alongside the backend, I build cross-platform mobile apps with Flutter, full-stack web applications with React, and I'm exploring AI-powered application development.",
    "I'm actively seeking internship opportunities where I can learn, contribute, and grow as a software developer.",
  ],

  /** Short highlights shown next to the About text. */
  highlights: [
    "Backend engineering",
    "REST API development",
    "Cross-platform mobile apps",
    "Database management",
    "Full-stack development",
    "AI-powered applications",
    "Problem-solving",
  ],

  interests: [
    { title: "Backend Engineering", text: "REST APIs with Java, Spring Boot and ASP.NET Core on top of well-designed relational databases." },
    { title: "Mobile Development", text: "Cross-platform apps with Flutter and Dart, backed by real APIs." },
    { title: "Full-Stack Development", text: "React frontends connected to services I design end to end." },
    { title: "AI-Powered Applications", text: "Building with AI features and AI-assisted development tools." },
  ],

  internships: {
    title: "Looking for Internship Opportunities",
    description:
      "I'm actively seeking internship opportunities in Java Backend Development, Full-Stack Development, and Mobile Application Development. I'm eager to apply my technical knowledge, work with experienced developers, contribute to real-world projects, and continuously improve my skills.",
    roles: [
      "Open to Java Backend Developer Internships",
      "Open to Full-Stack Developer Internships",
      "Open to Flutter / Mobile App Developer Internships",
    ],
    cta: "Let's Connect",
  },

  socials: {
    github: "https://github.com/KamranLaghari",
    linkedin: "https://www.linkedin.com/in/kamranlaghari/",
    whatsapp: "", // international number, digits only, e.g. "923001234567"
    email: "kamrannabilaghari@gmail.com",
  },
} as const;

export type SkillGroup = { id: string; title: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  { id: "backend", title: "Backend", items: ["Java", "Spring Boot", "C#", "ASP.NET Core", "Node.js", "REST APIs"] },
  { id: "frontend", title: "Frontend", items: ["React.js", "JavaScript", "HTML5", "CSS3"] },
  { id: "mobile", title: "Mobile", items: ["Flutter", "Dart"] },
  { id: "database", title: "Database", items: ["MySQL", "PostgreSQL", "SQL Server"] },
  { id: "tools", title: "Tools", items: ["Git", "GitHub", "Postman", "IntelliJ IDEA", "Visual Studio", "VS Code"] },
  {
    id: "ai",
    title: "AI",
    items: ["AI-powered application development", "AI-assisted coding", "AI integration concepts"],
  },
];

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  tech: string[];
  /** Leave empty ("") until the link exists. */
  github: string;
  demo: string;
};

/** Your GitHub profile — used for project GitHub buttons until a repo link is added. */
const githubProfile = "https://github.com/KamranLaghari";

export const projects: Project[] = [
  {
    id: "friend-locator",
    title: "Friend Locator with History",
    category: "Mobile + Backend",
    description:
      "A cross-platform mobile app for real-time location sharing between friends and family, backed by an ASP.NET Core Web API and SQL Server storage.",
    features: [
      "Real-time location sharing",
      "Location history tracking",
      "Group management",
      "Geofencing",
      "Notifications",
      "Permission-based tracking",
    ],
    tech: ["Flutter", "ASP.NET Core", "SQL Server"],
    // Replace with the repository URL, e.g. "https://github.com/KamranLaghari/friend-locator"
    github: githubProfile,
    demo: "",
  },
  {
    id: "java-rest-api",
    title: "Java REST API",
    category: "Backend",
    description: "A RESTful API in Java with full CRUD endpoints and MySQL persistence, tested end to end.",
    features: [
      "RESTful API development",
      "CRUD operations",
      "GET, POST, PUT and DELETE endpoints",
      "Database connectivity",
      "API testing",
    ],
    tech: ["Java", "MySQL"],
    github: githubProfile,
    demo: "",
  },
  {
    id: "leap-adventure",
    title: "Leap Adventure Game",
    category: "Web Game",
    description: "An interactive browser-based game with responsive gameplay and a modern interface.",
    features: ["Interactive browser-based game", "Responsive gameplay", "Modern user interface"],
    tech: ["Browser Game"],
    github: githubProfile,
    demo: "",
  },
];

export type Education = {
  degree: string;
  institution: string;
  location: string;
  period: string;
};

export const education: Education[] = [
  {
    degree: "Bachelor's Degree in Computer Science",
    institution: "Arid Agriculture University",
    location: "Rawalpindi, Pakistan",
    period: "2021 – 2025",
  },
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "internships", label: "Internships" },
  { id: "contact", label: "Contact" },
] as const;
