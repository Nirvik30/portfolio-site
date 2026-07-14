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
            Full-stack developer · Mumbai, India
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h1>
            I turn ambitious ideas into <em>useful</em> digital products.
          </h1>
        </Reveal>

        <Reveal delay={0.16} className="hero-intro-row">
          <p className="hero-intro">
            I&apos;m Nirvik — a product-minded developer building fast, thoughtful
            experiences from interface to infrastructure.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">
              Explore selected work <ArrowDownRight aria-hidden="true" />
            </a>
            <a className="text-link" href={links.email}>
              Start a conversation <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.22} className="hero-visual-wrap">
        <div className="hero-visual" aria-label="Currently focused on thoughtful product engineering">
          <div className="orbit orbit-outer" />
          <div className="orbit orbit-inner" />
          <div className="orbit-core">
            <span>Design</span>
            <strong>×</strong>
            <span>Engineering</span>
          </div>
          <div className="signal-card signal-card-top">
            <span>Current focus</span>
            <strong>Useful software</strong>
          </div>
          <div className="signal-card signal-card-bottom">
            <span>Approach</span>
            <strong>Think → Build → Refine</strong>
          </div>
        </div>
      </Reveal>

      <div className="hero-footer" aria-label="Areas of practice">
        <span>01 / Product thinking</span>
        <span>02 / Interface engineering</span>
        <span>03 / Full-stack development</span>
      </div>
    </section>
  );
}
