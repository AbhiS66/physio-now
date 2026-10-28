export function SectionEyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`eyebrow ${light ? 'eyebrow--light' : ''}`}><span className="eyebrow__dot" />{children}</p>
}
