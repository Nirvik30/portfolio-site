import Reveal from "@/components/common/Reveal";

export default function Experience() {
  return (
    <section id="experience" className="experience section-shell">
      <Reveal className="section-heading">
        <p className="section-index">03 / Experience</p>
        <h2>Experience</h2>
        <p>Professional experience across product development and implementation.</p>
      </Reveal>

      <Reveal className="experience-content">
        <article className="experience-row">
          <div>
            <span>Company</span>
            <strong>TFG Solution</strong>
          </div>
          <div>
            <span>Role</span>
            <h3>Full Stack Developer Intern</h3>
          </div>
          <p>
            Supporting full-stack web application development across user-facing
            interfaces and backend functionality.
          </p>
          <span className="experience-type">Internship</span>
        </article>
      </Reveal>
    </section>
  );
}
