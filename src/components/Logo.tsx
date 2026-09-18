interface LogoProps {
  className?: string
  variant?: 'full' | 'mark'
  theme?: 'light' | 'dark'
  height?: number | string
  alt?: string
}

export function Logo({
  className = 'brand-logo',
  variant = 'full',
  theme = 'light',
  height = 38,
  alt = 'Coreva',
}: LogoProps) {
  const src =
    variant === 'mark'
      ? '/logo-mark.png'
      : theme === 'dark'
        ? '/logo-white.png'
        : '/logo.png'

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={{ height, width: 'auto', display: 'block', objectFit: 'contain' }}
    />
  )
}
