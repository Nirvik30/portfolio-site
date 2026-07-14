import { ArrowUpRight } from "lucide-react";
import { links } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="site-footer section-shell">
      <div className="content-column footer-inner">
        <span>© {new Date().getFullYear()} Nirvik Acharekar</span>
        <span>Mumbai, India</span>
        <a href={links.github} target="_blank" rel="noreferrer">
          GitHub <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
