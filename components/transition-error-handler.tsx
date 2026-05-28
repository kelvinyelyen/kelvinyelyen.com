"use client"

import { useEffect } from "react"

export default function TransitionErrorHandler() {
  useEffect(() => {
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason
      if (
        reason &&
        (reason.name === "TimeoutError" ||
          (reason.message && reason.message.includes("Transition was aborted")))
      ) {
        // Prevent browser from showing error overlays / unhandled rejection logs
        event.preventDefault()
        if (process.env.NODE_ENV === "development") {
          console.warn(
            "[ViewTransition] Transition was aborted due to DOM update timeout (safely handled)."
          )
        }
      }
    }

    window.addEventListener("unhandledrejection", handleUnhandledRejection)
    return () => {
      window.removeEventListener("unhandledrejection", handleUnhandledRejection)
    }
  }, [])

  return null
}
