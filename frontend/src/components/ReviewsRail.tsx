import { Link } from "react-router-dom";
import { reviews } from "../content";
import { ArrowIcon } from "./ArrowIcon";

export function ReviewsRail() {
  return <section className="section testimonials"><header className="section-heading container"><span className="eyebrow">Vad kunder säger</span><h2>Byggt på förtroende</h2><p>Exempelomdömen i väntan på koppling till verifierade Google-recensioner.</p></header>
    <div className="reviews-window"><div className="reviews-track">{[...reviews, ...reviews].map((review, index) => <article className="review-card" key={`${review.author}-${index}`} aria-hidden={index >= reviews.length}><span className="review-demo">DEMO · EXEMPELOMDÖME</span><div className="stars" aria-label="5 av 5 stjärnor">★★★★★</div><blockquote>“{review.text}”</blockquote><footer><b>{review.author}</b><span>Google Reviews – demo</span></footer></article>)}</div></div>
    <div className="reviews-cta"><Link className="button button--outline" to="/recensioner">Läs alla recensioner <ArrowIcon /></Link></div>
  </section>;
}
