import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowIcon, PageMeta } from "../components";
import { getLocationBySlug, locations } from "../content/locations";
import { NotFoundPage } from "./NotFoundPage";

export function LocationPage() {
  const { slug } = useParams<{ slug: string }>();
  const location = getLocationBySlug(slug);

  const [openProcessIndex, setOpenProcessIndex] = useState<number | null>(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!location) {
    return <NotFoundPage />;
  }

  const toggleProcess = (index: number) => {
    setOpenProcessIndex((prev) => (prev === index ? null : index));
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const otherLocations = locations.filter((l) => l.slug !== location.slug);

  // LocalBusiness Structured Data for Local SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    name: `Växjö Eltjänst AB - Elektriker i ${location.name}`,
    description: location.seoDescription,
    url: `https://vaxjo-ejanst.vercel.app/orter/${location.slug}`,
    telephone: "+46705657021",
    email: "mathias@vaxjoeltjanst.se",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Smedjegatan 20A",
      addressLocality: "Växjö",
      postalCode: "352 46",
      addressRegion: "Kronoberg",
      addressCountry: "SE",
    },
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: location.name,
      },
      ...location.nearbyAreas.map((area) => ({
        "@type": "Place",
        name: area,
      })),
    ],
    openingHours: "Mo-Fr 07:00-16:00",
  };

  return (
    <div className="ort-page">
      <PageMeta
        title={location.seoTitle}
        description={location.seoDescription}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Breadcrumb */}
      <div className="ort-breadcrumb-wrap container">
        <Link to="/" className="ort-backlink">
          ← Tillbaka till start
        </Link>
      </div>

      {/* Hero Section */}
      <section className="ort-hero container">
        <div className="ort-hero-grid">
          <div className="ort-hero-content">
            <span className="ort-tag">AUKTORISERAD ELEKTRIKER · {location.name.toUpperCase()}</span>
            <h1 className="ort-hero-title">
              Elektriker i{" "}
              <span className="ort-highlight">
                {location.name}
                <svg
                  className="ort-underline-svg"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3,14 Q45,2 97,12"
                    fill="none"
                    stroke="#d71920"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
            <p className="ort-hero-subtitle">{location.heroSubtitle}</p>

            {/* "KORT SVAR" Callout Box */}
            <div className="ort-short-answer-card">
              <span className="ort-short-answer-label">Kort svar</span>
              <p>{location.shortAnswer}</p>
            </div>
          </div>

          {/* Right Side Info Card */}
          <aside className="ort-side-card" aria-label={`Information om elektriker i ${location.name}`}>
            <div className="ort-side-badges">
              <span className="ort-badge-accent">{location.name.toUpperCase()}</span>
              <span className="ort-badge-dark">AUKTORISERAD</span>
              <span className="ort-badge-dark">24H SVAR</span>
              <span className="ort-badge-dark">ROT 30%</span>
            </div>

            <div className="ort-side-work-in">
              <h3>VI JOBBAR I</h3>
              <div className="ort-areas-list">
                {location.nearbyAreas.join(" · ")}
              </div>
              <p className="ort-side-note">
                Utgår från Växjö med fullt utrustade servicebilar för planerade elarbeten och snabb service i {location.name} och hela {location.region}.
              </p>
            </div>

            <Link
              to={`/kontakt?ort=${location.slug}#offert`}
              className="ort-side-cta"
            >
              Begär kostnadsfri offert →
            </Link>
          </aside>
        </div>
      </section>

      {/* Stats Section */}
      <section className="ort-stats-section" aria-label="Statistik och kundnöjdhet">
        <div className="container ort-stats-grid">
          <div className="ort-stat-box">
            <span className="ort-stat-val">{location.stats.stat1.value}</span>
            <span className="ort-stat-lbl">{location.stats.stat1.label}</span>
          </div>
          <div className="ort-stat-box">
            <span className="ort-stat-val">{location.stats.stat2.value}</span>
            <span className="ort-stat-lbl">{location.stats.stat2.label}</span>
          </div>
          <div className="ort-stat-box">
            <span className="ort-stat-val">{location.stats.stat3.value}</span>
            <span className="ort-stat-lbl">{location.stats.stat3.label}</span>
          </div>
          <div className="ort-quote-box">
            <p className="ort-quote-text">"{location.stats.quote}"</p>
            <span className="ort-quote-author">{location.stats.quoteAuthor}</span>
          </div>
        </div>
      </section>

      {/* Services in Ort */}
      <section className="ort-services-section container" aria-label="Våra eltjänster lokalt">
        <span className="eyebrow">DET VI GÖR I {location.name.toUpperCase()}</span>
        <h2>
          Kompletta eltjänster{" "}
          <span className="ort-highlight">
            lokalt
            <svg
              className="ort-underline-svg"
              viewBox="0 0 100 20"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M4,15 Q50,4 96,13"
                fill="none"
                stroke="#d71920"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>
        <div className="ort-services-grid">
          {location.services.map((service) => (
            <Link
              key={service.number}
              to={`/tjanster/${service.serviceSlug}`}
              className="ort-service-card"
            >
              <div className="ort-service-card-top">
                <span className="ort-service-num">{service.number}</span>
                <span className="ort-service-arrow" aria-hidden="true">↗</span>
              </div>
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Choose Växjö Eltjänst in Ort */}
      <section className="ort-usps-section" aria-label="Varför välja Växjö Eltjänst">
        <div className="container">
          <span className="eyebrow eyebrow--light">VARFÖR VÄXJÖ ELTJÄNST I {location.name.toUpperCase()}</span>
          <h2>Trygga elinstallationer som håller måttet</h2>
          <div className="ort-usps-grid">
            {location.usps.map((usp) => (
              <div key={usp.number} className="ort-usp-card">
                <span className="ort-usp-num">{usp.number}</span>
                <h3>{usp.title}</h3>
                <p>{usp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Process */}
      <section className="ort-process-section container" aria-label="Så jobbar vi">
        <div className="ort-process-grid">
          <div className="ort-process-heading-sticky">
            <span className="eyebrow">SÅ JOBBAR VI</span>
            <h2>Från första kontakt till godkänd elinstallation</h2>
            <p style={{ marginTop: "16px", color: "#6b7280", fontSize: "1rem", lineHeight: "1.6" }}>
              En trygg och strukturerad process oavsett om ditt projekt är i {location.name} eller någon annanstans i {location.region}.
            </p>
          </div>

          <div className="ort-process-list">
            {location.processSteps.map((step, index) => {
              const isOpen = openProcessIndex === index;
              return (
                <div key={step.number} className={`ort-process-item ${isOpen ? "is-open" : ""}`}>
                  <button
                    type="button"
                    className="ort-process-toggle"
                    onClick={() => toggleProcess(index)}
                    aria-expanded={isOpen}
                  >
                    <div className="ort-process-title-wrap">
                      <span className="ort-process-index">{step.number}</span>
                      <span className="ort-process-step-title">{step.title}</span>
                    </div>
                    <span className="ort-process-symbol">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="symbol-cross"
                      >
                        <line x1="12" y1="5" x2="12" y2="19" className="symbol-vert" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </button>
                  <div className="ort-process-body" aria-hidden={!isOpen}>
                    <div className="ort-process-content">
                      <p className="ort-process-desc">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Local FAQ */}
      <section className="ort-faq-section" aria-label="Vanliga frågor om el i orten">
        <div className="container ort-faq-container">
          <div style={{ textAlign: "center" }}>
            <span className="eyebrow">VANLIGA FRÅGOR · {location.name.toUpperCase()}</span>
            <h2>Frågor om elarbeten i {location.name}</h2>
          </div>

          <div className="ort-faq-list">
            {location.faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={faq.question} className={`ort-faq-item ${isOpen ? "is-open" : ""}`}>
                  <button
                    type="button"
                    className="ort-faq-btn"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <span className="ort-faq-icon">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </button>
                  <div className="ort-faq-body" aria-hidden={!isOpen}>
                    <div className="ort-faq-content">
                      <div className="ort-faq-answer">{faq.answer}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="ort-bottom-cta">
        <div className="container ort-bottom-cta-inner">
          <span className="eyebrow eyebrow--light">REDO ATT STARTA?</span>
          <h2>Behöver du elektriker i {location.name}?</h2>
          <p>
            Vi hjälper dig med allt från mindre servicearbeten och laddboxar till kompletta elentreprenader i {location.name}. Skicka en förfrågan eller ring oss direkt.
          </p>
          <div className="ort-cta-buttons">
            <Link to={`/kontakt?ort=${location.slug}#offert`} className="button button--light">
              Begär offert för {location.name} <ArrowIcon />
            </Link>
            <a href="tel:+46705657021" className="button button--outline-light">
              Ring 070-565 70 21
            </a>
          </div>
        </div>
      </section>

      {/* Other Locations Bar */}
      <section className="ort-other-locations" aria-label="Andra orter">
        <div className="container">
          <h3 className="ort-other-locations-title">Auktoriserade elinstallationer i fler orter</h3>
          <div className="ort-other-pills">
            {otherLocations.map((loc) => (
              <Link key={loc.slug} to={`/orter/${loc.slug}`} className="footer-ort-pill">
                {loc.pillLabel}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
