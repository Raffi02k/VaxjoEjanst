export type Service = {
  slug: string
  number: string
  title: string
  short: string
  audience: 'Privat' | 'Företag' | 'Båda'
  bullets: string[]
}

export const services: Service[] = [
  {
    slug: 'elinstallation',
    number: '01',
    title: 'Elinstallation & renovering',
    short: 'Säkra och genomtänkta installationer vid renovering, ombyggnad och nyproduktion.',
    audience: 'Båda',
    bullets: ['Elcentraler och jordfelsbrytare', 'Nya uttag och eldragning', 'Om- och nybyggnation', 'Dokumentation och kontroll'],
  },
  {
    slug: 'service-felsokning',
    number: '02',
    title: 'Service & felsökning',
    short: 'När något inte fungerar hittar vi orsaken och hjälper dig vidare med en säker lösning.',
    audience: 'Båda',
    bullets: ['Felsökning', 'Reparationer', 'Löpande service', 'Mindre elarbeten'],
  },
  {
    slug: 'belysning',
    number: '03',
    title: 'Belysning & styrning',
    short: 'Funktionell och energieffektiv belysning för hem, kontor, butik och fastighet.',
    audience: 'Båda',
    bullets: ['Inne- och utebelysning', 'LED-lösningar', 'Styrning och automation', 'Anpassning efter miljö'],
  },
  {
    slug: 'laddbox',
    number: '04',
    title: 'Laddbox & grön teknik',
    short: 'Förberedda lösningar för elbilsladdning och annan modern elektrifiering.',
    audience: 'Privat',
    bullets: ['Laddbox hemma', 'Förberedelse och matning', 'Lastbalansering där det passar', 'Kontroll av befintlig elanläggning'],
  },
  {
    slug: 'fastighet',
    number: '05',
    title: 'Fastighet & entreprenad',
    short: 'Elinstallationer och löpande stöd för företag, fastighetsägare, lokaler och entreprenader.',
    audience: 'Företag',
    bullets: ['Kontor och butik', 'Fastighetsservice', 'Entreprenader', 'Anpassningar och ombyggnader'],
  },
  {
    slug: 'data',
    number: '06',
    title: 'Data & teknisk infrastruktur',
    short: 'Strukturerade installationer för nätverk och teknisk infrastruktur i verksamhetsmiljöer.',
    audience: 'Företag',
    bullets: ['Nätverkskablage', 'Tekniska installationer', 'Förberedelser för system', 'Samordning med övrig installation'],
  },
]
