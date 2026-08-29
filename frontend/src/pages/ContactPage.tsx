import { ArrowIcon, ContactForm, PageHero, PageMeta } from "../components";

export function ContactPage() {
  const params = new URLSearchParams(window.location.search);
  const selected = params.get("service") ?? "";

  return <main><PageMeta title="Kontakt & offert" description="Kontakta Växjö Eltjänst eller skicka en offertförfrågan för elarbete i Växjö med omnejd." /><PageHero eyebrow="Kontakt" title="Prata med en riktig person" text="Ring oss direkt eller fyll i formuläret. Vi återkommer så snart vi kan." />
    <section className="section contact-page"><div className="container contact-page__grid"><div className="contact-page__info"><span className="eyebrow">Hör av dig</span><h2>Vi hjälper dig vidare.</h2><p>Berätta om jobbet, var det ska utföras och ungefär när du vill komma igång.</p><div className="contact-list"><a href="tel:+46705657021"><small>Telefon · Mathias Sandström</small><b>070-565 70 21</b></a><a href="mailto:mathias@vaxjoeltjanst.se"><small>E-post</small><b>mathias@vaxjoeltjanst.se</b></a><a href="https://maps.app.goo.gl/QT9BFcycFYcC9qkb8?g_st=ic" target="_blank" rel="noreferrer"><small>Besöksadress</small><b>Smedjegatan 20A, 352 46 Växjö</b></a></div><a className="button button--dark" href="tel:+46705657021">Ring oss nu</a></div><div className="form-panel"><h2>Skicka en förfrågan</h2><p>Fält markerade med * är obligatoriska.</p><ContactForm defaultService={selected} /></div></div></section>
    <section className="section map-section"><div className="container"><header className="section-heading"><span className="eyebrow">Hitta hit</span><h2>Växjö med omnejd</h2><p>Smedjegatan 20A, 352 46 Växjö</p></header><div className="map-wrap"><iframe title="Karta till Växjö Eltjänst" src="https://www.google.com/maps?q=Smedjegatan%2020A%2C%20352%2046%20V%C3%A4xj%C3%B6&t=k&z=18&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /><a href="https://maps.app.goo.gl/QT9BFcycFYcC9qkb8?g_st=ic" target="_blank" rel="noreferrer">Öppna i Google Maps <ArrowIcon /></a></div></div></section>
  </main>;
}
