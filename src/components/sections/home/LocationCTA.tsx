import { Link } from 'react-router-dom'
import { practice } from '../../../data/practice'
import { SectionEyebrow } from '../../ui/SectionEyebrow'

export function LocationCTA() {
  return <section className="location-cta">
    <div className="page-container location-cta__inner">
      <div className="location-cta__copy"><SectionEyebrow light>FIND YOUR WAY TO PHYSIONOW</SectionEyebrow><h2>Physiotherapy care<br />in Powai, Mumbai.</h2><p>Personalized orthopedic rehabilitation, close to home.</p><Link to="/contact" className="button button--light">Contact PhysioNOW <span aria-hidden="true">↗</span></Link></div>
      <div className="location-cta__card">
        <div className="location-cta__card-head"><span className="location-cta__marker" aria-hidden="true">⌖</span><span>VISIT PHYSIONOW</span><span className="location-cta__card-index">MUMBAI / MH</span></div>
        <p>{practice.addressLines.map((line, index) => <span key={index}>{line}</span>)}</p>
        <div className="location-cta__card-footer"><a href={practice.directionsUrl} target="_blank" rel="noopener noreferrer">Get directions <span aria-hidden="true">↗</span></a><span>CHANDIVALI · POWAI</span></div>
        <div className="location-cta__map-lines" aria-hidden="true"><i /><i /><i /><i /><span /></div>
      </div>
      <div className="location-cta__side-note" aria-hidden="true">CARE WITHIN REACH · POWAI</div>
    </div>
  </section>
}
