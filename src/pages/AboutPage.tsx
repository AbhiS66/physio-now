import { Link } from 'react-router-dom'
import { practice } from '../data/practice'
import { services } from '../data/services'
import { PractitionerPortrait } from '../components/ui/PractitionerPortrait'
import { ServiceIcon } from '../components/ui/ServiceIcon'
import { SectionEyebrow } from '../components/ui/SectionEyebrow'

export function AboutPage() {
  const doctor = practice.practitioner
  return <div className="inner-page about-page">
    <section className="inner-hero page-container inner-hero--split">
      <div className="inner-hero__copy"><SectionEyebrow>ABOUT YOUR PHYSIOTHERAPIST</SectionEyebrow><h1>Dr. Avdhoot<br /><em>Shimpi (PT)</em></h1><p className="inner-hero__subtitle">{doctor.title}</p><p className="inner-hero__intro">Personalized orthopedic rehabilitation, manual therapy, and support for recovery after surgery or athletic injury.</p></div>
      <div className="inner-hero__visual"><PractitionerPortrait variant="about" loading="eager" /></div>
    </section>
    <section className="about-profile section section--soft">
      <div className="page-container about-profile__grid">
        <div><SectionEyebrow>EXPERIENCE &amp; EDUCATION</SectionEyebrow><h2>Care grounded in<br /><em>experience and listening.</em></h2></div>
        <div className="about-profile__body"><p>{doctor.overview}</p><div className="profile-details"><div><span className="profile-details__label">CLINICAL EXPERIENCE</span><strong>Over 5 years</strong><p>Orthopedic rehabilitation · Manual therapy · Post-surgical recovery</p></div><div><span className="profile-details__label">EDUCATION</span><strong>{doctor.education}</strong><p>{doctor.institution}</p></div></div></div>
      </div>
    </section>
    <section className="section about-expertise">
      <div className="page-container"><div className="about-expertise__head"><div><SectionEyebrow>CLINICAL FOCUS</SectionEyebrow><h2>Areas of expertise</h2></div><p>Orthopedic physiotherapy across recovery, joint and musculoskeletal care, and mobility.</p></div>
        <div className="expertise-list">{services.map(service => <Link to={`/services#${service.slug}`} className="expertise-row" key={service.slug}><span className="expertise-row__number">{service.number}</span><span className="expertise-row__icon"><ServiceIcon type={service.icon} size={24} /></span><span className="expertise-row__content"><strong>{service.title}</strong><small>{service.description}</small></span><span className="expertise-row__arrow" aria-hidden="true">↗</span></Link>)}</div>
      </div>
    </section>
    <section className="about-approach section">
      <div className="page-container about-approach__grid"><div><SectionEyebrow>THE CARE EXPERIENCE</SectionEyebrow><h2>Care that considers<br />the person, not just<br /><em>the condition.</em></h2></div><div className="about-approach__copy"><p>Personalized care plans and patient-centered communication are central to the way Dr. Shimpi works with people.</p><p>His practice focuses on helping individuals regain mobility and supporting rehabilitation after surgery or athletic injury, alongside orthopedic and musculoskeletal concerns.</p><p>Each person's recovery context and functional needs help shape the conversation around care.</p><div className="about-approach__rule" /></div></div>
    </section>
    <section className="about-cta section"><div className="page-container about-cta__panel"><div><SectionEyebrow>START A CONVERSATION</SectionEyebrow><h2>Need to speak<br />with PhysioNOW?</h2></div><div className="about-cta__actions"><a className="button button--primary" href={practice.phoneHref}>Call {practice.phone}<span aria-hidden="true">↗</span></a><Link className="button button--outline" to="/contact">Contact clinic <span aria-hidden="true">→</span></Link></div><span className="about-cta__scribble" aria-hidden="true">⌁</span></div></section>
  </div>
}
