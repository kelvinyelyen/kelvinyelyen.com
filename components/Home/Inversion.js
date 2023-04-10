import React from "react"
import { useTheme } from "next-themes"
import styles from "@/styles"

const Inversion = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme

  return (
    <div
      className={`${styles.ipaddings} flex justify-between text-xs text-right lg:mt-0 -mt-[20px] relative dark:text-stone-300`}
    >
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        <p className=" text-xs">
          <span className={currentTheme === "light" ? "active" : ""}>
            LIGHT{" "}
          </span>
          /{" "}
          <span className={currentTheme === "dark" ? "active" : ""}> DARK</span>{" "}
        </p>
      </button>
      <div className="lg:block hidden text-xl">
        {" "}
        &#169; {new Date().getFullYear()}
      </div>
    </div>
  )
}

export default Inversion
