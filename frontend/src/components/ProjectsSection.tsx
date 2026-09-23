import { Link } from "react-router-dom";
import { projects } from "../content";
import { ArrowIcon } from "./ArrowIcon";

export function ProjectsSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className="section projects-section">
      <div className="container">
        <header className="section-heading">
          <span className="eyebrow">Vårt arbete</span>
          <h2>Projekt & installationer</h2>
          <p>Utvalda elinstallationer och referensuppdrag utförda i Växjö med omnejd.</p>
        </header>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <Link
              to={`/projekt/${project.slug}`}
              className={`project-tile project-tile--${index + 1}`}
              key={project.slug}
              aria-label={`${project.title} i ${project.location}`}
            >
              <img src={project.image} alt={`${project.title} – ${project.location}`} loading="lazy" />
              <figcaption>
                <span>{project.category} · {project.location}</span>
                <b>{project.title}</b>
                <span className="project-tile__action">Visa projekt <ArrowIcon /></span>
              </figcaption>
            </Link>
          ))}
        </div>
        {compact && (
          <div className="center-cta">
            <Link className="button button--outline" to="/projekt">
              Se alla projekt <ArrowIcon />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
