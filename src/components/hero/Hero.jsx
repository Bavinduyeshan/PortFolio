import { site } from "../../content/site";
import { Arrow, Icon } from "../Icons";
export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" /> SOFTWARE ENGINEERING UNDERGRADUATE
          </div>
          <h1>
            Bavindu
            <br />
            Yeshan<span>.</span>
          </h1>
          <p className="hero-role">Full-stack & application developer</p>
          <p className="hero-description">
            I develop web, mobile, and desktop applications with React, Java,
            Spring Boot, C#, and Flutter. My focus is turning practical
            requirements into clear interfaces and well-structured software.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="button-primary">
              View my projects <Arrow diagonal />
            </a>
            <a href={`mailto:${site.email}`} className="button-secondary">
              <Icon name="mail" /> Get in touch
            </a>
          </div>
          <div className="hero-socials">
            <a href={site.github} target="_blank" rel="noopener noreferrer">
              <Icon name="github" /> GitHub <Arrow diagonal />
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
              <Icon name="linkedin" /> LinkedIn <Arrow diagonal />
            </a>
            <span>
              <Icon name="pin" /> Colombo, Sri Lanka
            </span>
          </div>
        </div>
        <figure className="profile-panel">
          <div className="profile-photo">
            <img
              src={site.portrait}
              alt="Bavindu Yeshan, software engineering undergraduate in Sri Lanka"
              width="800"
              height="800"
              fetchpriority="high"
              decoding="async"
            />
          </div>
          <figcaption>
            <div>
              <strong>Bavindu Yeshan</strong>
              <span>Software engineering · NIBM</span>
            </div>
            <span className="profile-mark">
              <Icon name="code" />
            </span>
          </figcaption>
        </figure>
      </div>
      <div className="shell">
        <dl className="profile-facts">
          <div>
            <dt>BASED IN</dt>
            <dd>Colombo, Sri Lanka</dd>
          </div>
          <div>
            <dt>EDUCATION</dt>
            <dd>Software Engineering, NIBM</dd>
          </div>
          <div>
            <dt>FOCUS</dt>
            <dd>Web, mobile & desktop applications</dd>
          </div>
          <div>
            <dt>PROFILE</dt>
            <dd>
              <a href={site.github} target="_blank" rel="noopener noreferrer">
                Explore my GitHub <Arrow diagonal />
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
