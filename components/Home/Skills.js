import Link from "next/link"
import styles from "@/styles"

const Skills = () => {
  return (
    <div className={`${styles.paddings} text-[12px] lg:text-[15px] `}>
      <div className="flex flex-col sm:flex-row justify-between">
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
          <p className=" dark:text-secondary-white">
            START A PROJECT
          </p>
          <Link href="#" className="text-stone-500 uppercase">
            kelvinyelyen@gmail.com
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Skills
