import { ArrowRight } from '@/components/icons'
import { HavenLogo } from '@/components/haven/logo'

const columns = [
  {
    heading: 'Services',
    links: [
      { label: 'Recurring Cleaning', href: '#services' },
      { label: 'Deep Reset', href: '#services' },
      { label: 'Move In / Move Out', href: '#services' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'Approach', href: '#approach' },
      { label: 'Reviews', href: '#reviews' },
      { label: 'Contact', href: '#contact' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="grid gap-8 border-b border-primary-foreground/20 pb-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div data-animate>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/70">
              Get in touch
            </p>
            <h2 className="mt-4 max-w-lg text-balance font-serif text-3xl leading-tight md:text-4xl">
              Tell us about your home and we&apos;ll take care of the rest.
            </h2>
          </div>
          <div data-animate data-delay="2" className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <a
              id="footer-contact-btn"
              href="mailto:hello@haven.care"
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Contact us
              <ArrowRight className="size-4" strokeWidth={2} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="grid gap-10 pt-14 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr]">
          <div data-animate>
            <HavenLogo inverted />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              Coastal residential home care designed for calm, consistent, and
              beautifully maintained spaces.
            </p>
          </div>

          {columns.map((col, i) => (
            <div key={col.heading} data-animate data-delay={String(i + 1)}>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/60">
                {col.heading}
              </p>
              <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="transition-colors hover:text-primary-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-primary-foreground/20 pt-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Haven Home Care. All rights reserved.</p>
          <p>hello@haven.care &middot; Mon&ndash;Sat, 9:00&ndash;18:00</p>
        </div>
      </div>
    </footer>
  )
}
