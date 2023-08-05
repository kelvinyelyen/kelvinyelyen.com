import Link from "next/link"
import React from "react"
import styles from "@/styles"

const Intro = () => {
  return (

    <div className={`${styles.xPaddings} mx-auto`}>
      <div
        className={`${styles.innerWidth} mx-auto mt-[40px] lg:mt-0 text-5xl lg:text-8xl`}
      >
        <Link href="/">
          {/* <p className="dark:text-stone-300 text-neutral-800 mb-1">
            kelvin yelyen
          </p>  */}
          <p className="intro font-monument dark:font-light dark:text-neutral-500 text-neutral-400">
            Software engineer,<br />designer based in Ghana
          </p>
        </Link>
      </div>
    </div>
  )
}

export default Intro
