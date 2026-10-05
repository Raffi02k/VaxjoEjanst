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
    setOpen(false);
    setServicesOpen(false);
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  }

  function handleMobileNavClick(to: string, e?: React.MouseEvent) {
    setOpen(false);
    setServicesOpen(false);
    const targetPath = to.split("#")[0];
    const targetHash = to.includes("#") ? to.substring(to.indexOf("#")) : "";

    if (pathname === targetPath) {
      if (targetHash) {
        const el = document.querySelector(targetHash);
        if (el) {
          e?.preventDefault();
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      }
      e?.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
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
    if (!servicesOpen) return;
    const handlePointerDown = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target?.closest(".nav-dropdown") && !target?.closest(".mobile-services-trigger")) {
        setServicesOpen(false);
      }
    };
    window.addEventListener("pointerdown", handlePointerDown);
    return () => window.removeEventListener("pointerdown", handlePointerDown);
  }, [servicesOpen]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return <>
    <header className={`site-header ${scrolled || open || pathname !== "/" ? "is-scrolled" : ""}`}>
      <div className="header-inner">
        <nav className="desktop-nav desktop-nav--left" aria-label="Primär navigation vänster">
          <NavLink to="/om-oss">Om oss</NavLink>
          <div
            className={`nav-dropdown ${servicesOpen ? "is-open" : ""}`}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={(e) => {
              setServicesOpen(false);
              if (document.activeElement instanceof HTMLElement && e.currentTarget.contains(document.activeElement)) {
                document.activeElement.blur();
              }
            }}
          >
            <button
              type="button"
              className="nav-dropdown__trigger"
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              onClick={(e) => {
                setServicesOpen(v => {
                  if (v) {
                    (e.currentTarget as HTMLElement).blur();
                  }
                  return !v;
                });
              }}
            >
              Tjänster <span>⌄</span>
            </button>
            <div
              className="nav-dropdown__menu"
              onClick={() => {
                setServicesOpen(false);
                if (document.activeElement instanceof HTMLElement) {
                  document.activeElement.blur();
                }
              }}
            >
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
        <Link to="/" onClick={(e) => handleMobileNavClick("/", e)}>Start</Link>
        <Link to="/om-oss" onClick={(e) => handleMobileNavClick("/om-oss", e)}>Om oss</Link>
        <button className="mobile-services-trigger" onClick={() => setServicesOpen(v => !v)} aria-expanded={servicesOpen}>Tjänster <span>{servicesOpen ? "−" : "+"}</span></button>
        {servicesOpen && (
          <div className="mobile-services-panel">
            <Link to="/tjanster" onClick={(e) => handleMobileNavClick("/tjanster", e)}>Alla tjänster</Link>
            {services.map(s => (
              <Link key={s.slug} to={`/tjanster/${s.slug}`} onClick={(e) => handleMobileNavClick(`/tjanster/${s.slug}`, e)}>
                {s.shortTitle}
              </Link>
            ))}
          </div>
        )}
        <Link to="/projekt" onClick={(e) => handleMobileNavClick("/projekt", e)}>Projekt</Link>
        <Link to="/recensioner" onClick={(e) => handleMobileNavClick("/recensioner", e)}>Recensioner</Link>
        <Link to="/kontakt" onClick={(e) => handleMobileNavClick("/kontakt", e)}>Kontakt</Link>
      </nav>
      <Link className="button button--light mobile-menu__cta" to="/kontakt#offert" onClick={(e) => handleMobileNavClick("/kontakt#offert", e)}>
        Begär offert <ArrowIcon />
      </Link>
      <div className="mobile-menu__contact"><a href="tel:+46705657021">070-565 70 21</a><a href="mailto:mathias@vaxjoeltjanst.se">mathias@vaxjoeltjanst.se</a></div>
    </div>}
  </>;
}
