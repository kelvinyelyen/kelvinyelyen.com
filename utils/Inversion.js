import React from "react"
import { useTheme } from "next-themes"

const Inversion = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme

  return (
    <div className="relative dark:text-stone-300">
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="z-10"
      >
        <p className="text-[10px] md:text-[13px]">
          <span className={currentTheme === "light" ? "active" : ""}>
            LIGHT{" "}
          </span>
          /{" "}
          <span
            className={currentTheme === "dark" ? "dark-active" : "inactive"}
          >
            {" "}
            DARK
          </span>{" "}
        </p>
      </button>
    </div>
  )
}

export default Inversion
