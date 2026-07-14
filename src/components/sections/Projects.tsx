import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/common/Reveal";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="work" className="work section-shell dark-section">
      <Reveal className="section-heading section-heading-light">
        <p className="section-index">01 / Projects</p>
        <h2>Selected work.</h2>
        <p>
          Digital products and systems built across media, commerce, Web3, and
          creative practice.
        </p>
      </Reveal>

      <div className="project-list">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.05}>
            <article className="project-card">
              <span className="project-index">{project.index}</span>

              <div className="project-identity">
                <p>{project.category}</p>
                <h3>{project.title}</h3>
              </div>

              <div className="project-copy">
                <p>{project.description}</p>
              </div>

              <div className="project-detail">
                <span>{project.metric}</span>
                <small>{project.source}</small>
                <a href={project.href} target="_blank" rel="noreferrer">
                  {project.linkLabel} <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="work-footer">
        <p>Several projects were delivered in collaboration with MarrowX.</p>
        <a className="text-link text-link-light" href="https://www.marrowx.in/#work" target="_blank" rel="noreferrer">
          Explore MarrowX <ArrowUpRight aria-hidden="true" />
        </a>
      </Reveal>
    </section>
  );
}
