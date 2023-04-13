import { useRef } from "react"
import gsap from "gsap"
import Link from "next/link"
import styles from "@/styles"

const Contact = () => {
  return (
    <div
      className={`${styles.paddings} text-[13px] lg:text-[17px] -mb-20 relative`}
    >
      <div className="flex flex-col sm:flex-row justify-between uppercase">
        <div className="dark:font-light uppercase dark:text-stone-300 mb-6 sm:mb-0">
          <p>
            Full-stack Engineering<sup className="text-stone-500"> 01 </sup>
          </p>
          <p>
            Product Design (UI/UX Design)
            <sup className="text-stone-500"> 02 </sup>
          </p>
          <p>
            Graphic Design<sup className="text-stone-500"> 03 </sup>
          </p>
        </div>
        <div className="text-end">
          <p className="dark:text-stone-300">START A PROJECT</p>
          <div className="text-stone-500 md:text-[12px] text-[10px]">
            <ul>
              <li>
                <Link href="mailto:kelvinyelyen@gmail.com" target="_blank">
                  kelvinyelyen@gmail.com
                </Link>
              </li>
              <li>
                <Link href="https://github.com/kelvinyelyen" target="_blank">
                  GitHub &#129125;
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/kelvinyelyen" target="_blank">
                  Twitter &#129125;
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/kelvinyelyen/"
                  target="_blank"
                >
                  Linkedin &#129125;
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
