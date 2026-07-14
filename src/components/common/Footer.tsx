import { ArrowUp } from "lucide-react";
import { navigation } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="site-footer section-shell">
      <div>
        <strong>Nirvik Acharekar</strong>
        <span>Product-minded full-stack developer.</span>
      </div>
      <nav aria-label="Footer navigation">
        {navigation.slice(1).map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
      </nav>
      <div className="footer-end">
        <span>© {new Date().getFullYear()} · Mumbai, India</span>
        <a href="#home" aria-label="Back to top"><ArrowUp aria-hidden="true" /></a>
      </div>
    </footer>
  );
}
