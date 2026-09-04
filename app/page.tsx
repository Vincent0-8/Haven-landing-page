import { SiteHeader } from '@/components/marea/site-header'
import { Hero } from '@/components/marea/hero'
import { Services } from '@/components/marea/services'
import { Features } from '@/components/marea/features'
import { Testimonials } from '@/components/marea/testimonials'
import { SiteFooter } from '@/components/marea/site-footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <Services />
      <Features />
      <Testimonials />
      <SiteFooter />
    </main>
  )
}
