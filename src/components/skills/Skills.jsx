import { skills } from "../../content/site";
import { Icon } from "../Icons";
export default function Skills() {
  return (
    <section id="skills" className="section-space skills-section">
      <div className="shell">
        <div className="section-heading">
          <div>
            <div className="eyebrow">TECHNICAL SKILLS</div>
            <h2>Tools I work with.</h2>
          </div>
          <p>
            Technologies used throughout my studies and projects, grouped by the
            areas of development they support.
          </p>
        </div>
        <div className="skills-grid">
          {skills.map((group) => (
            <article key={group.title} className="skill-card">
              <span className="skill-icon">
                <Icon name={group.icon} />
              </span>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
