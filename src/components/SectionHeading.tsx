type Props = {
  eyebrow: string;
  title: string;
  body?: string;
  light?: boolean;
  eyebrowClassName?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  body,
  light,
  eyebrowClassName = ''
}: Props) {
  return (
    <div className={`section-heading ${light ? 'light' : ''}`}>
      {eyebrow && (
        <span className={`eyebrow ${light ? 'light' : ''} ${eyebrowClassName}`}>
          {eyebrow}
        </span>
      )}
      <h2>{title}</h2>
      {body && <p>{body}</p>}
    </div>
  )
}