import { Star } from 'lucide-react'

const reviews = [
  {
    quote:
      'The consistency is what impressed me most. I never have to wonder how the home will look before family visits — it is just handled.',
    name: 'Claire L.',
    detail: 'Recurring · Client since 2023',
  },
  {
    quote:
      'Their move-in service made the whole transition feel lighter. The house was immaculate and ready from the very first day.',
    name: 'Daniel M.',
    detail: 'Move In / Move Out · Client since 2024',
  },
  {
    quote:
      'What I value most is how calm and dependable the whole experience feels. It saves time, and it also removes a surprising amount of mental load.',
    name: 'Amelia P.',
    detail: 'Deep Reset · Client since 2022',
  },
]

export function Testimonials() {
  return (
    <section id="reviews" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Client stories
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl leading-tight text-foreground md:text-4xl">
            What homeowners{' '}
            <span className="italic">notice most.</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <figure
              key={review.name}
              className="flex flex-col border border-border bg-card p-6"
            >
              <div className="flex gap-0.5 text-accent" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                {`"${review.quote}"`}
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-semibold text-foreground">
                  {review.name}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {review.detail}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
