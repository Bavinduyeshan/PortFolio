import { site } from "../content/site";
import { Arrow, Icon } from "./Icons";
export default function About() {
  return (
    <section id="about" className="about-section section-space">
      <div className="shell about-grid">
        <div className="about-copy">
          <div className="eyebrow">ABOUT ME</div>
          <h2>
            A practical approach
            <br />
            to software development.
          </h2>
          <p>
            I’m {site.name}, a software engineering undergraduate at the{" "}
            {site.institution}. I work across frontend interfaces, backend
            services, and application development.
          </p>
          <p>
            My project experience includes healthcare and education management
            systems, web applications, cross-platform mobile apps, and
            conversational tools. I use these projects to apply what I study in
            software development, algorithms, data structures, and
            object-oriented programming.
          </p>
          <p>
            I’m interested in development opportunities where I can contribute
            to useful software, collaborate with other developers, and continue
            improving my engineering skills.
          </p>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            View my LinkedIn profile <Arrow diagonal />
          </a>
        </div>
        <aside className="education-panel">
          <div className="education-icon">
            <Icon name="code" />
          </div>
          <div className="eyebrow">EDUCATION & BACKGROUND</div>
          <h3>
            Diploma in
            <br />
            Software Engineering
          </h3>
          <p>{site.institution}</p>
          <span className="education-badge">Undergraduate studies</span>
          <dl>
            <div>
              <dt>Core subjects</dt>
              <dd>
                Software development, algorithms, data structures, and OOP
              </dd>
            </div>
            <div>
              <dt>Applied through</dt>
              <dd>Web platforms, business systems, and mobile applications</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{site.location}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
