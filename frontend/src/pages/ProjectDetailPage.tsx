import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowIcon, PageMeta } from "../components";
import { projects } from "../content";

export function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!project) return <Navigate to="/404" replace />;

  const relatedProjects = projects.filter(p => p.slug !== project.slug).slice(0, 3);

  // Schema.org Structured Data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Start",
            "item": "https://www.vaxjoeltjanst.se/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Projekt",
            "item": "https://www.vaxjoeltjanst.se/projekt"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": project.title,
            "item": `https://www.vaxjoeltjanst.se/projekt/${project.slug}`
          }
        ]
      },
      {
        "@type": "Project",
        "name": project.title,
        "description": project.description,
        "image": `https://www.vaxjoeltjanst.se${project.image}`,
        "locationCreated": {
          "@type": "Place",
          "name": project.location,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": project.city,
            "addressRegion": "Kronobergs län",
            "addressCountry": "SE"
          }
        },
        "provider": {
          "@type": "LocalBusiness",
          "name": "Växjö Eltjänst AB",
          "telephone": "+46705657021",
          "url": "https://www.vaxjoeltjanst.se"
        }
      }
    ]
  };

  return (
    <main className="project-detail-page">
      <PageMeta
        title={`${project.title} | ${project.location}`}
        description={`${project.excerpt} Utfört av Växjö Eltjänst i ${project.location}.`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Project Hero */}
      <section
        className="project-hero"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(13,13,13,0.75) 0%, rgba(13,13,13,0.92) 100%), url(${project.image})`
        }}
      >
        <div className="container">
          <nav className="breadcrumbs" aria-label="Brödsmulor">
            <Link to="/">Start</Link>
            <span className="breadcrumbs__sep">/</span>
            <Link to="/projekt">Projekt</Link>
            <span className="breadcrumbs__sep">/</span>
            <span aria-current="page">{project.title}</span>
          </nav>

          <div className="project-hero__meta">
            <span className="badge badge--gold">📍 {project.location}</span>
            <span className="badge badge--outline">{project.category}</span>
            <span className="badge badge--outline">Slutfört {project.year}</span>
          </div>

          <h1 className="project-hero__title">{project.title}</h1>
          <p className="project-hero__excerpt">{project.excerpt}</p>
        </div>
      </section>

      {/* Project Facts Bar */}
      <section className="project-facts-bar">
        <div className="container project-facts-grid">
          <div className="fact-item">
            <span className="fact-label">Plats & Område</span>
            <strong className="fact-value">{project.location}</strong>
          </div>
          <div className="fact-item">
            <span className="fact-label">Kategori</span>
            <strong className="fact-value">{project.category}</strong>
          </div>
          <div className="fact-item">
            <span className="fact-label">Uppdragsgivare</span>
            <strong className="fact-value">{project.clientType}</strong>
          </div>
          <div className="fact-item">
            <span className="fact-label">Omfattning</span>
            <strong className="fact-value">{project.scope}</strong>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="section project-body">
        <div className="container project-body__grid">
          <div className="project-content">
            <div className="project-prose">
              <span className="eyebrow">Projektbeskrivning</span>
              <h2>Genomtänkt elinstallation i {project.area}</h2>
              <p className="lead-text">{project.description}</p>
            </div>

            {/* Visual Feature Image */}
            <div className="project-main-media">
              <img
                src={project.image}
                alt={`${project.title} – elinstallation i ${project.location}`}
                loading="eager"
              />
              <span className="media-caption">
                Fotodokumentation från {project.title}, {project.location}.
              </span>
            </div>

            {/* Highlights Section */}
            <div className="project-section-block">
              <h3>Genomförda moment i projektet</h3>
              <ul className="project-checklist">
                {project.highlights.map((item, i) => (
                  <li key={i}>
                    <span className="check-icon">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Results Section */}
            <div className="project-section-block">
              <h3>Resultat & mervärde</h3>
              <div className="results-grid">
                {project.results.map((res, i) => (
                  <div className="result-card" key={i}>
                    <span className="result-number">0{i + 1}</span>
                    <p>{res}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery Grid */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="project-section-block">
                <h3>Fler bilder från projektet</h3>
                <div className="project-gallery-grid">
                  {project.gallery.map((img, i) => (
                    <figure className="gallery-item" key={i}>
                      <img
                        src={img}
                        alt={`${project.title} - detaljbild ${i + 1}`}
                        loading="lazy"
                      />
                    </figure>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sticky Sidebar */}
          <aside className="project-sidebar">
            <div className="sidebar-card">
              <h3>Projektfakta</h3>
              <dl className="sidebar-meta-list">
                <div>
                  <dt>Plats:</dt>
                  <dd>{project.location}</dd>
                </div>
                <div>
                  <dt>Stad:</dt>
                  <dd>{project.city}</dd>
                </div>
                <div>
                  <dt>Stadsdel/Ort:</dt>
                  <dd>{project.area}</dd>
                </div>
                <div>
                  <dt>Kategori:</dt>
                  <dd>{project.category}</dd>
                </div>
                <div>
                  <dt>Kundtyp:</dt>
                  <dd>{project.clientType}</dd>
                </div>
                <div>
                  <dt>Färdigställt:</dt>
                  <dd>{project.year}</dd>
                </div>
                <div>
                  <dt>Auktoriserad:</dt>
                  <dd>Elsäkerhetsverket registrerad</dd>
                </div>
              </dl>

              <hr className="sidebar-divider" />

              <div className="sidebar-cta">
                <h4>Planerar du ett liknande projekt?</h4>
                <p>
                  Vi hjälper privatpersoner, företag och fastighetsägare i {project.city} och hela Kronoberg med trygga elinstallationer.
                </p>
                <Link
                  className="button button--dark button--full"
                  to={`/kontakt?service=${encodeURIComponent(project.category)}#offert`}
                >
                  Begär kostnadsfri offert <ArrowIcon />
                </Link>
                <a className="button button--outline button--full" href="tel:+46705657021">
                  Ring 070-565 70 21
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related Projects */}
      <section className="section related-projects">
        <div className="container">
          <header className="section-heading">
            <span className="eyebrow">Fler referenser</span>
            <h2>Andra projekt i Växjöområdet</h2>
          </header>

          <div className="related-projects-grid">
            {relatedProjects.map(rel => (
              <article className="related-project-card" key={rel.slug}>
                <Link to={`/projekt/${rel.slug}`} className="related-project-card__image">
                  <img src={rel.image} alt={rel.title} loading="lazy" />
                  <span className="related-project-card__badge">📍 {rel.location}</span>
                </Link>
                <div className="related-project-card__body">
                  <span className="related-project-card__cat">{rel.category}</span>
                  <h3>
                    <Link to={`/projekt/${rel.slug}`}>{rel.title}</Link>
                  </h3>
                  <p>{rel.excerpt}</p>
                  <Link className="text-link" to={`/projekt/${rel.slug}`}>
                    Läs om projektet <ArrowIcon />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="center-cta" style={{ marginTop: "3rem" }}>
            <Link className="button button--dark" to="/projekt">
              Se alla våra projekt <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* Global Bottom CTA */}
      <section className="section contact-band">
        <div className="container contact-band__inner">
          <div>
            <span className="eyebrow eyebrow--light">Kom igång</span>
            <h2>Har du ett elprojekt på gång i {project.city}?</h2>
            <p>
              Kontakta oss för rådgivning, platsbesök och ett tydligt prisförslag anpassat för dina förutsättningar.
            </p>
          </div>
          <Link className="button button--light" to="/kontakt#offert">
            Begär offert <ArrowIcon />
          </Link>
        </div>
      </section>
    </main>
  );
}
