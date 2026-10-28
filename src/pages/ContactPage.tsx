import { practice } from '../data/practice'
import { ContactAction } from '../components/ui/ContactAction'
import { SectionEyebrow } from '../components/ui/SectionEyebrow'

export function ContactPage() {
  return <div className="inner-page contact-page">
    <section className="contact-hero page-container">
      <div className="contact-hero__copy">
        <SectionEyebrow>WE'RE HERE TO HELP YOU CONNECT</SectionEyebrow>
        <h1>Contact<br /><em>PhysioNOW.</em></h1>
        <p>For enquiries about physiotherapy and rehabilitation, contact the clinic directly by phone or email.</p>
      </div>
      <div className="contact-hero__panel">
        <SectionEyebrow>GET IN TOUCH</SectionEyebrow>
        <h2>Choose how you'd<br /><em>like to connect.</em></h2>
        <p>No forms or booking system — reach the clinic directly using the contact details below.</p>
        <div className="contact-actions-grid">
          <ContactAction kind="call" />
          <ContactAction kind="email" />
          <ContactAction kind="directions" />
        </div>
      </div>
    </section>
    <section className="contact-location section section--soft"><div className="page-container">
      <div className="location-card"><div className="location-card__copy"><SectionEyebrow>VISIT PHYSIONOW</SectionEyebrow><h2>Find us in<br /><em>Powai, Mumbai.</em></h2><address>{practice.addressLines.map((line, index) => <span key={index}>{line}</span>)}</address><a className="button button--primary" href={practice.directionsUrl} target="_blank" rel="noopener noreferrer">Open in Google Maps <span aria-hidden="true">↗</span></a></div>
        <iframe className="location-card__map" src={practice.mapEmbedUrl} title={`Google Map showing ${practice.address}`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
      </div>
    </div></section>
  </div>
}
