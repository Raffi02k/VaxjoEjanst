import { ArrowUpRight, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteContent } from '../content/siteContent'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-cta">
        <div>
          <span className="eyebrow light">BEHÖVER DU HJÄLP MED EL?</span>
          <h2>Vi tar ditt nästa projekt från fråga till färdig installation.</h2>
        </div>
        <Link className="round-cta" to="/kontakt" aria-label="Begär offert"><ArrowUpRight size={42} /></Link>
      </div>
      <div className="shell footer-grid">
        <div className="footer-brand">
          <img src="/images/eltjanst-logo.png" alt="Växjö Eltjänst" />
          <p>Professionella elinstallationer för privatpersoner, företag och fastigheter i Växjö med omnejd.</p>
        </div>
        <div>
          <h3>Navigation</h3>
          <Link to="/tjanster">Tjänster</Link>
          <Link to="/privat">Privat</Link>
          <Link to="/foretag">Företag</Link>
          <Link to="/projekt">Projekt</Link>
          <Link to="/om-oss">Om oss</Link>
        </div>
        <div>
          <h3>Kontakt</h3>
          <a href={siteContent.company.phoneHref}><Phone size={15} /> {siteContent.company.phone}</a>
          <a href={siteContent.company.emailHref}>{siteContent.company.email}</a>
          <span><MapPin size={15} /> {siteContent.company.address}</span>
        </div>
        <div>
          <h3>Företag</h3>
          <span>Org.nr {siteContent.company.organisationNumber}</span>
          <span>Grundat {siteContent.company.founded}</span>
          <span>En del av SELATEK</span>
        </div>
      </div>
      <div className="shell footer-bottom"><span>© {new Date().getFullYear()} Växjö Eltjänst AB</span><span>Webbkoncept för Växjö Eltjänst</span></div>
    </footer>
  )
}
