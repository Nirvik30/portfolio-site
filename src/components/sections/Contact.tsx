import { ArrowUpRight, Code2, Mail, MapPin } from "lucide-react";
import Reveal from "@/components/common/Reveal";
import { links } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="contact section-shell">
      <Reveal className="contact-card">
        <div className="contact-topline">
          <p className="section-index">03 / Contact</p>
          <span><i /> Available for projects</span>
        </div>

        <div className="contact-main">
          <h2>Let&apos;s build something useful.</h2>
          <p>If you have a project, role, or collaboration in mind, send me an email.</p>
          <a href={links.gmail} target="_blank" rel="noreferrer" aria-label="Open Gmail to email Nirvik Acharekar">
            {links.emailAddress} <ArrowUpRight aria-hidden="true" />
          </a>
        </div>

        <div className="contact-bottom">
          <p>
            Gmail will open with my address and a project enquiry subject filled in.
          </p>
          <div className="contact-links">
            <a href={links.gmail} target="_blank" rel="noreferrer">
              <Mail aria-hidden="true" /> Gmail
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
