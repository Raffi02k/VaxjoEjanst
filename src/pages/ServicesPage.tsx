import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import SectionHeading from '../components/SectionHeading'
import ServiceList from '../components/ServiceList'

export default function ServicesPage(){ return <>
  <PageMeta title="Tjänster | Växjö Eltjänst" description="Elinstallationer, service, belysning, laddbox och entreprenad i Växjö." />
  <section className="page-hero dark-page"><div className="shell"><span className="eyebrow light">TJÄNSTER</span><h1>Elkompetens för hela projektet.</h1><p>Från mindre service till större installationer. Här får varje tjänst en tydlig plats – bra för både kundresan och lokal SEO.</p></div></section>
  <section className="section-pad"><div className="shell"><ServiceList/></div></section>
  <section className="cta-panel"><div className="shell cta-panel-inner"><SectionHeading light eyebrow="OSÄKER PÅ VAD DU BEHÖVER?" title="Beskriv problemet så hjälper vi dig vidare."/><Link className="button button-light" to="/kontakt">Kontakta oss <ArrowRight size={18}/></Link></div></section>
</> }
