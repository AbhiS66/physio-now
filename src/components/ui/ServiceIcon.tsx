import type { CareService } from '../../data/services'

const paths: Record<CareService['icon'], React.ReactNode> = {
  recovery: <><path d="M12 3v4M12 17v4M4.9 4.9l2.8 2.8m8.6 8.6 2.8 2.8M3 12h4m10 0h4M4.9 19.1l2.8-2.8m8.6-8.6 2.8-2.8"/><circle cx="12" cy="12" r="4"/><path d="m10.5 12 1 1 2-2"/></>,
  joint: <><path d="M8 4c2 2 2 4 0 6s-2 4 0 6 2 4 0 6M16 4c-2 2-2 4 0 6s2 4 0 6-2 4 0 6"/><path d="M8 10h8M8 16h8"/><circle cx="12" cy="13" r="2"/></>,
  spine: <><path d="M12 3v18M8 5c1.4 1.1 6.6 1.1 8 0M7.5 9c1.8 1.3 7.2 1.3 9 0M7.5 13c1.8 1.3 7.2 1.3 9 0M8 17c1.4 1.1 6.6 1.1 8 0"/><path d="m18 6 2 2-2 2"/></>,
  sport: <><circle cx="12" cy="12" r="9"/><path d="m7 6 4 3-1 4-4 2M17 6l-4 3 1 4 4 2M9 20l3-4 3 4"/></>,
  arthritis: <><path d="M6 4c2 2 2 5 0 7s-2 6 0 9M18 4c-2 2-2 5 0 7s2 6 0 9"/><path d="M6 11h12M6 14h12"/><circle cx="12" cy="12.5" r="2.5"/></>,
  manual: <><path d="M7 12V7a1.5 1.5 0 0 1 3 0v4-6a1.5 1.5 0 0 1 3 0v6-5a1.5 1.5 0 0 1 3 0v6-3a1.5 1.5 0 0 1 3 0v6c0 4-2.5 7-6 7h-1c-2.2 0-3.5-.8-4.7-2.5L4 15a1.8 1.8 0 0 1 3-2l2 2"/></>,
}

export function ServiceIcon({ type, size = 28 }: { type: CareService['icon']; size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[type]}</svg>
}
