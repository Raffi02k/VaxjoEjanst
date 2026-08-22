import { useEffect } from 'react'

type Props = { title: string; description: string; image?: string }

function upsertMeta(selector: string, attribute: string, value: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, value)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

export default function PageMeta({ title, description, image = '/images/hero-electrician.webp' }: Props) {
  useEffect(() => {
    document.title = title
    upsertMeta('meta[name="description"]', 'name', 'description', description)
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', title)
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', description)
    upsertMeta('meta[property="og:type"]', 'property', 'og:type', 'website')

    const absoluteImage = image.startsWith('http') ? image : `${window.location.origin}${image}`
    upsertMeta('meta[property="og:image"]', 'property', 'og:image', absoluteImage)

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = `${window.location.origin}${window.location.pathname}`
  }, [title, description, image])
  return null
}
