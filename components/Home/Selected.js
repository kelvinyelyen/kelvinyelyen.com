import Link from "next/link"
import styles from "@/styles"
import SelectedProject from "../Projects/SelectedProject"
import {selectedProjects} from "@/data/Projects"


const Selected = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div className={`${styles.projectWidth} mx-auto`}>
        <p className="text-[15px] text-secondary-white dark:text-neutral-600">
          SELECTED WORK
        </p>
        <hr className="h-px my-4 sm:my-8 bg-gray-400 dark:bg-neutral-500 border-0" />

        {selectedProjects.map((project) => (
          <SelectedProject key={project.number} {...project} />
        ))}

        <Link href="/projects">
          <p className="text-right dark:font-light text-[13px] text-stone-500">
            MORE WORK (5) &#129126;
          </p>
        </Link>
      </div>
    </section>
  )
}

export default Selected
