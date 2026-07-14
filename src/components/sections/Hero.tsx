import Image from "next/image";
import { ArrowDownRight, Mail } from "lucide-react";
import Reveal from "@/components/common/Reveal";
import { links } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="home" className="hero section-shell">
      <div className="content-column">
        <Reveal className="hero-mark">
          <Image
            src="/nirvik-profile.png"
            alt="Portrait of Nirvik Acharekar by the coast"
            fill
            sizes="84px"
            priority
          />
        </Reveal>

        <Reveal delay={0.06}>
          <h1>
            I&apos;m Nirvik Acharekar — a product-minded developer and designer.
          </h1>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="hero-intro">
            I turn complex product requirements into clear interfaces and dependable
            systems. Based in Mumbai, I work across design, frontend, and backend.
          </p>
        </Reveal>

        <Reveal delay={0.18} className="hero-links">
          <a href={links.gmail} target="_blank" rel="noreferrer">
            <Mail aria-hidden="true" /> Email
          </a>
          <a href={links.github} target="_blank" rel="noreferrer">
            <span className="github-icon" aria-hidden="true" /> GitHub
          </a>
          <a href="#work">
            Selected work <ArrowDownRight aria-hidden="true" />
          </a>
        </Reveal>

        <Reveal delay={0.22} className="hero-note">
          <span>Available for thoughtful product work</span>
          <span>Mumbai, India</span>
        </Reveal>
      </div>
    </section>
  );
}
