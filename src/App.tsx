import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { PageShell } from './components/layout/PageShell'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { ServicesPage } from './pages/ServicesPage'
import { ContactPage } from './pages/ContactPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { practice } from './data/practice'

const pageMeta: Record<string, { title: string; description: string; path: string }> = {
  '/': { title: 'PhysioNOW | Physiotherapy & Rehabilitation in Powai, Mumbai', description: 'PhysioNOW provides orthopedic physiotherapy and rehabilitation in Powai, Mumbai, with care across post-operative recovery, joint rehabilitation, musculoskeletal concerns, sports injuries, arthritis and manual therapy.', path: '/' },
  '/about': { title: 'Dr. Avdhoot Shimpi (PT) | PhysioNOW Powai', description: 'Meet Dr. Avdhoot Shimpi (PT), Senior Orthopedic Physiotherapist at PhysioNOW in Powai, Mumbai.', path: '/about' },
  '/services': { title: 'Areas of Care | PhysioNOW Physiotherapy Powai', description: 'Explore orthopedic physiotherapy and rehabilitation areas of care at PhysioNOW in Powai, Mumbai.', path: '/services' },
  '/contact': { title: 'Contact PhysioNOW | Powai, Mumbai', description: 'Contact PhysioNOW by phone or email, or find the clinic in Powai, Mumbai.', path: '/contact' },
}

function RouteMeta() {
  const { pathname } = useLocation()
  useEffect(() => {
    const meta = pageMeta[pathname] ?? { title: 'Page not found | PhysioNOW', description: 'The requested page could not be found.', path: pathname }
    document.title = meta.title
    let description = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!description) {
      description = document.createElement('meta')
      description.name = 'description'
      document.head.append(description)
    }
    description.content = meta.description
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.append(canonical)
    }
    canonical.href = `${practice.canonical}${meta.path}`
  }, [pathname])
  return null
}

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => document.querySelector(hash)?.scrollIntoView({ block: 'start' }))
    } else {
      window.scrollTo({ top: 0, left: 0 })
    }
  }, [pathname, hash])
  return null
}

export default function App() {
  return <PageShell><RouteMeta /><ScrollToTop /><Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/services" element={<ServicesPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes></PageShell>
}
