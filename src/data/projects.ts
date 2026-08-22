export type Project = {
  slug: string
  tag: string
  title: string
  description: string
  image?: string
  placeholder?: boolean
}

export const projects: Project[] = [
  {
    slug: 'service-installation',
    tag: 'SERVICE & INSTALLATION',
    title: 'Elservice i vardagen',
    description: 'Plats för ett riktigt Växjö Eltjänst-case med bilder, omfattning och resultat när projektmaterial finns tillgängligt.',
    image: '/images/hero-electrician.webp',
    placeholder: true,
  },
  {
    slug: 'foretag-fastighet',
    tag: 'FÖRETAG & FASTIGHET',
    title: 'Installationer för verksamheter',
    description: 'Case-mall redo för kontor, butik, fastighet eller entreprenad. Inga påhittade projekt publiceras.',
    placeholder: true,
  },
  {
    slug: 'belysning',
    tag: 'BELYSNING',
    title: 'Belysning som fungerar i miljön',
    description: 'Här kan ni senare visa före/efter, teknisk lösning och kundens behov med riktiga bilder.',
    placeholder: true,
  },
]
