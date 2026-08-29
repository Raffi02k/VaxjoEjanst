import { Link } from "react-router-dom";
import { projects } from "../content";
import { ArrowIcon } from "./ArrowIcon";

export function ProjectsSection({ compact = false }: { compact?: boolean }) {
  return <section className="section projects-section"><div className="container"><header className="section-heading"><span className="eyebrow">Vårt arbete</span><h2>Projekt & installationer</h2><p>Tillfälliga demobilder visar hur riktiga Växjö-projekt kan presenteras.</p></header><div className="projects-grid">{projects.map(([image, alt], index) => <figure className={`project-tile project-tile--${index + 1}`} key={image}><img src={image} alt={alt} loading="lazy" /><figcaption><span>Demoprojekt</span><b>Elinstallation · Växjö</b></figcaption></figure>)}</div>{compact && <div className="center-cta"><Link className="button button--outline" to="/projekt">Se alla projekt <ArrowIcon /></Link></div>}</div></section>;
}
