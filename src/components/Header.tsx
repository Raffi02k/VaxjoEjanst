import { Menu, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { siteContent } from '../content/siteContent'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => setOpen(false), [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="header-inner shell">
          <Link className="brand" to="/" aria-label="Växjö Eltjänst startsida">
            <img src="/images/eltjanst-logo.png" alt="Växjö Eltjänst" />
          </Link>
          <nav className="desktop-nav" aria-label="Huvudnavigation">
            {siteContent.nav.map((item) => (
              <NavLink key={item.href} to={item.href} className={({ isActive }) => isActive ? 'active' : ''}>{item.label}</NavLink>
            ))}
          </nav>
          <div className="header-actions">
            <a className="phone-link" href={siteContent.company.phoneHref}><Phone size={17} /> {siteContent.company.phone}</a>
            <Link className="button button-red button-small" to="/kontakt">Begär offert <span>↗</span></Link>
            <button
              className="menu-button"
              onClick={() => setOpen(true)}
              aria-label="Öppna meny"
              aria-expanded={open}
              aria-controls="mobile-navigation"
            >
              <Menu />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div id="mobile-navigation" className="mobile-panel open" role="dialog" aria-modal="true" aria-label="Mobilnavigation">
          <button className="mobile-close" onClick={() => setOpen(false)} aria-label="Stäng meny"><X /></button>
          <div className="mobile-menu-kicker">VÄXJÖ ELTJÄNST</div>
          <nav aria-label="Mobilnavigation">
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>01 <span>Start</span></NavLink>
            {siteContent.nav.map((item, index) => (
              <NavLink key={item.href} to={item.href} className={({ isActive }) => isActive ? 'active' : ''}>0{index + 2} <span>{item.label}</span></NavLink>
            ))}
            <NavLink to="/kontakt" className={({ isActive }) => isActive ? 'active' : ''}>07 <span>Kontakt</span></NavLink>
          </nav>
          <div className="mobile-menu-bottom">
            <a href={siteContent.company.phoneHref}>{siteContent.company.phone}</a>
            <a href={siteContent.company.emailHref}>{siteContent.company.email}</a>
          </div>
        </div>
      )}
    </>
  )
}
