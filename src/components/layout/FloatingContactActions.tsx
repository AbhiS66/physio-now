import { practice } from '../../data/practice'

const internationalPhone = practice.phoneHref.replace(/^tel:\+/, '')

export function FloatingContactActions() {
  return <div className="floating-contact" role="group" aria-label="Quick contact">
    <a className="floating-contact__link floating-contact__link--call" href={practice.phoneHref} aria-label={`Call PhysioNOW at ${practice.phone}`}>
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M7.2 3.8 9.5 3.4c.7-.1 1.2.2 1.5.8l1.1 2.7c.2.5.1 1-.3 1.4l-1.4 1.4a12.1 12.1 0 0 0 5.9 5.9l1.4-1.4c.4-.4.9-.5 1.4-.3l2.7 1.1c.6.3.9.8.8 1.5l-.4 2.3c-.1.7-.7 1.2-1.4 1.2A16.6 16.6 0 0 1 3.4 5.2c0-.7.5-1.3 1.2-1.4Z" />
      </svg>
      <span className="floating-contact__tooltip" aria-hidden="true">Call {practice.phone}</span>
    </a>
    <a className="floating-contact__link floating-contact__link--whatsapp" href={`https://wa.me/${internationalPhone}`} target="_blank" rel="noopener noreferrer" aria-label="Chat with PhysioNOW on WhatsApp">
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20.3 11.7a8.2 8.2 0 0 1-12.1 7.2L4 20l1.1-4A8.2 8.2 0 1 1 20.3 11.7Z" />
        <path d="M9 8.2c.2-.4.4-.4.7-.4h.4c.2 0 .3.1.4.4l.6 1.4c.1.2.1.4-.1.6l-.5.6c-.2.2-.2.3-.1.5.4.8 1 1.4 1.8 1.9.2.1.4.1.5-.1l.6-.7c.2-.2.4-.2.6-.1l1.3.6c.3.1.4.3.4.5 0 .4-.2 1-.6 1.3-.4.4-1 .6-1.7.5-1-.1-2.2-.7-3.4-1.8-1.1-1-1.8-2.3-1.9-3.2-.1-.7.2-1.4.6-2Z" />
      </svg>
      <span className="floating-contact__tooltip" aria-hidden="true">WhatsApp</span>
    </a>
  </div>
}
