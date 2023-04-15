import React from "react"
import { useTheme } from "next-themes"
import styles from "@/styles"

const Inversion = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme

  return (
    <div
      className={`${styles.xPaddings} text-right  relative dark:text-stone-300`}
    >
      <div className={`${styles.innerWidth} mx-auto flex justify-between`}>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="z-10"
        >
          <p className=" md:text-[15px] text-xs ">
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
        <div className="lg:block hidden text-[17px]">
          &#11044; &nbsp;GHANA, AVAILABLE WORLDWIDE
        </div>
      </div>
    </div>
  )
}

export default Inversion
