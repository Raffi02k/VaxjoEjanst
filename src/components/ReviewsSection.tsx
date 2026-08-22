import { Star } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import type { Review } from '../data/reviews'
import { fallbackReviews } from '../data/reviews'

const API = import.meta.env.VITE_API_BASE_URL || ''

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="rolling-review-card">
      <div className="rolling-review-top">
        <div className="stars" aria-label={`${review.rating} av 5 stjarnor`}>
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star key={i} size={16} fill="currentColor" />
          ))}
        </div>
        {review.demo && <span className="demo-review-badge">DEMO</span>}
      </div>
      <p>“{review.text}”</p>
      <div className="rolling-review-author">
        <strong>{review.author}</strong>
        <span>{review.demo ? 'Exempelomdome' : 'Google'}</span>
      </div>
    </article>
  )
}

export default function ReviewsSection() {
  const [liveReviews, setLiveReviews] = useState<Review[]>([])

  useEffect(() => {
    fetch(`${API}/api/reviews`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data) => setLiveReviews(Array.isArray(data.reviews) ? data.reviews : []))
      .catch(() => setLiveReviews([]))
  }, [])

  const reviews = liveReviews.length ? liveReviews : fallbackReviews
  const isDemo = !liveReviews.length
  const rollingReviews = useMemo(() => [...reviews, ...reviews], [reviews])

  return (
    <section className="reviews-section">
      <div className="shell reviews-top">
        <div>
          <span className="eyebrow light">KUNDOMDOMEN</span>
          <h2>Förtroende som får tala för sig självt.</h2>
          {isDemo && (
            <p className="reviews-demo-note">
              Tillfälliga demo-omdömen för presentation. Ersätts med verifierade Google-recensioner vid lansering.
            </p>
          )}
        </div>
        <div className="review-score-card">
          <div className="stars">{[1, 2, 3, 4, 5].map((i) => <Star key={i} size={20} fill="currentColor" />)}</div>
          <strong>{isDemo ? 'Demo-recensioner' : 'Google Reviews'}</strong>
          <span>{isDemo ? 'Automatisk koppling förberedd' : `${liveReviews.length} recensioner hämtade`}</span>
        </div>
      </div>

      <div className="reviews-marquee" aria-label="Kundomdomen">
        <div className="reviews-marquee-track">
          {rollingReviews.map((review, index) => (
            <ReviewCard key={`${review.id}-${index}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  )
}
