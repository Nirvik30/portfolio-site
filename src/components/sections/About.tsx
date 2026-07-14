import Reveal from "@/components/common/Reveal";

export default function About() {
  return (
    <section id="about" className="about section-shell">
      <div className="content-column">
        <Reveal className="section-heading">
          <p className="section-kicker">About</p>
          <p>The thinking behind the work.</p>
        </Reveal>

        <div className="about-grid">
          <Reveal>
            <p className="about-lead">
              I care about making technology clear, useful, and easy to trust.
            </p>
          </Reveal>
          <Reveal delay={0.06} className="about-copy">
            <p>
              I enjoy working from the first product idea through design,
              implementation, and release.
            </p>
            <p>
              My approach is practical: understand the problem, remove unnecessary
              complexity, and build something that stays easy to use and maintain.
            </p>
          </Reveal>
        </div>

        <Reveal className="education-card">
          <p className="education-label">Education</p>
          <div>
            <h2>Bachelor of Engineering</h2>
            <p>Information Technology · University of Mumbai</p>
          </div>
          <div className="education-meta">
            <span>2026</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
