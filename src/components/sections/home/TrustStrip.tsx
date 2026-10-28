import { practice } from '../../../data/practice'

export function TrustStrip() {
  return <section className="trust-strip" aria-label="About PhysioNOW">
    <div className="page-container trust-strip__inner">
      <div className="trust-strip__intro"><span className="trust-strip__spark" aria-hidden="true">✳</span><span>Care shaped around how you move</span></div>
      <div className="trust-item"><strong>5<span>+</span></strong><span>years clinical<br />experience</span></div>
      <div className="trust-item"><span className="trust-item__icon" aria-hidden="true">⌁</span><span>Orthopedic<br />physiotherapy</span></div>
      <div className="trust-item"><span className="trust-item__icon trust-item__icon--person" aria-hidden="true">◎</span><span>Personalized<br />rehabilitation</span></div>
      <a href={practice.phoneHref} className="trust-strip__link">Speak with PhysioNOW <span aria-hidden="true">↗</span></a>
    </div>
  </section>
}
