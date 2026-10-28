import type { ReactNode } from 'react'
import { SectionEyebrow } from './SectionEyebrow'

export function SectionHeading({ eyebrow, title, intro, centered = false, light = false }: {
  eyebrow?: string; title: ReactNode; intro?: ReactNode; centered?: boolean; light?: boolean;
}) {
  return <div className={`section-heading ${centered ? 'section-heading--center' : ''} ${light ? 'section-heading--light' : ''}`}>
    {eyebrow && <SectionEyebrow light={light}>{eyebrow}</SectionEyebrow>}
    <h2>{title}</h2>
    {intro && <p className="section-heading__intro">{intro}</p>}
  </div>
}
