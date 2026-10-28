import { Link } from 'react-router-dom'
import { practice } from '../../../data/practice'
import { PractitionerPortrait } from '../../ui/PractitionerPortrait'
import { SectionEyebrow } from '../../ui/SectionEyebrow'

export function DoctorIntro() {
  const doctor = practice.practitioner
  return <section className="section doctor-intro">
    <div className="page-container doctor-intro__grid">
      <div className="doctor-intro__visual"><PractitionerPortrait variant="home" /></div>
      <div className="doctor-intro__copy">
        <SectionEyebrow>YOUR PHYSIOTHERAPIST</SectionEyebrow>
        <h2>{doctor.name}</h2>
        <p className="doctor-intro__title">{doctor.title}</p>
        <p className="doctor-intro__overview">{doctor.overview}</p>
        <div className="doctor-facts">
          <div><span>EXPERIENCE</span><strong>5+ years</strong></div>
          <div><span>EDUCATION</span><strong>{doctor.education}</strong><small>{doctor.institution}</small></div>
        </div>
        <Link to="/about" className="text-link">Meet Dr. Shimpi <span aria-hidden="true">→</span></Link>
      </div>
    </div>
  </section>
}
