export type Review = {
  id: string
  author: string
  rating: number
  text: string
  date?: string
  source: 'google' | 'manual'
  demo?: boolean
}

// Tillfalliga demo-omdomen for layout och presentation.
// De ersatts av riktiga Google-recensioner nar /api/reviews returnerar data.
export const fallbackReviews: Review[] = [
  {
    id: 'demo-01',
    author: 'Anna K.',
    rating: 5,
    text: 'Snabb och smidig hjalp fran forsta kontakt till fardigt arbete. Tydlig kommunikation och ett professionellt bemotande.',
    source: 'manual',
    demo: true,
  },
  {
    id: 'demo-02',
    author: 'Johan M.',
    rating: 5,
    text: 'Valdigt nojd med helheten. Arbetet blev snyggt utfort och allt forklarades pa ett enkelt och tryggt satt.',
    source: 'manual',
    demo: true,
  },
  {
    id: 'demo-03',
    author: 'Maria S.',
    rating: 5,
    text: 'Trevliga, punktliga och losningsorienterade. Vi fick bra hjalp och snabb aterkoppling under hela arbetet.',
    source: 'manual',
    demo: true,
  },
  {
    id: 'demo-04',
    author: 'Anders L.',
    rating: 5,
    text: 'Proffsigt fran start till slut. Kandes tryggt att fa tydliga besked om arbetet och vad som behovde goras.',
    source: 'manual',
    demo: true,
  },
  {
    id: 'demo-05',
    author: 'Sara B.',
    rating: 5,
    text: 'Bra service, fint resultat och enkel kontakt. Precis den typ av hantverkare man vill kunna ringa igen.',
    source: 'manual',
    demo: true,
  },
  {
    id: 'demo-06',
    author: 'Erik P.',
    rating: 5,
    text: 'Kunnigt bemotande och effektivt arbete. Vi uppskattade sarskilt att de var tydliga och holl oss uppdaterade.',
    source: 'manual',
    demo: true,
  },
]
