import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/common/Reveal";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="work" className="work section-shell">
      <Reveal className="section-heading">
        <p className="section-index">01 / Work</p>
        <h2>Selected projects</h2>
        <p>
          A selection of products, platforms, and digital experiences I have
          worked on.
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

              <a className="project-link" href={project.href} target="_blank" rel="noreferrer">
                View project <ArrowUpRight aria-hidden="true" />
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
