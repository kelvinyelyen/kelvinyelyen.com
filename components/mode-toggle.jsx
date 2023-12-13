"use client"

import { useTheme } from "next-themes"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const isLight = theme === "light"

  const toggleTheme = () => {
    setTheme(isLight ? "dark" : "light")
  }

  return (
    <div className="relative text-foreground">
      <button onClick={toggleTheme} className="z-10">
        <p className="text-sm">
          <span className={isLight ? "active" : ""}>LIGHT </span> /{" "}
          <span className={!isLight ? "active dark-active" : "inactive"}>
            DARK
          </span>{" "}
        </p>
      </button>
    </div>
  )
}
