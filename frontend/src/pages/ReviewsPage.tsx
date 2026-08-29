import { Link } from "react-router-dom";
import { ArrowIcon, PageHero, PageMeta } from "../components";
import { reviews } from "../content";

export function ReviewsPage() {
  return <main><PageMeta title="Recensioner" description="Kundomdömen om Växjö Eltjänst. Demo tills verifierade Google Reviews kopplas in." /><PageHero eyebrow="Kundernas ord" title="Recensioner" text="Den här sidan är API-redo för verifierade Google-recensioner." /><section className="section"><div className="container reviews-page-grid">{reviews.map(r => <article className="review-card" key={r.author}><span className="review-demo">DEMO · EXEMPELOMDÖME</span><div className="stars">★★★★★</div><blockquote>“{r.text}”</blockquote><footer><b>{r.author}</b><span>Google Reviews – demo</span></footer></article>)}</div><div className="center-cta"><Link className="button button--dark" to="/kontakt">Kontakta oss <ArrowIcon /></Link></div></section></main>;
}
