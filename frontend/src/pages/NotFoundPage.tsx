import { Link } from "react-router-dom";
import { PageMeta } from "../components";

export function NotFoundPage() {
  return (
    <main className="not-found">
      <PageMeta title="404" description="Sidan du söker finns inte." />
      <meta name="robots" content="noindex" />
      <section className="not-found__panel" aria-labelledby="not-found-title">
        <p className="eyebrow eyebrow--light">404 · Sidan hittades inte</p>
        <h1 id="not-found-title">Den sidan finns inte.</h1>
        <p>Det verkar bara vara den här sidan som saknas, inte hela webbplatsen.</p>
        <p>Gå tillbaka till startsidan, se våra tjänster eller kontakta oss om länken verkar fel.</p>
        <div className="not-found__actions">
          <Link className="button not-found__primary" to="/">Till startsidan</Link>
          <Link className="button button--outline-light" to="/tjanster">Våra tjänster</Link>
          <Link className="button button--outline-light" to="/kontakt">Kontakta oss</Link>
        </div>
      </section>
    </main>
  );
}
