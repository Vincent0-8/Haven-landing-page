import { SiteHeader } from '@/components/haven/site-header'
import { Hero } from '@/components/haven/hero'
import { Services } from '@/components/haven/services'
import { Features } from '@/components/haven/features'
import { Testimonials } from '@/components/haven/testimonials'
import { SiteFooter } from '@/components/haven/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <Services />
        <Features />
        <Testimonials />
      </main>
      <SiteFooter />
    </div>
  )
}
