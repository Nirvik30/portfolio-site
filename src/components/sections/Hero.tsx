import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/common/Reveal";
import { links } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="home" className="hero section-shell">
      <div className="hero-grid" aria-hidden="true" />

      <div className="hero-copy">
        <Reveal>
          <p className="eyebrow">
            <span className="status-dot" />
            Nirvik Acharekar · Product designer &amp; developer
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h1>
            Design engineering for <span>digital products.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.16} className="hero-intro-row">
          <p className="hero-intro">
            I shape clear product experiences and build the systems behind them —
            from early direction to production.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">
              View selected projects <ArrowDownRight aria-hidden="true" />
            </a>
            <a className="text-link" href={links.email}>
              Get in touch <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.22} className="hero-aside">
        <div className="hero-aside-topline">
          <span>Practice</span>
          <span>Mumbai / India</span>
        </div>
        <ol>
          <li><span>01</span> Product direction</li>
          <li><span>02</span> Interface design</li>
          <li><span>03</span> Full-stack delivery</li>
        </ol>
        <p>Clear systems. Thoughtful interactions. Reliable execution.</p>
      </Reveal>

      <div className="hero-footer" aria-label="Areas of practice">
        <span>Independent practice / 2026</span>
        <span>Available for select collaborations</span>
      </div>
    </section>
  );
}
