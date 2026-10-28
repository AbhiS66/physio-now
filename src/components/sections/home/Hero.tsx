import { Link } from 'react-router-dom'
import { AnimatedSLine } from '../../ui/AnimatedSLine'
import { practice } from '../../../data/practice'

export function Hero() {
  return <section className="hero page-container">
    <div className="hero__copy">
      <p className="eyebrow"><span className="eyebrow__dot" />PHYSIOTHERAPY &amp; REHABILITATION <span className="eyebrow__divider">·</span> POWAI</p>
      <h1>Move better.<br /><em>Recover with confidence.</em></h1>
      <p className="hero__intro">Personalized orthopedic physiotherapy and rehabilitation focused on restoring mobility, managing musculoskeletal concerns, and supporting safe recovery after surgery or injury.</p>
      <div className="hero__actions">
        <a href={practice.phoneHref} className="button button--primary">Call {practice.phone}<span aria-hidden="true">↗</span></a>
        <Link to="/services" className="button button--text">Explore areas of care <span aria-hidden="true">→</span></Link>
      </div>
      <p className="hero__location"><span aria-hidden="true">⌖</span>{practice.abbreviatedAddress}</p>
    </div>
    <div className="hero-art" role="img" aria-label="Abstract artwork inspired by movement and rehabilitation">
      <div className="hero-art__wash" />
      <div className="hero-art__halo hero-art__halo--large" />
      <div className="hero-art__halo hero-art__halo--small" />
      <div className="hero-art__arc hero-art__arc--one" />
      <div className="hero-art__arc hero-art__arc--two" />
      <div className="hero-art__disc"><span>MOVE<br />WITH<br /><i>CARE</i></span><b aria-hidden="true"><svg viewBox="0 0 28 28" fill="none"><path d="M4 8c6-6 9 3 15 2 2-.3 4-1.5 5-3M4 20c6 6 9-3 15-2 2 .3 4 1.5 5 3M4 14h20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><circle cx="21.5" cy="5.5" r="1.4" fill="#F2A08C"/></svg></b></div>
      <div className="hero-art__dot hero-art__dot--coral" />
      <div className="hero-art__dot hero-art__dot--green" />
      <AnimatedSLine className="hero-art__sline" height="34%" duration={10} amplitude={12} />
      <div className="hero-art__caption"><span>CARE / 06</span><span>ORTHOPEDIC REHABILITATION<br />MOBILITY · RECOVERY</span></div>
      <div className="hero-art__vertical-label">A PERSONALIZED APPROACH TO MOVEMENT</div>
    </div>
    <div className="hero__index" aria-hidden="true"><span>01</span><i /></div>
  </section>
}
