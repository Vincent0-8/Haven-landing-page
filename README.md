# Haven

A coastal home care and residential cleaning landing page designed for calm, consistent, and beautifully maintained spaces. Built with Next.js 16 (App Router), React 19, and Tailwind CSS v4.

---

## Design System

- **Color Palette**: Perceptually uniform coastal tones—Deep Coastal Blue (`primary`), Ocean Cyan (`accent`), and warm seafoam/sand backgrounds (`background`, `card`).
- **Typography**: Editorial pairing of *Fraunces* (warm serif display headings) and *Inter* (clean, functional sans-serif body).
- **Responsive & Accessible**: Semantic HTML structure, unified icon sizing, and native GPU-accelerated scroll animations without heavy external libraries.

---

## Project Structure

```text
Haven-landing-page/
├── app/
│   ├── [...catchAll]/
│   │   └── page.tsx          # Catch-all redirect to homepage
│   ├── globals.css           # OKLCH design tokens, keyframes, scroll utilities
│   ├── layout.tsx            # Fonts (Fraunces & Inter), SEO metadata, providers
│   ├── not-found.tsx         # Fallback 404 redirect handler
│   └── page.tsx              # Main single-page composition
├── components/
│   ├── haven/
│   │   ├── features.tsx      # Craftsmanship badges & coastal interior showcase
│   │   ├── hero.tsx          # Visual hero frame, checklist, and double CTA
│   │   ├── logo.tsx          # Reusable HavenLogo (standard & inverted)
│   │   ├── services.tsx      # Service tier cards with interactive toast trigger
│   │   ├── site-footer.tsx   # Navy footer with sitemap links & contact info
│   │   ├── site-header.tsx   # Navigation bar with responsive mobile drawer
│   │   └── testimonials.tsx  # Semantic HTML5 quote figures & client reviews
│   ├── ui/
│   │   └── toast.tsx         # Lightweight toast notification system
│   ├── icons.tsx             # Curated Lucide React icon exports
│   ├── scroll-animator.tsx   # Global IntersectionObserver scroll observer
│   └── scroll-to-top.tsx     # Instant scroll restoration reset on reload
└── public/
    ├── icon.svg              # Vector brand favicon (50% wave geometry)
    ├── apple-icon.png        # iOS home screen icon
    ├── favicon.ico           # Browser tab icon
    └── images/               # High-resolution coastal photography
```

---

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) (Turbopack, App Router)
- **UI Runtime**: [React 19](https://react.dev)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) + `@tailwindcss/postcss`
- **Color Space**: Native OKLCH color model 
- **Typography**: [Google Fonts](https://fonts.google.com) (`next/font` — Fraunces & Inter)
- **Icons**: [Lucide React](https://lucide.dev)
- **Telemetry**: [@vercel/analytics](https://vercel.com/analytics)
