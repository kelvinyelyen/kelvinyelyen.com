"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function ThemeToggle({ className }) {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <span className={cn("text-muted-foreground", className)}>[system]</span>
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={cn(
                "transition duration-200 ease-in-out hover:text-stone-800 dark:hover:text-stone-200 text-muted-foreground",
                className
            )}
        >
            [{theme === "dark" ? "light" : "dark"}]
        </button>
    )
}
