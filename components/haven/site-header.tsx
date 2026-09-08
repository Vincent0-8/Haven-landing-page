'use client'

import { useState } from 'react'
import { Menu, X } from '@/components/icons'
import { HavenLogo } from '@/components/haven/logo'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Approach', href: '#approach' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const toggle = () => setMobileOpen((prev) => !prev)
  const close = () => setMobileOpen(false)

  return (
    <header className="animate-header-enter sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="/" aria-label="Haven — go to homepage">
          <HavenLogo />
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm text-muted-foreground">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contact"
          id="header-cta-btn"
          className="hidden bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent md:inline-flex"
        >
          Contact us
        </a>

        <button
          id="mobile-menu-toggle"
          onClick={toggle}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-drawer"
          className="flex size-9 items-center justify-center text-foreground transition-colors hover:text-accent md:hidden"
        >
          {mobileOpen ? (
            <X className="size-5" strokeWidth={2} aria-hidden="true" />
          ) : (
            <Menu className="size-5" strokeWidth={2} aria-hidden="true" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div
          id="mobile-nav-drawer"
          className="animate-drawer-down border-t border-border bg-background/95 backdrop-blur-md md:hidden"
        >
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col divide-y divide-border">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={close}
                    className="block px-4 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary sm:px-6"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  id="mobile-cta-btn"
                  onClick={close}
                  className="block bg-primary px-4 py-3.5 text-sm font-medium text-primary-foreground sm:px-6"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
