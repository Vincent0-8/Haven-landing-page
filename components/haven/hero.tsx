import { Check, ArrowRight } from '@/components/icons'

const assurances = [
  'Vetted, background-checked cleaners',
  'Flexible routine-based scheduling',
  'Ocean-safe, low-toxicity products',
]

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 md:pt-12">
      <div className="animate-hero-enter relative overflow-hidden border border-border">
        <div
          aria-hidden="true"
          className="animate-blob absolute -left-20 -top-20 size-72 rounded-full bg-accent/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="animate-blob blob-delay-2 absolute -bottom-10 right-10 size-56 rounded-full bg-primary/25 blur-3xl"
        />

        <img
          src="/images/hero.png"
          alt="A bright, spotless coastal living room with large windows overlooking the sea"
          className="h-120 w-full object-cover md:h-145 lg:h-160"
          fetchPriority="high"
        />

        <div className="absolute inset-0 bg-linear-to-r from-primary/85 via-primary/50 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-xl p-5 sm:p-8 md:p-12">
            <p className="animate-fade-up stagger-1 mb-4 inline-block max-w-full bg-accent px-3 py-1 text-xs font-medium uppercase tracking-widest text-accent-foreground">
              Coastal residential cleaning
            </p>

            <h1 className="animate-fade-up stagger-2 text-balance font-serif text-3xl leading-[1.05] text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl">
              A cleaner home,{' '}
              <span className="italic">calmly maintained.</span>
            </h1>

            <p className="animate-fade-up stagger-3 mt-5 max-w-md text-pretty text-sm leading-relaxed text-primary-foreground/85 sm:text-base">
              Dependable home care for busy households. Haven handles the
              upkeep with precision so your space stays clear, fresh, and
              ready for real life.
            </p>

            <ul className="animate-fade-up stagger-4 mt-7 space-y-2.5">
              {assurances.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex size-5 shrink-0 items-center justify-center bg-accent text-accent-foreground">
                    <Check className="size-3.5" strokeWidth={2.25} aria-hidden="true" />
                  </span>
                  <span className="text-sm text-primary-foreground/90">{item}</span>
                </li>
              ))}
            </ul>

            <div className="animate-fade-up stagger-5 mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                id="hero-cta-primary"
                href="#contact"
                className="inline-flex w-full items-center justify-center gap-2 bg-accent px-6 py-3 text-center text-sm font-medium text-accent-foreground transition-colors hover:bg-primary-foreground hover:text-primary sm:w-auto"
              >
                Contact us
                <ArrowRight className="size-4" strokeWidth={2} aria-hidden="true" />
              </a>
              <a
                id="hero-cta-secondary"
                href="#services"
                className="inline-flex w-full items-center justify-center border border-primary-foreground/70 px-6 py-3 text-center text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary sm:w-auto"
              >
                See services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
