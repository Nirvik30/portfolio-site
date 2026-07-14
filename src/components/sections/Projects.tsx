import { ArrowUpRight, Code2 } from "lucide-react";
import Reveal from "@/components/common/Reveal";
import { links, projects } from "@/data/portfolio";

function ProjectVisual({ type }: { type: (typeof projects)[number]["visual"] }) {
  return (
    <div className={`project-visual project-visual-${type}`} aria-hidden="true">
      <div className="visual-window">
        <div className="visual-toolbar">
          <span />
          <span />
          <span />
        </div>
        <div className="visual-content">
          <div className="visual-sidebar" />
          <div className="visual-main">
            <div className="visual-heading" />
            <div className="visual-grid-cards">
              <div />
              <div />
              <div />
            </div>
            <div className="visual-chart">
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
      </div>
      <span className="visual-label">Built to be used</span>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="work section-shell dark-section">
      <Reveal className="section-heading section-heading-light">
        <p className="section-index">01 / Selected work</p>
        <h2>Ideas, shipped.</h2>
        <p>
          A selection of practical builds across developer tools, product
          systems, and commerce experiments.
        </p>
      </Reveal>

      <div className="project-list">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.05}>
            <article className="project-card">
              <div className="project-meta">
                <span>{project.index}</span>
                <span>{project.category}</span>
              </div>

              <ProjectVisual type={project.visual} />

              <div className="project-copy">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul aria-label={`${project.title} technologies`}>
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                <a href={project.href} target="_blank" rel="noreferrer">
                  View repository <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="work-footer">
        <p>More experiments and works in progress live on GitHub.</p>
        <a className="button button-light" href={links.github} target="_blank" rel="noreferrer">
          <Code2 aria-hidden="true" /> Browse all repositories
        </a>
      </Reveal>
    </section>
  );
}
