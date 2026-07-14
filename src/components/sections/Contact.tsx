import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/common/Reveal";
import { links } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="contact section-shell">
      <Reveal className="content-column contact-card">
        <div className="contact-status"><i /> Available for thoughtful projects</div>
        <h2>Have something worth making?</h2>
        <p>
          If you have a product, role, or collaboration in mind, I&apos;d be glad to
          hear the details.
        </p>
        <a
          href={links.gmail}
          target="_blank"
          rel="noreferrer"
          aria-label="Open Gmail to email Nirvik Acharekar"
        >
          Start a conversation <ArrowUpRight aria-hidden="true" />
        </a>
        <span>{links.emailAddress}</span>
      </Reveal>
    </section>
  );
}
