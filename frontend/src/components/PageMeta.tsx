import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function PageMeta({ title, description }: { title: string; description: string }) {
  const location = useLocation();

  useEffect(() => {
    document.title = `${title} | Växjö Eltjänst`;
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) { meta = document.createElement("meta"); meta.name = "description"; document.head.appendChild(meta); }
    meta.content = description;
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = `${window.location.origin}${location.pathname}`;
  }, [title, description, location.pathname]);

  return null;
}
