import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import SectionHeading from '../components/SectionHeading'
import ServiceList from '../components/ServiceList'

export default function AudiencePage({ audience }: { audience: 'Privat'|'Företag' }) {
  const isPrivate = audience === 'Privat'
  return <>
    <PageMeta title={`${isPrivate ? 'För privatpersoner' : 'För företag & fastighet'} | Växjö Eltjänst`} description={`Elinstallationer i Växjö för ${isPrivate ? 'privatpersoner' : 'företag och fastigheter'}.`} />
    <section className={`page-hero ${isPrivate ? 'light-page' : 'dark-page'}`}><div className="shell"><span className={`eyebrow ${isPrivate ? '' : 'light'}`}>{isPrivate ? 'PRIVAT' : 'FÖRETAG & FASTIGHET'}</span><h1>{isPrivate ? 'Säker el för hemmet – utan krångel.' : 'En stabil elpartner för verksamhet och fastighet.'}</h1><p>{isPrivate ? 'Tydlig hjälp vid renovering, service, belysning, laddbox och andra elarbeten i hemmet.' : 'För löpande service, lokalanpassningar, fastighetsinstallationer och entreprenader där samordning och kvalitet är avgörande.'}</p><Link className={`button ${isPrivate ? 'button-red' : 'button-light'}`} to="/kontakt">Begär offert <ArrowRight size={18}/></Link></div></section>
    <section className="section-pad"><div className="shell"><SectionHeading eyebrow="RELEVANTA TJÄNSTER" title={isPrivate ? 'Det vanligaste vi hjälper hemägare med.' : 'Tjänster som passar verksamheter och fastigheter.'}/><ServiceList filter={audience}/></div></section>
    <section className="benefit-band"><div className="shell benefit-grid">{(isPrivate ? ['Tydlig kontaktväg','Säker installation','Lösningar för vardagen','Lokalt i Växjö'] : ['Löpande service','Projektstöd','Dokumenterad installation','Lokal kontakt']).map(x => <div key={x}><CheckCircle2/><span>{x}</span></div>)}</div></section>
  </>
}
