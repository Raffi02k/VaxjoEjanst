import { ArrowDownRight, ArrowRight, Building2, CheckCircle2, MapPin, ShieldCheck, UsersRound, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import ReviewsSection from '../components/ReviewsSection'
import SectionHeading from '../components/SectionHeading'
import ServiceList from '../components/ServiceList'
import { siteContent } from '../content/siteContent'
import { projects } from '../data/projects'

export default function HomePage() {
  return <>
    <PageMeta title="Växjö Eltjänst | Din elpartner i Växjö" description="Professionella elinstallationer, service och entreprenad för privatpersoner, företag och fastigheter i Växjö med omnejd." />

    <section className="hero">
      <div className="hero-media"><img src="/images/hero-electrician.webp" alt="Elektriker arbetar med en elinstallation" /></div>
      <div className="hero-overlay" />
      <div className="shell hero-inner">
        <div className="hero-copy">
          <span className="eyebrow light hero-kicker"><Zap size={15} /> {siteContent.hero.eyebrow}</span>
          <h1>Trygg el<br /><span>Rätt utförd</span></h1>
          <p>{siteContent.hero.body}</p>
          <div className="hero-actions">
            <Link className="button button-red" to="/kontakt">Begär offert <ArrowRight size={18} /></Link>
            <a className="button button-ghost" href={siteContent.company.phoneHref}>Ring {siteContent.company.phone}</a>
          </div>
        </div>
        <div className="hero-facts">
          <div><strong>2008</strong><span>Grundat i Växjö</span></div>
          <div><strong>Lokalt</strong><span>Växjö & Kronoberg</span></div>
          <div><strong>SELATEK</strong><span>En del av koncernen</span></div>
        </div>
      </div>
      <a href="#tjanster" className="hero-scroll">UTFORSKA <ArrowDownRight /></a>
    </section>

    <div className="ticker" aria-hidden="true"><div className="ticker-track">ELINSTALLATIONER <span>•</span> SERVICE & FELSÖKNING <span>•</span> BELYSNING <span>•</span> FASTIGHET <span>•</span> ENTREPRENAD <span>•</span> LADDBOX <span>•</span> ELINSTALLATIONER <span>•</span> SERVICE & FELSÖKNING <span>•</span> BELYSNING <span>•</span></div></div>

    <section className="intro-section section-pad">
      <div className="shell intro-grid">
        <div className="intro-badge"><span>VÄXJÖ</span><div className="pulse-dot" /> ELTJÄNST</div>
        <div>
          <span className="eyebrow">DIN LOKALA ELPARTNER</span>
          <h2 className="display-medium">Från mindre servicejobb till större installationer.</h2>
          <p className="lead">Vi kombinerar lokal närvaro med teknisk kompetens och ett arbetssätt där säkerhet, kvalitet och långsiktighet står i centrum.</p>
          <Link className="text-link" to="/om-oss">Lär känna Växjö Eltjänst <ArrowRight size={17} /></Link>
        </div>
      </div>
    </section>

    <section className="dark-section section-pad" id="tjanster">
      <div className="shell">
        <SectionHeading light eyebrow="VAD VI HJÄLPER TILL MED" title="El för hem, företag och fastighet." body="Tjänsterna är strukturerade så att kunden snabbt hittar rätt – oavsett om det gäller ett uttag hemma eller en större företagsinstallation." />
        <ServiceList />
        <div className="section-action"><Link className="button button-light" to="/tjanster">Se alla tjänster <ArrowRight size={18} /></Link></div>
      </div>
    </section>

    <section className="split-audience section-pad">
      <div className="shell audience-grid">
        <Link to="/privat" className="audience-card audience-private">
          <div className="audience-top"><span>01</span><UsersRound /></div>
          <div><span className="eyebrow">FÖR PRIVATPERSONER</span><h3>Trygga lösningar hemma.</h3><p>Renovering, service, belysning, laddbox och andra elarbeten – tydligt förklarat och professionellt utfört.</p></div>
          <ArrowRight className="audience-arrow" />
        </Link>
        <Link to="/foretag" className="audience-card audience-business">
          <div className="audience-top"><span>02</span><Building2 /></div>
          <div><span className="eyebrow light">FÖR FÖRETAG & FASTIGHET</span><h3>En elpartner som följer projektet.</h3><p>Service, ombyggnation, lokalanpassning och entreprenad för verksamheter och fastighetsägare.</p></div>
          <ArrowRight className="audience-arrow" />
        </Link>
      </div>
    </section>

    <section className="selatek-section section-pad">
      <div className="shell selatek-grid">
        <div className="selatek-image-wrap"><img src="/images/selatek-partnership.jpeg" alt="Växjö Eltjänst och SELATEK" /><span>LOKALT ENTREPRENÖRSKAP + STARK KONCERN</span></div>
        <div className="selatek-copy">
          <span className="eyebrow">EN DEL AV SELATEK</span>
          <h2>Lokalt kvar. Större möjligheter.</h2>
          <p>Växjö Eltjänst är en del av installationskoncernen SELATEK. Det ger en starkare plattform och större nätverk, samtidigt som den lokala identiteten och närheten till kunden står kvar.</p>
          <div className="check-list">
            <span><ShieldCheck /> Lokal närvaro och ansvar</span>
            <span><CheckCircle2 /> Kompetens och resurser</span>
            <span><MapPin /> Växjö som bas</span>
          </div>
        </div>
      </div>
    </section>

    <section className="projects-section section-pad">
      <div className="shell">
        <div className="projects-header"><SectionHeading eyebrow="PROJEKT & REFERENSER" title="Visa jobbet. Bygg förtroendet." body="Projektsektionen är redo för Växjö Eltjänsts riktiga bilder och case. Vi publicerar inte påhittade kundprojekt." /><Link className="text-link" to="/projekt">Alla projekt <ArrowRight size={17} /></Link></div>
        <div className="project-grid">
          {projects.map((project, index) => <article className={`project-card project-${index + 1}`} key={project.slug}>
            <div className="project-media">{project.image ? <img src={project.image} alt="" /> : <div className="project-placeholder"><Zap size={48} /></div>}<span className="project-index">0{index + 1}</span></div>
            <div className="project-meta"><span>{project.tag}</span>{project.placeholder && <span className="demo-label">CASE-MALL</span>}</div>
            <h3>{project.title}</h3><p>{project.description}</p>
          </article>)}
        </div>
      </div>
    </section>

    <ReviewsSection />

    <section className="process-strip section-pad">
      <div className="shell">
        <SectionHeading eyebrow="ENKELT FRÅN START" title="Från första kontakt till färdig installation." />
        <div className="process-grid">
          {[['01', 'Kontakt', 'Berätta vad du behöver hjälp med.'], ['02', 'Genomgång', 'Vi går igenom behov, plats och omfattning.'], ['03', 'Plan & offert', 'Du får en tydlig väg framåt.'], ['04', 'Utförande', 'Installationen genomförs säkert och professionellt.']].map(([n, t, b]) => <div className="process-step" key={n}><span>{n}</span><h3>{t}</h3><p>{b}</p></div>)}
        </div>
      </div>
    </section>

    <section className="contact-banner">
      <div className="shell contact-banner-inner">
        <div><span className="eyebrow light">HAR DU ETT PROJEKT?</span><h2>Berätta vad som ska lösas.</h2><p>Vi återkommer med nästa steg och hjälper dig hitta rätt väg framåt.</p></div>
        <Link className="button button-light" to="/kontakt">Starta en förfrågan <ArrowRight size={18} /></Link>
      </div>
    </section>
  </>
}
