import Reveal from "@/components/common/Reveal";

export default function About() {
  return (
    <section id="about" className="about section-shell">
      <Reveal className="section-heading">
        <p className="section-index">02 / About</p>
        <h2>About me</h2>
        <p>A concise overview of my approach and education.</p>
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
          <span>University of Mumbai</span>
        </div>
        <h3>Bachelor of Engineering</h3>
        <p>Information Technology</p>
        <div className="education-meta">
          <span>2026</span>
          <strong>8.02 CGPA</strong>
        </div>
      </Reveal>
    </section>
  );
}
