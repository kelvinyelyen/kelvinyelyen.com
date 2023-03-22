import Link from "next/link"
import styles from "@/styles"

const Skills = () => {
  return (
    <div
      className={`${styles.paddings} text-[12px] lg:text-[15px] -my-10 lg:my-0 lg:mx-20 mx-0`}
    >
      <div className="flex flex-col sm:flex-row justify-between uppercase">
        <div className="dark:font-light uppercase dark:text-secondary-white mb-6 sm:mb-0">
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
          <p className="dark:text-secondary-white">START A PROJECT</p>
          <div className="text-stone-500 text-[12px]">
            <ul>
              <li>
                <Link href="#">Email &#x1F865;</Link>
              </li>
              <li>
                <Link href="https://github.com/kelvinyelyen" target="_blank">
                  GitHub &#x1F865;
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/kelvinyelyen" target="_blank">
                  Twitter &#x1F865;
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/kelvinyelyen/"
                  target="_blank"
                >
                  Linkedin &#x1F865;
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
