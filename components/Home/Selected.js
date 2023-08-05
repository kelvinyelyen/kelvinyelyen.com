import Link from "next/link"
import styles from "@/styles"
import SelectedProject from "../Projects/SelectedProject"
import { selectedProjects } from "@/data/Projects"

const Selected = () => {
  return (
    <section className={`${styles.paddings} relative z-10 lg:mt-0 mt-[30px]`}>
      <div className={`${styles.projectWidth} mx-auto`}>
        <p className="text-[10px] text-secondary-white dark:text-neutral-600 mb-4">
          [  SELECTED WORK ]
        </p>
        <hr className="h-px md:mt-10 bg-gray-400 dark:bg-neutral-500 border-0" />
        {selectedProjects.map((project) => (
          <SelectedProject key={project.number} {...project} />
        ))}
        <Link href="/projects">
          <p className="text-right dark:font-light text-[12px] text-stone-500 md:mt-10 mt-4">
            &#11044; &nbsp;MORE WORK (5) &#129126;
          </p>
        </Link>
      </div>
    </section>
  )
}

export default Selected
