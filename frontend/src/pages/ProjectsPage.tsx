import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowIcon, PageHero, PageMeta } from "../components";
import { projects } from "../content";

export function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("Alla");

  const categories = ["Alla", "Fastighet & Industri", "Företag & Handel", "Entreprenad & Teknik", "Energi & Laddning", "Privatbostad"];

  const filteredProjects =
    activeCategory === "Alla"
      ? projects
      : projects.filter(p => p.category === activeCategory);

  return (
    <main className="projects-archive-page">
      <PageMeta
        title="Referensprojekt & Elinstallationer i Växjö"
        description="Se utförda elinstallationer, ställverksbyten, belysningsstyrning och laddinfrastruktur i Växjö, Teleborg, Samarkand och Öjaby med omnejd."
      />

      <PageHero
        eyebrow="Vårt arbete"
        title="Projekt & installationer"
        text="Utforska genomförda elprojekt för företag, fastighetsägare och privatpersoner i Växjö med omnejd."
        image="/images/project-23107.jpg"
      />

      <section className="section projects-archive">
        <div className="container">
          {/* Category Filter */}
          <div className="project-filter" role="tablist" aria-label="Filtrera projekt efter kategori">
            {categories.map(cat => (
              <button
                key={cat}
                type="button"
                className={`filter-btn ${activeCategory === cat ? "is-active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-archive-grid">
            {filteredProjects.map((project) => (
              <article className="project-card" key={project.slug}>
                <Link to={`/projekt/${project.slug}`} className="project-card__image-link">
                  <img
                    src={project.image}
                    alt={`${project.title} i ${project.location}`}
                    loading="lazy"
                  />
                  <span className="project-card__location-badge">📍 {project.location}</span>
                </Link>

                <div className="project-card__body">
                  <div className="project-card__meta">
                    <span className="project-card__cat">{project.category}</span>
                    <span className="project-card__year">{project.year}</span>
                  </div>

                  <h2 className="project-card__title">
                    <Link to={`/projekt/${project.slug}`}>{project.title}</Link>
                  </h2>

                  <p className="project-card__desc">{project.excerpt}</p>

                  <div className="project-card__footer">
                    <span className="project-card__scope"><b>Omfattning:</b> {project.scope}</span>
                    <Link className="button button--dark button--small" to={`/projekt/${project.slug}`}>
                      Visa projekt <ArrowIcon />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="section contact-band">
        <div className="container contact-band__inner">
          <div>
            <span className="eyebrow eyebrow--light">Funderar du på ett elprojekt?</span>
            <h2>Vi hjälper dig från planering till färdig installation.</h2>
            <p>Kontakta Växjö Eltjänst för rådgivning och kostnadsfri offert i hela Växjö kommun.</p>
          </div>
          <Link className="button button--light" to="/kontakt#offert">
            Begär offert <ArrowIcon />
          </Link>
        </div>
      </section>
    </main>
  );
}
