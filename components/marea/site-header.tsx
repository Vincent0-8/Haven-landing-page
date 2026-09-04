import { Waves } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Approach', href: '#approach' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Quote', href: '#quote' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#" className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center bg-primary text-primary-foreground">
            <Waves className="size-4" aria-hidden="true" />
          </span>
          <span className="font-serif text-xl font-semibold tracking-tight text-foreground">
            Marea
          </span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm text-muted-foreground">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#quote"
          className="bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent"
        >
          Get a quote
        </a>
      </div>
    </header>
  )
}
