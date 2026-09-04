import { Waves, ArrowRight } from 'lucide-react'

const columns = [
  {
    heading: 'Services',
    links: ['Recurring Cleaning', 'Deep Reset', 'Move In / Move Out'],
  },
  {
    heading: 'Company',
    links: ['Approach', 'Reviews', 'FAQ'],
  },
]

export function SiteFooter() {
  return (
    <footer id="quote" className="border-t border-border bg-primary text-primary-foreground">
      {/* CTA band */}
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="grid gap-8 border-b border-primary-foreground/20 pb-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/70">
              Next step
            </p>
            <h2 className="mt-4 max-w-lg text-balance font-serif text-3xl leading-tight md:text-4xl">
              Tell us about your home and we&apos;ll send a tailored quote.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <a
              href="mailto:hello@marea.care"
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Request your quote
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="grid gap-10 pt-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex size-8 items-center justify-center bg-primary-foreground text-primary">
                <Waves className="size-4" aria-hidden="true" />
              </span>
              <span className="font-serif text-xl font-semibold">Marea</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              Coastal residential home care designed for calm, consistent, and
              beautifully maintained spaces.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/60">
                {col.heading}
              </p>
              <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="transition-colors hover:text-primary-foreground">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-primary-foreground/20 pt-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Marea Home Care. All rights reserved.</p>
          <p>hello@marea.care · Mon–Sat, 9:00–18:00</p>
        </div>
      </div>
    </footer>
  )
}
