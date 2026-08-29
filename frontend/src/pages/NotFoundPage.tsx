import { Link } from "react-router-dom";
import { ArrowIcon, PageMeta } from "../components";

export function NotFoundPage() {
  return <main><PageMeta title="Sidan hittades inte" description="Sidan du söker finns inte." /><section className="not-found"><div><span className="eyebrow eyebrow--light">404</span><h1>Sidan hittades inte</h1><p>Länken kan vara gammal eller sidan kan ha flyttats.</p><Link className="button button--light" to="/">Till startsidan <ArrowIcon /></Link></div></section></main>;
}
