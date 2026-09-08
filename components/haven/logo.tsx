import { Waves } from '@/components/icons'

interface HavenLogoProps {
  className?: string
  inverted?: boolean
}

export function HavenLogo({ className = '', inverted = false }: HavenLogoProps) {
  const badgeClass = inverted
    ? 'bg-primary-foreground text-primary'
    : 'bg-primary text-primary-foreground'

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <span
        className={`flex size-8 shrink-0 items-center justify-center ${badgeClass}`}
        aria-hidden="true"
      >
        <Waves className="size-4" strokeWidth={2} />
      </span>
      <span className="font-serif text-xl font-semibold tracking-tight">
        Haven
      </span>
    </div>
  )
}
