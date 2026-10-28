const mapsDestination = 'Ansa Industrial Estate, Saki Vihar Rd, Saki Vihar, Chandivali, Powai, Mumbai, Maharashtra 400072, India'

export const practice = {
  name: 'PhysioNOW',
  phone: '7304495664',
  phoneHref: 'tel:+917304495664',
  email: 'reachphysionow@gmail.com',
  emailHref: 'mailto:reachphysionow@gmail.com',
  address: 'Saki Vihar Rd, Saki Vihar, Ansa Industrial Estate, Chandivali, Powai, Mumbai, Maharashtra 400072',
  addressLines: [
    'Saki Vihar Rd, Saki Vihar,',
    'Ansa Industrial Estate, Chandivali,',
    'Powai, Mumbai, Maharashtra 400072',
  ],
  abbreviatedAddress: 'Saki Vihar · Chandivali · Powai, Mumbai',
  directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapsDestination)}`,
  mapEmbedUrl: `https://maps.google.com/maps?q=${encodeURIComponent(mapsDestination)}&output=embed`,
  website: 'www.getphysionow.in',
  canonical: 'https://www.getphysionow.in',
  practitioner: {
    name: 'Dr. Avdhoot Shimpi (PT)',
    title: 'Senior Orthopedic Physiotherapist',
    experience: 'Over 5 years of clinical experience',
    education: 'Bachelor of Physiotherapy (BPTh - Orthopedics)',
    institution: 'KEM Hospital & Seth G.S. Medical College, Mumbai',
    overview: 'Dr. Avdhoot Shimpi is a Senior Orthopedic Physiotherapist with over 5 years of clinical experience specializing in orthopedic rehabilitation, manual therapy, and post-surgical recovery. Known for his personalized care plans and patient-centered communication, he helps individuals regain mobility, alleviate chronic pain, and recover safely following surgery or athletic injury.',
  },
} as const
