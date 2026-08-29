import { Link } from "react-router-dom";
import { services } from "../content";
import { LogoMark } from "./LogoMark";

export function Footer() {
  return <footer className="site-footer"><div className="container footer-grid">
    <div className="footer-brand"><LogoMark /><p>Trygga elinstallationer.<br />Byggda för att hålla.</p><span>Växjö med omnejd</span></div>
    <div><h3>Snabblänkar</h3><Link to="/">Start</Link><Link to="/om-oss">Om oss</Link><Link to="/projekt">Projekt</Link><Link to="/recensioner">Recensioner</Link><Link to="/kontakt">Kontakt</Link></div>
    <div><h3>Tjänster</h3>{services.map(s => <Link key={s.slug} to={`/tjanster/${s.slug}`}>{s.shortTitle}</Link>)}</div>
    <div><h3>Kontakt</h3><a href="tel:+46705657021">070-565 70 21</a><a href="mailto:mathias@vaxjoeltjanst.se">mathias@vaxjoeltjanst.se</a><a href="https://maps.app.goo.gl/QT9BFcycFYcC9qkb8?g_st=ic" target="_blank" rel="noreferrer">Smedjegatan 20A<br />352 46 Växjö</a></div>
  </div><div className="footer-bottom container"><span>© 2026 Växjö Eltjänst AB</span><span>Org.nr 556752-1140</span></div></footer>;
}
