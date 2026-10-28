import { AnimatedSLine } from '../../ui/AnimatedSLine'
import { SectionHeading } from '../../ui/SectionHeading'

const principles = [
  { number: '01', title: 'Understand', text: "Care begins by understanding the individual's mobility concerns, recovery context, and functional needs." },
  { number: '02', title: 'Personalize', text: "Rehabilitation planning is tailored to the individual's condition and recovery requirements." },
  { number: '03', title: 'Progress', text: 'Care focuses on restoring mobility and function safely through appropriate rehabilitation and physiotherapy.' },
]

export function CareApproach() {
  return <section className="section care-approach">
    <div className="page-container">
      <SectionHeading eyebrow="A CONSIDERED APPROACH" title={<>Thoughtful rehabilitation,<br className="desktop-break" /> centered around the individual.</>} intro="Care that begins with listening, and makes space for a person's needs and recovery context." />
      <div className="approach-track" aria-hidden="true"><span /><span /><span /><AnimatedSLine height={88} duration={12} amplitude={4} /></div>
      <div className="approach-grid">
        {principles.map((item, index) => <article className="approach-item" key={item.number}>
          <span className="approach-item__number">{item.number}<span aria-hidden="true"> / 03</span></span>
          <h3>{item.title}</h3><p>{item.text}</p>
          <span className={`approach-item__mark approach-item__mark--${index + 1}`} aria-hidden="true">{index === 0 ? '◌' : index === 1 ? '⌁' : '○'}</span>
        </article>)}
      </div>
    </div>
  </section>
}
