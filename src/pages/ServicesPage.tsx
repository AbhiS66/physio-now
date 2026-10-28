import { Link } from 'react-router-dom'
import { services } from '../data/services'
import { practice } from '../data/practice'
import { ServiceIcon } from '../components/ui/ServiceIcon'
import { SectionEyebrow } from '../components/ui/SectionEyebrow'
import { AnimatedSLine } from '../components/ui/AnimatedSLine'

export function ServicesPage() {
  return <div className="inner-page services-page">
    <section className="services-hero page-container"><div className="services-hero__copy"><SectionEyebrow>AREAS OF CARE</SectionEyebrow><h1>Rehabilitation for movement, recovery, and <em>everyday function.</em></h1><p>PhysioNOW provides orthopedic physiotherapy and rehabilitation across post-operative recovery, joint care, musculoskeletal concerns, sports rehabilitation, arthritis care, and manual therapy.</p><a className="text-link" href="#care-list">Explore areas of care <span aria-hidden="true">↓</span></a></div><div className="services-hero__art" aria-hidden="true"><div className="services-hero__art-orbit" /><AnimatedSLine height="180" duration={10} amplitude={8} /><span>CARE / 06</span></div><div className="services-hero__index" aria-hidden="true">01—06</div></section>
    <section className="service-details section section--soft" id="care-list"><div className="page-container"><div className="service-details__intro"><SectionEyebrow>ORTHOPEDIC PHYSIOTHERAPY</SectionEyebrow><h2>Care for the way<br /><em>you move through life.</em></h2><p>Explore the six areas of care supported by the PhysioNOW practice.</p></div>
      <div className="service-detail-list">{services.map((service, index) => <article className={`service-detail ${index % 2 ? 'service-detail--reverse' : ''}`} id={service.slug} key={service.slug}>
        <div className="service-detail__art"><div className={`service-detail__pattern service-detail__pattern--${index + 1}`}><span className="service-detail__art-number">{service.number}</span><svg className="service-detail__flow" viewBox="0 0 400 200" aria-hidden="true" focusable="false"><path d="M-25 143C48 143 62 50 139 53s78 97 148 94 76-35 138-77" /></svg><span className="service-detail__icon"><ServiceIcon type={service.icon} size={42} /></span><span className="service-detail__rings" aria-hidden="true" /><span className="service-detail__art-caption">PHYSIONOW / CARE</span></div></div>
        <div className="service-detail__copy"><div className="service-detail__heading"><span className="service-detail__number">{service.number} <i>/ 06</i></span><h3>{service.title}</h3></div><p className="service-detail__summary">{service.description}</p><p className="service-detail__detail">{service.detail}</p><Link to="/contact" className="text-link">Speak with PhysioNOW <span aria-hidden="true">→</span></Link></div>
      </article>)}</div>
    </div></section>
    <section className="services-cta"><div className="page-container services-cta__inner"><div><SectionEyebrow light>LET'S TALK ABOUT YOUR NEEDS</SectionEyebrow><h2>Not sure where your<br />concern fits?</h2></div><div><p>Speak directly with PhysioNOW about physiotherapy and rehabilitation.</p><a href={practice.phoneHref} className="button button--light">Call clinic <span aria-hidden="true">↗</span></a></div><span className="services-cta__flow" aria-hidden="true">⌁</span></div></section>
  </div>
}
