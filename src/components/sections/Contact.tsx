import { ArrowRight, ArrowUpRight, Code2, Mail, MapPin } from "lucide-react";
import Reveal from "@/components/common/Reveal";
import { links } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="contact section-shell">
      <Reveal className="contact-card">
        <div className="contact-topline">
          <p className="section-index">03 / Contact</p>
          <span><i /> Available for thoughtful projects</span>
        </div>

        <div className="contact-main">
          <h2>Have an idea worth building?</h2>
          <a href={links.email} aria-label="Email Nirvik Acharekar">
            <ArrowRight aria-hidden="true" />
          </a>
        </div>

        <div className="contact-bottom">
          <p>
            Tell me what you&apos;re working on, where it&apos;s stuck, or what you
            want it to become.
          </p>
          <div className="contact-links">
            <a href={links.email}>
              <Mail aria-hidden="true" /> Email
            </a>
            <a href={links.github} target="_blank" rel="noreferrer">
              <Code2 aria-hidden="true" /> GitHub
            </a>
            <a href={links.location} target="_blank" rel="noreferrer">
              <MapPin aria-hidden="true" /> Mumbai <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
