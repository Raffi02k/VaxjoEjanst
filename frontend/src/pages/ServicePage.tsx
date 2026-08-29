import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowIcon, PageHero, PageMeta } from "../components";
import { services } from "../content";

export function ServicePage() {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);

  if (!service) return <Navigate to="/404" replace />;

  return <main><PageMeta title={service.title} description={`${service.intro} Växjö Eltjänst – din lokala elpartner.`} /><PageHero eyebrow={service.eyebrow} title={service.title} text={service.intro} image={service.image} />
    <section className="section service-intro"><div className="container service-intro__grid"><div><span className="eyebrow">Växjö Eltjänst</span><h2>En genomtänkt lösning från början.</h2><p>{service.description}</p><p>Vi börjar med att förstå behovet, förutsättningarna på plats och vad som är viktigast för dig. Därefter planeras en lösning som är trygg att använda och byggd för att hålla.</p></div><img src={service.secondaryImage} alt="Elinstallation utförd av Växjö Eltjänst" /></div></section>
    {service.details.map((detail, index) => <section className={`section service-detail ${index % 2 ? "service-detail--alt" : ""}`} key={detail.title}><div className={`container service-detail__grid ${index % 2 ? "is-reversed" : ""}`}><div><span className="detail-number">0{index + 1}</span><h2>{detail.title}</h2><p>{detail.text}</p><ul>{detail.bullets.map(b => <li key={b}>{b}</li>)}</ul></div><img src={index ? service.image : service.secondaryImage} alt="" loading="lazy" /></div></section>)}
    <section className="section service-benefits"><div className="container"><header className="section-heading section-heading--dark"><span className="eyebrow eyebrow--light">Varför välja oss</span><h2>Tryggt hela vägen</h2></header><div className="benefits-grid">{service.benefits.map((b, i) => <article key={b.title}><span>0{i + 1}</span><h3>{b.title}</h3><p>{b.text}</p></article>)}</div></div></section>
    <section className="section service-process"><div className="container"><header className="section-heading"><span className="eyebrow">Vår process</span><h2>Så går det till</h2></header><div className="process-grid">{[["01", "Förfrågan", "Berätta kort vad du behöver hjälp med."], ["02", "Genomgång", "Vi stämmer av plats, omfattning och förutsättningar."], ["03", "Förslag & offert", "Du får ett tydligt upplägg för arbetet."], ["04", "Installation", "Arbetet utförs, kontrolleras och lämnas över."]].map(([n, t, x]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{x}</p></article>)}</div></div></section>
    <section className="service-cta"><div className="container"><h2>Behöver du hjälp med {service.shortTitle.toLowerCase()}?</h2><p>Skicka en förfrågan så återkommer vi för att gå igenom ditt projekt.</p><div><Link className="button button--light" to={`/kontakt?service=${encodeURIComponent(service.title)}#offert`}>Begär offert <ArrowIcon /></Link><a className="button button--outline-light" href="tel:+46705657021">Ring 070-565 70 21</a></div></div></section>
  </main>;
}
