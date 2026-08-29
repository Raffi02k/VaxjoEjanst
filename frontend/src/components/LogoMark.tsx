export function LogoMark({ hero = false }: { hero?: boolean }) {
  return <span className={`brand-mark ${hero ? "brand-mark--hero" : ""}`} aria-label="Växjö Eltjänst"><span className="brand-mark__frame"><span className="brand-mark__name">ELTJÄNST</span></span><span className="brand-mark__city">VÄXJÖ</span></span>;
}
