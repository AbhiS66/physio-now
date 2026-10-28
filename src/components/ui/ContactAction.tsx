import { practice } from '../../data/practice'

type ContactKind = 'call' | 'email' | 'directions'

const contactDetails: Record<ContactKind, { title: string; value: string; href: string; icon: string; external?: boolean }> = {
  call: { title: 'Call', value: practice.phone, href: practice.phoneHref, icon: '↗' },
  email: { title: 'Email', value: practice.email, href: practice.emailHref, icon: '↗' },
  directions: { title: 'Visit', value: practice.address, href: practice.directionsUrl, icon: '↗', external: true },
}

export function ContactAction({ kind, compact = false }: { kind: ContactKind; compact?: boolean }) {
  const detail = contactDetails[kind]
  return <a className={`contact-action contact-action--${kind} ${compact ? 'contact-action--compact' : ''}`} href={detail.href} {...(detail.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
    <span className="contact-action__icon" aria-hidden="true">{detail.icon}</span>
    <span className="contact-action__copy"><span className="contact-action__title">{detail.title}</span><span className="contact-action__value">{detail.value}</span></span>
    <span className="contact-action__arrow" aria-hidden="true">↗</span>
  </a>
}
