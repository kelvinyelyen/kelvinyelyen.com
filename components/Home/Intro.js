import Link from "next/link"
import React from "react"
import styles from "@/styles"

const Mobile = () => {
  return (
    <div className={`${styles.innerWidth} ${styles.xPaddings} lg:-mt-12 mt-0`}>
      <div className="my-[40px] lg:my-0 text-4xl lg:text-6xl">
        <Link href="/">
          <h1 className="font-monument tracking-tighter dark:text-secondary-white text-neutral-800 mb-1">
            kelvin.yelyen
          </h1>
          <p className=" dark:font-light font-monument dark:text-neutral-500 text-neutral-300">
            Software <br />
            Engineer <br /> &amp; Designer
          </p>
        </Link>
      </div>
    </div>
  )
}

export default Mobile
