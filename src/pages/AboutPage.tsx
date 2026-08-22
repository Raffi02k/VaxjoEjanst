import { CheckCircle2 } from 'lucide-react'
import PageMeta from '../components/PageMeta'
import SectionHeading from '../components/SectionHeading'
import { siteContent } from '../content/siteContent'

export default function AboutPage(){return <>
  <PageMeta title="Om oss | Växjö Eltjänst" description="Lär känna Växjö Eltjänst, etablerat i Växjö sedan 2008 och en del av SELATEK."/>
  <section className="page-hero light-page"><div className="shell"><span className="eyebrow">OM VÄXJÖ ELTJÄNST</span><h1>Lokalt elföretag med lång erfarenhet.</h1><p>Växjö Eltjänst grundades 2008 och arbetar med elinstallationer för privatpersoner, företag och fastigheter. Idag är bolaget en del av SELATEK.</p></div></section>
  <section className="section-pad"><div className="shell about-story"><div className="about-image"><img src="/images/hero-electrician.webp" alt="Elektriker från Växjö Eltjänst i arbete"/></div><div><SectionHeading eyebrow="SEDAN 2008" title="Närhet, ansvar och tekniskt kunnande." body="Webbplatsen är byggd för att lyfta fram det som ett etablerat installationsbolag faktiskt ska sälja på: förtroende, kompetens, tydliga kontaktvägar och verkliga projekt."/><div className="check-list dark-text"><span><CheckCircle2/> Lokal bas i Växjö</span><span><CheckCircle2/> Tjänster för privat och företag</span><span><CheckCircle2/> Del av SELATEK</span></div></div></div></section>
  <section className="facts-band"><div className="shell facts-grid"><div><strong>2008</strong><span>Grundat</span></div><div><strong>Växjö</strong><span>Huvudbas</span></div><div><strong>SELATEK</strong><span>Koncern</span></div><div><strong>{siteContent.company.organisationNumber}</strong><span>Org.nr</span></div></div></section>
</>}
