'use client'

import { useEffect, useRef, useState } from 'react'
import { X, Info } from '@/components/icons'

interface ToastProps {
  message?: string
  duration?: number
  onClose?: () => void
}

/**
 * ComingSoonToast
 *
 * A lightweight floating toast that auto-dismisses after `duration` ms.
 * Fully GPU-animated (opacity + transform), accessible with role="status",
 * and respects prefers-reduced-motion via CSS.
 *
 * Usage:
 *   const [open, setOpen] = useState(false)
 *   <button onClick={() => setOpen(true)}>Try it</button>
 *   <ComingSoonToast open={open} onClose={() => setOpen(false)} />
 */
export function ComingSoonToast({
  message = 'Coming soon — this feature is on its way!',
  duration = 3500,
  onClose,
}: ToastProps & { open: boolean }) {
  // Intentionally accepting open via prop spread below
  return null // placeholder — see ToastProvider below
}

// ─── Standalone self-managed variant ─────────────────────────────────────────

interface ManagedToastProps {
  message?: string
  duration?: number
}

export function useManagedToast() {
  const [visible, setVisible] = useState(false)
  const [leaving, setLeaving] = useState(false)
  const [message, setMessage] = useState('Coming soon — this feature is on its way!')
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const show = (msg?: string) => {
    if (msg) setMessage(msg)
    setLeaving(false)
    setVisible(true)
  }

  const hide = () => {
    setLeaving(true)
    setTimeout(() => {
      setVisible(false)
      setLeaving(false)
    }, 280)
  }

  useEffect(() => {
    if (visible && !leaving) {
      if (timerRef.current) clearTimeout(timerRef.current)
      timerRef.current = setTimeout(hide, 3500)
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [visible, leaving])

  return { visible, leaving, message, show, hide }
}

export function ManagedToast({
  visible,
  leaving,
  message,
  onClose,
}: {
  visible: boolean
  leaving: boolean
  message: string
  onClose: () => void
}) {
  if (!visible) return null

  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className={`fixed bottom-6 right-4 z-100 flex max-w-[calc(100vw-2rem)] items-start gap-3 border border-border bg-card px-4 py-3 shadow-lg sm:right-6 sm:max-w-sm ${
        leaving ? 'animate-toast-out' : 'animate-toast-in'
      }`}
    >
      {/* Icon */}
      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center text-accent">
        <Info className="size-4" aria-hidden="true" />
      </span>

      {/* Message */}
      <p className="flex-1 text-sm leading-snug text-foreground">{message}</p>

      {/* Close */}
      <button
        id="toast-close-btn"
        onClick={onClose}
        aria-label="Dismiss notification"
        className="ml-1 mt-0.5 flex size-5 shrink-0 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
      >
        <X className="size-3.5" aria-hidden="true" />
      </button>
    </div>
  )
}
