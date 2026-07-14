import { ArrowDown, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/common/Reveal";
import { links } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="home" className="hero section-shell">
      <div className="hero-copy">
        <Reveal>
          <p className="eyebrow">Nirvik Acharekar · Mumbai, India</p>
        </Reveal>

        <Reveal delay={0.08}>
          <h1>Product designer and developer building useful digital products.</h1>
        </Reveal>

        <Reveal delay={0.16} className="hero-intro-row">
          <p className="hero-intro">
            I work across product design and full-stack development to turn ideas
            into clear, dependable web experiences.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">
              View selected work <ArrowDown aria-hidden="true" />
            </a>
            <a className="text-link" href={links.gmail} target="_blank" rel="noreferrer">
              Contact me <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>

      <div className="hero-footer" aria-label="Professional summary">
        <div><span>Focus</span><strong>Design &amp; engineering</strong></div>
        <div><span>Experience</span><strong>Web products &amp; systems</strong></div>
        <div><span>Availability</span><strong>Open to good work</strong></div>
      </div>
    </section>
  );
}
