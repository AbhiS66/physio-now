import type { ReactNode } from 'react'
import { Footer } from './Footer'
import { FloatingContactActions } from './FloatingContactActions'
import { Header } from './Header'

export function PageShell({ children }: { children: ReactNode }) {
  return <><a className="skip-link" href="#main-content">Skip to main content</a><Header /><main id="main-content">{children}</main><FloatingContactActions /><Footer /></>
}
