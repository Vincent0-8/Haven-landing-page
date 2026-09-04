import { Check } from 'lucide-react'

const assurances = [
  'Carefully vetted, background-checked cleaners',
  'Flexible routine-based scheduling',
  'Ocean-safe, low-toxicity products',
]

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-12 pb-16 md:pt-16">
      <div className="grid items-stretch gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left: image with headline overlay */}
        <div className="relative overflow-hidden border border-border">
          <img
            src="/images/hero.png"
            alt="A bright, spotless coastal living room with large windows overlooking the sea"
            className="h-full min-h-[380px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 md:p-8">
            <p className="mb-3 inline-block bg-background/90 px-3 py-1 text-xs font-medium uppercase tracking-widest text-foreground">
              Coastal residential cleaning
            </p>
            <h1 className="max-w-md font-serif text-4xl leading-[1.05] text-primary-foreground md:text-5xl">
              A cleaner home,{' '}
              <span className="italic">calmly maintained.</span>
            </h1>
          </div>
        </div>

        {/* Right: copy + assurances */}
        <div className="flex flex-col justify-between border border-border bg-card p-6 md:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              The Marea standard
            </p>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              Dependable home care for busy households. We handle the upkeep
              with precision so your space stays clear, fresh, and ready for
              real life.
            </p>

            <ul className="mt-8 space-y-4">
              {assurances.map((item) => (
                <li key={item} className="flex items-start gap-3 border-t border-border pt-4">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center bg-accent text-accent-foreground">
                    <Check className="size-3.5" aria-hidden="true" />
                  </span>
                  <span className="text-sm text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#quote"
              className="bg-primary px-6 py-3 text-center text-sm font-medium text-primary-foreground transition-colors hover:bg-accent"
            >
              Get a quote
            </a>
            <a
              href="#services"
              className="border border-primary px-6 py-3 text-center text-sm font-medium text-primary transition-colors hover:bg-secondary"
            >
              See services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
