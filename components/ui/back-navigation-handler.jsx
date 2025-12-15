"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function BackNavigationHandler() {
    const pathname = usePathname()

    useEffect(() => {
        const handlePopState = () => {
            // Check if mobile (md breakpoint is usually 768px in Tailwind)
            const isMobile = window.matchMedia("(max-width: 768px)").matches

            if (isMobile) {
                document.documentElement.classList.add("no-view-transition")

                // Remove the class after transition duration to reset for future navigations
                setTimeout(() => {
                    document.documentElement.classList.remove("no-view-transition")
                }, 1000)
            }
        }

        window.addEventListener("popstate", handlePopState)

        return () => {
            window.removeEventListener("popstate", handlePopState)
        }
    }, [])

    // Also remove class on path change just in case (cleanup)
    useEffect(() => {
        document.documentElement.classList.remove("no-view-transition")
    }, [pathname])

    return null
}
