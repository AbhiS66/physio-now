import { useId, type CSSProperties } from 'react'

export type AnimatedSLineProps = {
  width?: number | string
  height?: number | string
  primaryStroke?: string
  secondaryStroke?: string
  strokeWidth?: number
  duration?: number
  amplitude?: number
  enabled?: boolean
  className?: string
  label?: string
}

export function AnimatedSLine({
  width = '100%', height = '100%', primaryStroke = '#215C4F', secondaryStroke = '#E77A64',
  strokeWidth = 2.6, duration = 10, amplitude = 12, enabled = true, className = '', label,
}: AnimatedSLineProps) {
  const gradientId = useId().replace(/:/g, '')
  const style = {
    width, height, '--sline-duration': `${duration}s`, '--sline-amplitude': `${amplitude}%`,
    '--sline-primary': primaryStroke, '--sline-secondary': secondaryStroke, '--sline-stroke': strokeWidth,
  } as CSSProperties

  return (
    <div className={`animated-sline ${enabled ? '' : 'animated-sline--static'} ${className}`} style={style} aria-hidden={label ? undefined : true} role={label ? 'img' : undefined} aria-label={label}>
      <svg viewBox="0 0 1400 300" preserveAspectRatio="none" focusable="false">
        <defs>
          <linearGradient id={`${gradientId}-gradient`} x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="var(--sline-primary)" stopOpacity=".14" />
            <stop offset=".3" stopColor="var(--sline-primary)" stopOpacity=".92" />
            <stop offset=".68" stopColor="var(--sline-primary)" stopOpacity=".86" />
            <stop offset="1" stopColor="var(--sline-primary)" stopOpacity=".2" />
          </linearGradient>
          <linearGradient id={`${gradientId}-accent`} x1="0" x2="1" y1="0" y2="0">
            <stop offset=".42" stopColor="var(--sline-primary)" />
            <stop offset=".55" stopColor="var(--sline-secondary)" />
            <stop offset=".64" stopColor="var(--sline-primary)" />
          </linearGradient>
        </defs>
        <g className="animated-sline__travel">
          <path className="animated-sline__halo" d="M -240 154 C -60 154 115 48 285 58 S 472 240 650 220 S 830 54 1010 64 S 1190 232 1640 126" />
          <path className="animated-sline__path" stroke={`url(#${gradientId}-gradient)`} d="M -240 154 C -60 154 115 48 285 58 S 472 240 650 220 S 830 54 1010 64 S 1190 232 1640 126" />
          <path className="animated-sline__accent" stroke={`url(#${gradientId}-accent)`} d="M -240 154 C -60 154 115 48 285 58 S 472 240 650 220 S 830 54 1010 64 S 1190 232 1640 126" />
        </g>
      </svg>
    </div>
  )
}
