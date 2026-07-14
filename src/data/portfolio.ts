export const navigation = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const projects = [
  {
    index: "01",
    title: "CodeFlow Intelligence",
    category: "Developer tooling",
    description:
      "A development activity platform that connects a VS Code extension with a web dashboard for real-time tracking, authentication, charts, and coding insights.",
    technologies: ["Next.js", "TypeScript", "Prisma", "VS Code API"],
    href: "https://github.com/Nirvik30/CodeFlow-Intelligence",
    visual: "codeflow",
  },
  {
    index: "02",
    title: "CRM Workspace",
    category: "Product systems",
    description:
      "An authenticated CRM foundation built as a modern monorepo, with a structured dashboard, Supabase-backed sessions, and a reusable component system.",
    technologies: ["Next.js", "Supabase", "Turborepo", "TypeScript"],
    href: "https://github.com/Nirvik30/crm",
    visual: "crm",
  },
  {
    index: "03",
    title: "Jersey Catalog",
    category: "Commerce concept",
    description:
      "A visual product catalog exploring a focused storefront for classic and current football jerseys, with image-led browsing and product detail presentation.",
    technologies: ["HTML", "CSS", "Catalog UX", "Responsive UI"],
    href: "https://github.com/Nirvik30/jerseycatalog",
    visual: "catalog",
  },
] as const;

export const capabilities = [
  {
    number: "01",
    title: "Product interfaces",
    description:
      "Responsive, accessible interfaces shaped around clear user journeys and strong visual hierarchy.",
  },
  {
    number: "02",
    title: "Full-stack systems",
    description:
      "End-to-end applications that connect polished frontends to practical APIs, data, and authentication.",
  },
  {
    number: "03",
    title: "Rapid prototyping",
    description:
      "Fast, intentional experiments that turn rough product ideas into something people can actually use.",
  },
] as const;

export const stack = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Supabase",
  "MongoDB",
  "Tailwind CSS",
  "Git",
] as const;

export const links = {
  email: "mailto:nirvikacharekar@gmail.com",
  github: "https://github.com/Nirvik30",
  location: "https://maps.google.com/?q=Mumbai,India",
} as const;
