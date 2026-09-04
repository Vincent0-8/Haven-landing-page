import { Check, ArrowRight } from 'lucide-react'

const assurances = [
  'Vetted, background-checked cleaners',
  'Flexible routine-based scheduling',
  'Ocean-safe, low-toxicity products',
]

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-8 pb-16 md:pt-12">
      <div className="relative overflow-hidden border border-border">
        <img
          src="/images/hero.png"
          alt="A bright, spotless coastal living room with large windows overlooking the sea"
          className="h-[560px] w-full object-cover md:h-[640px]"
        />
        {/* Side gradient so the overlaid copy stays legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/45 to-transparent" />

        {/* Overlaid side text */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-xl p-6 md:p-12">
            <p className="mb-4 inline-block bg-accent px-3 py-1 text-xs font-medium uppercase tracking-widest text-accent-foreground">
              Coastal residential cleaning
            </p>
            <h1 className="text-balance font-serif text-4xl leading-[1.05] text-primary-foreground md:text-6xl">
              A cleaner home,{' '}
              <span className="italic">calmly maintained.</span>
            </h1>
            <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-primary-foreground/85">
              Dependable home care for busy households. We handle the upkeep
              with precision so your space stays clear, fresh, and ready for
              real life.
            </p>

            <ul className="mt-8 space-y-3">
              {assurances.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex size-5 shrink-0 items-center justify-center bg-accent text-accent-foreground">
                    <Check className="size-3.5" aria-hidden="true" />
                  </span>
                  <span className="text-sm text-primary-foreground/90">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-accent px-6 py-3 text-center text-sm font-medium text-accent-foreground transition-colors hover:bg-primary-foreground hover:text-primary"
              >
                Contact us
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
              <a
                href="#services"
                className="border border-primary-foreground/70 px-6 py-3 text-center text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary"
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
