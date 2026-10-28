type PractitionerPortraitProps = {
  variant: 'home' | 'about'
  loading?: 'eager' | 'lazy'
}

export function PractitionerPortrait({ variant, loading = 'lazy' }: PractitionerPortraitProps) {
  return <figure className={`practitioner-portrait practitioner-portrait--${variant}`}>
    <img
      src="/images/avdhoot-shimpi.jpeg"
      alt="Portrait of Dr. Avdhoot Shimpi"
      loading={loading}
      fetchPriority={loading === 'eager' ? 'high' : 'auto'}
      decoding="async"
    />
  </figure>
}
