import { Link } from 'react-router-dom'
import { practice } from '../../data/practice'

export function Footer() {
  return <footer className="site-footer">
    <div className="page-container">
      <div className="site-footer__main">
        <div className="site-footer__brand-block">
          <Link to="/" className="brand brand--footer" aria-label="PhysioNOW home"><img className="brand__logo" src="/images/physionow-logo-ivory.png" alt="" width="104" height="53" decoding="async" /></Link>
          <p>Physiotherapy and rehabilitation in Powai, Mumbai.</p>
        </div>
        <div className="site-footer__column"><h2>Explore</h2><Link to="/">Home</Link><Link to="/about">About</Link><Link to="/services">Areas of Care</Link><Link to="/contact">Contact</Link></div>
        <div className="site-footer__column site-footer__contact"><h2>Contact</h2><a href={practice.phoneHref}>{practice.phone}</a><a href={practice.emailHref}>{practice.email}</a><span>{practice.abbreviatedAddress}</span></div>
        <div className="site-footer__note"><span className="site-footer__note-mark" aria-hidden="true">↗</span><p>Thoughtful physiotherapy. A steadier way back to movement.</p><Link to="/contact" className="text-link text-link--light">Get in touch <span aria-hidden="true">→</span></Link></div>
      </div>
      <div className="site-footer__bottom"><span>© {new Date().getFullYear()} PhysioNOW</span><span>{practice.website}</span><a href={practice.directionsUrl} target="_blank" rel="noopener noreferrer">Powai, Mumbai <span aria-hidden="true">↗</span></a></div>
    </div>
  </footer>
}
