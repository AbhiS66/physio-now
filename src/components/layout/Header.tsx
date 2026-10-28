import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { practice } from '../../data/practice'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Areas of Care', to: '/services' },
  { label: 'Contact', to: '/contact' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 12)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  useEffect(() => setOpen(false), [location.pathname, location.hash])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        setOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
    <div className="site-header__inner page-container">
      <Link to="/" className="brand" aria-label="PhysioNOW home">
        <img className="brand__logo" src="/images/physionow-logo-forest.png" alt="" width="104" height="53" decoding="async" />
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navItems.map(item => <NavLink key={item.to} to={item.to} end={item.to === '/'} className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}>{item.label}</NavLink>)}
      </nav>
      <a className="header-call" href={practice.phoneHref}><span className="header-call__icon" aria-hidden="true">↗</span><span>Call clinic</span></a>
      <button ref={menuButtonRef} className={`menu-toggle ${open ? 'menu-toggle--open' : ''}`} type="button" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(value => !value)}>
        <span /><span />
      </button>
    </div>
    <nav id="mobile-navigation" className={`mobile-nav ${open ? 'mobile-nav--open' : ''}`} aria-label="Mobile navigation" aria-hidden={!open}>
      <div className="mobile-nav__inner page-container">
        {navItems.map((item, index) => <NavLink key={item.to} to={item.to} end={item.to === '/'} tabIndex={open ? 0 : -1} className={({ isActive }) => `mobile-nav__link ${isActive ? 'mobile-nav__link--active' : ''}`}><span>0{index + 1}</span>{item.label}<b aria-hidden="true">↗</b></NavLink>)}
        <a className="button button--primary mobile-nav__call" href={practice.phoneHref} tabIndex={open ? 0 : -1}>Call {practice.phone}</a>
      </div>
    </nav>
  </header>
}
