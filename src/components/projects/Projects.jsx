import { useState } from "react";
import PropTypes from "prop-types";
import { projects } from "../../content/site";
import { Arrow, Icon } from "../Icons";
const filters = [
  { value: "all", label: "All projects" },
  { value: "web", label: "Web applications" },
  { value: "mobile", label: "Mobile" },
  { value: "desktop", label: "Desktop & systems" },
  { value: "ai", label: "AI & chatbots" },
];
function ProjectCard({ project, index }) {
  const icon =
    project.category === "mobile"
      ? "mobile"
      : project.category === "web"
        ? "web"
        : "code";
  return (
    <article className="project-card" id={`project-${project.id}`}>
      <div className="project-card-header">
        <span className={`project-type-icon type-${project.category}`}>
          <Icon name={icon} />
        </span>
        <span className="project-category">{project.categoryLabel}</span>
        <span className="project-index">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="project-caption">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <ul
          className="project-tags"
          aria-label={`${project.name} technologies`}
        >
          {project.tech.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
      <details className="project-details">
        <summary>
          Technical overview <span aria-hidden="true">+</span>
        </summary>
        <p>{project.overview}</p>
      </details>
      <div className="project-links">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Icon name="github" /> Source code <Arrow diagonal />
          </a>
        )}
        {project.linkedin && (
          <a href={project.linkedin} target="_blank" rel="noopener noreferrer">
            View project <Arrow diagonal />
          </a>
        )}
      </div>
    </article>
  );
}
ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    categoryLabel: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
    github: PropTypes.string,
    linkedin: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
export default function Projects() {
  const [filter, setFilter] = useState("all");
  const filtered =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);
  const featured = filter === "all" ? filtered.slice(0, 4) : filtered;
  return (
    <section id="projects" className="section-space work-section">
      <div className="shell">
        <div className="section-heading">
          <div>
            <div className="eyebrow">PROJECT PORTFOLIO</div>
            <h2>Selected projects.</h2>
          </div>
          <p>
            A selection of software projects across web, mobile, desktop, and
            AI. Each includes the technologies used and a link to the project or
            source code.
          </p>
        </div>
        <div className="project-filter-bar">
          <div
            className="project-filters"
            role="group"
            aria-label="Filter projects"
          >
            {filters.map((item) => (
              <button
                key={item.value}
                aria-pressed={filter === item.value}
                className={filter === item.value ? "active" : ""}
                onClick={() => setFilter(item.value)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <span className="project-count" aria-live="polite">
            {filtered.length} projects
          </span>
        </div>
        <div className="project-grid" key={filter}>
          {featured.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        {filter === "all" && (
          <details className="more-projects">
            <summary>
              <span>
                Additional projects{" "}
                <span className="additional-count">{projects.length - 4}</span>
              </span>
              <span>
                View all projects <Arrow />
              </span>
            </summary>
            <div className="project-grid">
              {projects.slice(4).map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index + 4}
                />
              ))}
            </div>
          </details>
        )}
      </div>
    </section>
  );
}
