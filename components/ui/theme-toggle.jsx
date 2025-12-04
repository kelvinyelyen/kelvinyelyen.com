"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <span className="text-muted-foreground">[system]</span>
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="transition duration-200 ease-in-out hover:text-stone-800 dark:hover:text-stone-200 text-muted-foreground"
        >
            [{theme === "dark" ? "light" : "dark"}]
        </button>
    )
}
