import Link from "next/link"
import React from "react"
import styles from "@/styles"

const Mobile = () => {
  return (
    <div className={`${styles.xPaddings} lg:-mt-12 mt-10 mx-auto`}>
      <div
        className={`${styles.innerWidth} mx-auto my-[40px] lg:my-0 text-5xl lg:text-7xl`}
      >
        <Link href="/">
          <h1 className="font-monument tracking-tighter dark:text-stone-300 text-neutral-800 mb-1">
            <span className="font-monument"> kelvin </span> yelyen
          </h1>
          <p className=" dark:font-light font-monument dark:text-neutral-500 text-neutral-400">
            Software <br />
            Engineer <br /> &amp; Designer
          </p>
        </Link>
      </div>
    </div>
  )
}

export default Mobile
