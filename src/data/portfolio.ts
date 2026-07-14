export const navigation = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const projects = [
  {
    index: "01",
    title: "NH Studioz",
    category: "Media platform",
    description: "Large-scale film catalog and content discovery platform.",
    href: "https://nhstudioz.tv",
  },
  {
    index: "02",
    title: "MRC Hobbies",
    category: "Ecommerce",
    description: "High-traffic storefront for hobby products and parts.",
    href: "https://mrchobbies.com",
  },
  {
    index: "03",
    title: "Movie Operations CMS",
    category: "Internal product",
    description: "Production CMS managing a 10k+ film database.",
    href: "https://cms.voidr.in/app/dashboard",
  },
  {
    index: "04",
    title: "Commerce API Backend",
    category: "Backend infrastructure",
    description: "Custom backend for catalog, cart, and fulfillment operations.",
    href: "https://backend.mrchobbies.com/app/",
  },
  {
    index: "05",
    title: "Dope Raider",
    category: "Web3 game",
    description: "Wallet-aware browser game designed for repeat play.",
    href: "https://doperaider.com",
  },
  {
    index: "06",
    title: "Orcaa Designs",
    category: "Creative studio website",
    description: "Motion-led portfolio website for a multidisciplinary studio.",
    href: "https://www.orcaadesigns.com/",
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
  emailAddress: "nirvikacharekar@gmail.com",
  gmail:
    "https://mail.google.com/mail/?view=cm&fs=1&to=nirvikacharekar@gmail.com&su=Project%20enquiry",
  github: "https://github.com/Nirvik30",
  location: "https://maps.google.com/?q=Mumbai,India",
} as const;
