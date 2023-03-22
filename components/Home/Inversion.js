import React from "react"
import { useTheme } from "next-themes"
import styles from "@/styles"

const Inversion = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme

  return (
    <div
      className={`${styles.ipaddings} flex justify-between text-xs text-right mt-[120px] text-stone-500`}
    >
      <p className={`hidden lg:block`}> &#169; {new Date().getFullYear()}</p>

      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        <p>
          <span className={currentTheme === "light" ? "active" : ""}>
            LIGHT{" "}
          </span>
          /{" "}
          <span className={currentTheme === "dark" ? "active" : ""}> DARK</span>{" "}
        </p>
      </button>
    </div>
  )
}

export default Inversion
