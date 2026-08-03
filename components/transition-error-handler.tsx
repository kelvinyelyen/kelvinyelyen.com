"use client"

import { useEffect } from "react"

export default function TransitionErrorHandler() {
  useEffect(() => {
    const isTransitionError = (err: any) => {
      return err && (err.name === "TimeoutError" || (err.message && err.message.includes("Transition was aborted")))
    }

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      if (isTransitionError(event.reason)) {
        event.preventDefault()
        if (process.env.NODE_ENV === "development") {
          console.warn("[ViewTransition] Transition was aborted due to DOM update timeout (safely handled promise).")
        }
      }
    }

    const handleError = (event: ErrorEvent) => {
      if (isTransitionError(event.error)) {
        event.preventDefault()
        if (process.env.NODE_ENV === "development") {
          console.warn("[ViewTransition] Transition was aborted due to DOM update timeout (safely handled error).")
        }
      }
    }

    // Intercept console.error to prevent Next.js dev overlay from catching it
    const originalConsoleError = console.error
    console.error = (...args) => {
      const firstArg = args[0]
      if (
        (typeof firstArg === "string" && firstArg.includes("Transition was aborted")) ||
        (firstArg instanceof Error && isTransitionError(firstArg))
      ) {
        return
      }
      originalConsoleError.apply(console, args)
    }

    window.addEventListener("unhandledrejection", handleUnhandledRejection)
    window.addEventListener("error", handleError)

    return () => {
      window.removeEventListener("unhandledrejection", handleUnhandledRejection)
      window.removeEventListener("error", handleError)
      console.error = originalConsoleError
    }
  }, [])

  return null
}
