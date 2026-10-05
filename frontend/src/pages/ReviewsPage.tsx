import { Link } from "react-router-dom";
import { ArrowIcon, GoogleIcon, PageHero, PageMeta } from "../components";
import { reviews } from "../content";

export function ReviewsPage() {
  return (
    <main>
      <PageMeta
        title="Recensioner"
        description="Kundomdömen om Växjö Eltjänst. Se vad våra kunder och samarbetspartners i Växjö tycker om våra elarbeten och service."
      />
      <PageHero
        eyebrow="Kundernas ord"
        title="Recensioner"
        text="Läs vad privatpersoner, bostadsrättsföreningar och företag i Växjö tycker om vårt arbete."
      />
      <section className="section">
        <div className="container reviews-page-grid">
          {reviews.map((r) => (
            <article className="review-card" key={r.author}>
              <div className="review-card__header">
                <div className="stars" aria-label="5 av 5 stjärnor">★★★★★</div>
                <span className="review-badge">
                  <GoogleIcon /> Google-recension
                </span>
              </div>
              <blockquote>“{r.text}”</blockquote>
              <footer>
                <b>{r.author}</b>
                <span>{r.role}</span>
              </footer>
            </article>
          ))}
        </div>
        <div className="center-cta">
          <Link className="button button--dark" to="/kontakt">
            Kontakta oss <ArrowIcon />
          </Link>
        </div>
      </section>
    </main>
  );
}
