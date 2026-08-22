type Props = { eyebrow: string; title: string; body?: string; light?: boolean }
export default function SectionHeading({ eyebrow, title, body, light }: Props) {
  return <div className={`section-heading ${light ? 'light' : ''}`}>
    <span className={`eyebrow ${light ? 'light' : ''}`}>{eyebrow}</span>
    <h2>{title}</h2>
    {body && <p>{body}</p>}
  </div>
}
