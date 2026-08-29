import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { services } from "../content";
import { ArrowIcon } from "./ArrowIcon";
import { LogoMark } from "./LogoMark";

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  function handleLogoClick(e: React.MouseEvent) {
    e.preventDefault();
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return <>
    <header className={`site-header ${scrolled || open || pathname !== "/" ? "is-scrolled" : ""}`}>
      <div className="header-inner">
        <nav className="desktop-nav desktop-nav--left" aria-label="Primär navigation vänster">
          <NavLink to="/om-oss">Om oss</NavLink>
          <div className="nav-dropdown">
            <button type="button" className="nav-dropdown__trigger" aria-haspopup="true" aria-expanded={servicesOpen} onClick={() => setServicesOpen(v => !v)}>Tjänster <span>⌄</span></button>
            <div className="nav-dropdown__menu">
              <Link to="/tjanster">Alla tjänster</Link>
              {services.map(service => <Link key={service.slug} to={`/tjanster/${service.slug}`}>{service.shortTitle}</Link>)}
            </div>
          </div>
        </nav>
        <Link to="/" className="header-logo" aria-label="Växjö Eltjänst – startsida" onClick={handleLogoClick}><LogoMark /></Link>
        <nav className="desktop-nav desktop-nav--right" aria-label="Primär navigation höger">
          <NavLink to="/projekt">Projekt</NavLink><NavLink to="/kontakt">Kontakt</NavLink><Link className="header-cta" to="/kontakt#offert">Begär offert</Link>
        </nav>
        <button className={`menu-button ${open ? "is-open" : ""}`} type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Stäng meny" : "Öppna meny"} onClick={() => setOpen(v => !v)}><span /><span /><span /></button>
      </div>
    </header>
    {open && <div className="mobile-menu" id="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobilmeny">
      <nav className="mobile-menu__links">
        <Link to="/">Start</Link><Link to="/om-oss">Om oss</Link>
        <button className="mobile-services-trigger" onClick={() => setServicesOpen(v => !v)} aria-expanded={servicesOpen}>Tjänster <span>{servicesOpen ? "−" : "+"}</span></button>
        {servicesOpen && <div className="mobile-services-panel"><Link to="/tjanster">Alla tjänster</Link>{services.map(s => <Link key={s.slug} to={`/tjanster/${s.slug}`}>{s.shortTitle}</Link>)}</div>}
        <Link to="/projekt">Projekt</Link><Link to="/recensioner">Recensioner</Link><Link to="/kontakt">Kontakt</Link>
      </nav>
      <Link className="button button--light mobile-menu__cta" to="/kontakt#offert">Begär offert <ArrowIcon /></Link>
      <div className="mobile-menu__contact"><a href="tel:+46705657021">070-565 70 21</a><a href="mailto:mathias@vaxjoeltjanst.se">mathias@vaxjoeltjanst.se</a></div>
    </div>}
  </>;
}
