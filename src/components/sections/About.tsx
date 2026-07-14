import Reveal from "@/components/common/Reveal";
import { capabilities, stack } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="about section-shell">
      <Reveal className="section-heading">
        <p className="section-index">02 / About</p>
        <h2>Clear thinking.<br />Careful execution.</h2>
      </Reveal>

      <div className="about-intro">
        <Reveal>
          <p className="about-lead">
            Good software should feel obvious to the person using it — even
            when the system behind it is anything but.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="about-copy">
            <p>
              I work across design and development to make products that are
              useful, expressive, and maintainable. That means asking the right
              questions early, sweating the interaction details, and keeping
              the implementation honest.
            </p>
            <p>
              My toolkit spans frontend craft, backend systems, data, and rapid
              prototyping — chosen to fit the problem, never the trend.
            </p>
          </div>
        </Reveal>
      </div>

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
          <span>Always evolving</span>
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
