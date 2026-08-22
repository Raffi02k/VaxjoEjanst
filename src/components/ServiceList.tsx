import { ArrowUpRight } from 'lucide-react'
import { services } from '../data/services'

export default function ServiceList({ filter }: { filter?: 'Privat' | 'Företag' }) {
  const filtered = filter ? services.filter((s) => s.audience === filter || s.audience === 'Båda') : services
  return <div className="service-list">
    {filtered.map((service) => (
      <article className="service-row" key={service.slug}>
        <span className="service-number">{service.number}</span>
        <div>
          <div className="service-audience">{service.audience}</div>
          <h3>{service.title}</h3>
          <p>{service.short}</p>
        </div>
        <ArrowUpRight className="service-arrow" />
      </article>
    ))}
  </div>
}
