import Reveal from "@/components/common/Reveal";

export default function Experience() {
  return (
    <section id="experience" className="experience section-shell">
      <div className="content-column">
        <Reveal className="section-heading">
          <p className="section-kicker">Experience</p>
          <p>Professional experience across product development and implementation.</p>
        </Reveal>

        <Reveal>
          <article className="experience-card">
            <div className="experience-title">
              <div>
                <h2>TFG Solution</h2>
                <p>Full Stack Developer Intern</p>
              </div>
              <span>Internship</span>
            </div>
            <ul>
              <li>
                Supporting full-stack web applications across user-facing interfaces
                and backend functionality.
              </li>
              <li>
                Translating product requirements into clear, maintainable releases.
              </li>
            </ul>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
