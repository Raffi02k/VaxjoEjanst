export function PageHero({ eyebrow, title, text, image }: { eyebrow?: string; title: string; text: string; image?: string }) {
  return <section className={`page-hero ${image ? "page-hero--image" : ""}`} style={image ? { backgroundImage: `linear-gradient(90deg,rgba(0,0,0,.8),rgba(0,0,0,.28)),url(${image})` } : undefined}><div className="container"><span className="eyebrow eyebrow--light">{eyebrow}</span><h1>{title}</h1><p>{text}</p></div></section>;
}
