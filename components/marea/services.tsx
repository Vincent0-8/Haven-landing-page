import { ArrowRight } from 'lucide-react'

const services = [
  {
    image: '/images/service-1.png',
    tag: 'Weekly · Bi-weekly · Monthly',
    title: 'Recurring Cleaning',
    body: 'An ongoing routine designed to keep your home polished, with dependable rhythm and detail-focused consistency.',
  },
  {
    image: '/images/service-2.png',
    tag: 'Deep · Detailed · Restorative',
    title: 'Deep Reset',
    body: 'A thorough top-to-bottom clean for when your space needs a full return to order and freshness.',
  },
  {
    image: '/images/service-3.png',
    tag: 'Move-in · Move-out',
    title: 'Move In / Move Out',
    body: 'A precise handoff service for homes in transition — immaculate, cleared, and ready from the start.',
  },
]

export function Services() {
  return (
    <section id="services" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Services
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl leading-tight text-foreground md:text-4xl">
            Cleaning built for{' '}
            <span className="italic">real household rhythms.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground">
            A short menu of clearly structured options designed to keep your
            home calm and cared for without friction.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex flex-col border border-border bg-card"
            >
              <img
                src={service.image || '/placeholder.svg'}
                alt={service.title}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
                <p className="text-[11px] font-medium uppercase tracking-widest text-accent">
                  {service.tag}
                </p>
                <h3 className="mt-2 font-serif text-xl text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.body}
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary transition-colors hover:text-accent"
                >
                  Explore service
                  <ArrowRight className="size-3.5" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
