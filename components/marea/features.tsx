import { ShieldCheck, CalendarDays, Sparkles, Leaf } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Vetted professionals',
    body: 'Every cleaner is background-checked and selected for reliability and care.',
  },
  {
    icon: CalendarDays,
    title: 'Flexible scheduling',
    body: 'Plans adapt to your week — set a cadence or adjust it whenever life shifts.',
  },
  {
    icon: Sparkles,
    title: 'Attention to detail',
    body: 'We focus on the subtle signals of a truly maintained home, not just the surface.',
  },
  {
    icon: Leaf,
    title: 'Ocean-safe products',
    body: 'Low-toxicity supplies chosen to be gentle on your home and the coastline.',
  },
]

export function Features() {
  return (
    <section id="approach" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* Image */}
          <div className="border border-border">
            <img
              src="/images/feature.png"
              alt="A calm, sunlit coastal living and dining space, clean and organized"
              className="aspect-square w-full object-cover"
            />
          </div>

          {/* Feature grid */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              The standard of care
            </p>
            <h2 className="mt-4 text-balance font-serif text-3xl leading-tight text-foreground md:text-4xl">
              Precision you can{' '}
              <span className="italic">actually feel.</span>
            </h2>
            <p className="mt-4 max-w-lg text-pretty text-sm leading-relaxed text-muted-foreground">
              Every visit is designed around trust, consistency, and quiet
              precision — so the experience feels as refined as the result.
            </p>

            <div className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="bg-card p-6">
                  <span className="flex size-9 items-center justify-center bg-secondary text-primary">
                    <feature.icon className="size-4.5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-sm font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {feature.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
