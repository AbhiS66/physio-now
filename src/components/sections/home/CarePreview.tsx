import { Link } from 'react-router-dom'
import { services } from '../../../data/services'
import { ServiceIcon } from '../../ui/ServiceIcon'
import { SectionHeading } from '../../ui/SectionHeading'

export function CarePreview() {
  return <section className="section care-preview">
    <div className="page-container">
      <div className="care-preview__heading-row">
        <SectionHeading eyebrow="AREAS OF CARE" title={<>Care built around how<br className="desktop-break" /> you need to move again.</>} intro="Orthopedic physiotherapy and rehabilitation to support recovery, mobility, and everyday function." />
        <Link to="/services" className="text-link">All areas of care <span aria-hidden="true">↗</span></Link>
      </div>
      <div className="service-grid">
        {services.map(service => <Link className="service-card" to={`/services#${service.slug}`} key={service.slug}>
          <span className="service-card__number">{service.number}</span>
          <span className="service-card__icon"><ServiceIcon type={service.icon} /></span>
          <span className="service-card__title">{service.title}</span>
          <span className="service-card__description">{service.description}</span>
          <span className="service-card__arrow" aria-hidden="true">↗</span>
        </Link>)}
      </div>
      <div className="care-preview__foot"><span>Six connected areas of orthopedic care</span><span className="care-preview__foot-line" aria-hidden="true" /><Link to="/services" className="text-link">Explore our approach <span aria-hidden="true">→</span></Link></div>
    </div>
  </section>
}
