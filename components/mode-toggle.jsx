"use client"

import { useTheme } from "next-themes"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const isLight = theme === "light"

  const toggleTheme = () => {
    setTheme(isLight ? "dark" : "light")
  }

  return (
    <div className="text-foreground mb-1">
      <button onClick={toggleTheme} className="">
        <p className="text-xs">
          <span className={isLight ? "active" : ""}>LIGHT </span> /
          <span className={!isLight ? "active dark-active" : "inactive"}>
            DARK
          </span>
        </p>
      </button>
    </div>
  )
}
