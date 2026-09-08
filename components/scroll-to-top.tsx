'use client'

import { useEffect } from 'react'

export function ScrollToTopOnRefresh() {
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return null
}
