import Link from "next/link"
import styles from "@/styles"

const Contact = () => {
  return (
    <div className={`${styles.xPaddings} md:text-[16px] text-[14px] relative`}>
      <div
        className={`${styles.innerWidth} mx-auto flex flex-col sm:flex-row justify-between`}
      >
        <div className="dark:font-light uppercase dark:text-stone-200 mb-6 sm:mb-0">
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
          <p className="dark:text-stone-200 uppercase">Reach out</p>
          <div className="text-stone-500 cursor-pointer">
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
