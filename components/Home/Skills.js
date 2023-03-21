import Link from "next/link";
import styles from "@/styles";

const Skills = () => {
    return (
      <div className={`${styles.paddings} -mb-[110px] mt-[110px]`}>
        <div className="flex justify-between">
          <div className="dark:font-light sm:text-[15px] text-[13px] uppercase dark:text-secondary-white">
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
            <p className="text-[15px] dark:text-secondary-white">
              START A PROJECT
            </p>
            <Link
              href="#"
              className="text-[13px] sm:text[10px] text-stone-500 uppercase"
            >
              kelvinyelyen@gmail.com
            </Link>
          </div>
        </div>
      </div>
    )
}

export default Skills;
