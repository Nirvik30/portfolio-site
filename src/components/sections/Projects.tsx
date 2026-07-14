import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/common/Reveal";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="work" className="work section-shell">
      <div className="content-column">
        <Reveal className="section-heading">
          <p className="section-kicker">Selected work</p>
          <p>A concise selection of products, platforms, and digital experiences.</p>
        </Reveal>

        <div className="project-list">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.035}>
              <a
                className="project-card"
                href={project.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.title} project`}
              >
                <span className="project-index">{project.index}</span>
                <div className="project-identity">
                  <h2>{project.title}</h2>
                  <span>{project.category}</span>
                </div>
                <p>{project.description}</p>
                <ArrowUpRight aria-hidden="true" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
