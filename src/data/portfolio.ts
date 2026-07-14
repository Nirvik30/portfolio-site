export const navigation = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const projects = [
  {
    index: "01",
    title: "NH Studioz",
    category: "Media platform",
    description: "A clear, discovery-led experience for navigating a large film catalogue.",
    href: "https://nhstudioz.tv",
  },
  {
    index: "02",
    title: "MRC Hobbies",
    category: "Ecommerce",
    description: "A focused storefront for discovering, evaluating, and buying hobby products.",
    href: "https://mrchobbies.com",
  },
  {
    index: "03",
    title: "Movie Operations CMS",
    category: "Internal product",
    description: "Operational tooling for managing a production catalogue of more than 10,000 films.",
    href: "https://cms.voidr.in/app/dashboard",
  },
  {
    index: "04",
    title: "Commerce API Backend",
    category: "Backend infrastructure",
    description: "Custom commerce infrastructure spanning catalogue, cart, and fulfilment operations.",
    href: "https://backend.mrchobbies.com/app/",
  },
  {
    index: "05",
    title: "Dope Raider",
    category: "Web3 game",
    description: "A wallet-aware browser game shaped around quick sessions and repeat play.",
    href: "https://doperaider.com",
  },
  {
    index: "06",
    title: "Orcaa Designs",
    category: "Creative studio website",
    description: "A motion-led portfolio experience for a multidisciplinary creative studio.",
    href: "https://www.orcaadesigns.com/",
  },
] as const;

export const links = {
  emailAddress: "nirvikacharekar@gmail.com",
  gmail:
    "https://mail.google.com/mail/?view=cm&fs=1&to=nirvikacharekar@gmail.com&su=Project%20enquiry",
  github: "https://github.com/Nirvik30",
  location: "https://maps.google.com/?q=Mumbai,India",
} as const;
