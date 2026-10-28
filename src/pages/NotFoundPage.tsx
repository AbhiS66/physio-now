import { Link } from 'react-router-dom'
import { SectionEyebrow } from '../components/ui/SectionEyebrow'

export function NotFoundPage() {
  return <section className="not-found page-container"><div className="not-found__number">404</div><SectionEyebrow>PAGE NOT FOUND</SectionEyebrow><h1>This page took<br /><em>a wrong turn.</em></h1><p>The page you’re looking for may have moved. Let’s get you back to PhysioNOW.</p><Link className="button button--primary" to="/">Back to homepage <span aria-hidden="true">→</span></Link></section>
}
