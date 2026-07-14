import { ArrowDown, ArrowUpRight, Code2, Mail } from "lucide-react";
import Reveal from "@/components/common/Reveal";
import { links } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="home" className="hero section-shell">
      <div className="hero-copy">
        <Reveal>
          <p className="eyebrow">Product designer · Full-stack developer</p>
        </Reveal>

        <Reveal delay={0.08}>
          <h1>Nirvik Acharekar</h1>
        </Reveal>

        <Reveal delay={0.16} className="hero-intro-row">
          <p className="hero-intro">
            I design and build clear, dependable digital products from Mumbai.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">
              <span>View selected work</span><ArrowDown aria-hidden="true" />
            </a>
            <a className="text-link" href={links.gmail} target="_blank" rel="noreferrer">
              Contact me <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>

      <div className="hero-footer" aria-label="Professional summary">
        <div><span>Based in</span><strong>Mumbai, India</strong></div>
        <div><span>Current role</span><strong>Full-stack developer intern</strong></div>
        <div className="hero-socials">
          <span>Connect</span>
          <strong>
            <a href={links.github} target="_blank" rel="noreferrer">
              <Code2 aria-hidden="true" /> GitHub
            </a>
            <a href={links.gmail} target="_blank" rel="noreferrer">
              <Mail aria-hidden="true" /> Email
            </a>
          </strong>
        </div>
      </div>
    </section>
  );
}
