import Reveal from "@/components/common/Reveal";
import { capabilities, stack } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="about section-shell">
      <Reveal className="section-heading">
        <p className="section-index">02 / About</p>
        <h2>About me</h2>
        <p>A short introduction to how I work and what I bring to a product.</p>
      </Reveal>

      <div className="about-intro">
        <Reveal>
          <p className="about-lead">
            I care about making technology clear, useful, and easy to trust.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="about-copy">
            <p>
              I&apos;m Nirvik, a product designer and full-stack developer based in
              Mumbai. I enjoy working from the first product idea through design,
              implementation, and release.
            </p>
            <p>
              My approach is practical: understand the problem, remove unnecessary
              complexity, and build a solution that can grow without becoming hard
              to use or maintain.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal className="education-card">
        <div>
          <span>Education</span>
          <span>Undergraduate degree</span>
        </div>
        <h3>Bachelor of Engineering</h3>
        <p>Information Technology</p>
        <strong>8.02 CGPA</strong>
      </Reveal>

      <div className="capability-grid">
        {capabilities.map((capability, index) => (
          <Reveal key={capability.title} delay={index * 0.05} className="capability-card">
            <span>{capability.number}</span>
            <h3>{capability.title}</h3>
            <p>{capability.description}</p>
          </Reveal>
        ))}
      </div>

      <Reveal className="stack-panel">
        <div className="stack-heading">
          <span>Core toolkit</span>
          <span>Selected technologies</span>
        </div>
        <ul>
          {stack.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
