import { Mail, MapPin, Phone } from 'lucide-react'
import ContactForm from '../components/ContactForm'
import PageMeta from '../components/PageMeta'
import { siteContent } from '../content/siteContent'

export default function ContactPage(){return <>
  <PageMeta title="Kontakt & offert | Växjö Eltjänst" description="Kontakta Växjö Eltjänst för elinstallation, service eller offert i Växjö."/>
  <section className="page-hero dark-page contact-page-hero"><div className="shell"><span className="eyebrow light">KONTAKT & OFFERT</span><h1>Vad behöver du hjälp med?</h1><p>Beskriv projektet så tydligt du kan. Formuläret skickas via FastAPI och är förberett för e-postleverans och framtida lead-hantering.</p></div></section>
  <section className="contact-layout section-pad"><div className="shell contact-grid"><div className="contact-info"><span className="eyebrow">DIREKTKONTAKT</span><h2>Växjö Eltjänst AB</h2><a href={siteContent.company.phoneHref}><Phone/> {siteContent.company.phone}</a><a href={siteContent.company.emailHref}><Mail/> {siteContent.company.email}</a><span><MapPin/> {siteContent.company.address}</span><div className="contact-people">{siteContent.contacts.map(p=><article key={p.name}><strong>{p.name}</strong><span>{p.role}</span><a href={p.phoneHref}>{p.phone}</a><a href={`mailto:${p.email}`}>{p.email}</a></article>)}</div></div><ContactForm/></div></section>
</>}
