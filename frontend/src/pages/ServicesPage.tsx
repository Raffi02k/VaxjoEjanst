import { Link } from "react-router-dom";
import { ArrowIcon, PageHero, PageMeta } from "../components";
import { services } from "../content";

export function ServicesPage() {
  return <main><PageMeta title="Eltjänster" description="Se Växjö Eltjänsts tjänster för privatpersoner, företag och fastigheter." /><PageHero eyebrow="Våra tjänster" title="Kompletta eltjänster" text="Tre tydliga tjänsteområden. Välj det som bäst matchar ditt projekt och läs mer." image="/images/project-23695.jpg" /><section className="section"><div className="container services-list">{services.map((s, i) => <article className={`service-list-item ${i % 2 ? "is-reversed" : ""}`} key={s.slug}><img src={s.image} alt="" /><div><span className="eyebrow">0{i + 1} · {s.eyebrow}</span><h2>{s.title}</h2><p>{s.description}</p><Link className="button button--dark" to={`/tjanster/${s.slug}`}>Utforska tjänsten <ArrowIcon /></Link></div></article>)}</div></section></main>;
}
