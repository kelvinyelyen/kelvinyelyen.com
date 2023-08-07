import Link from "next/link"
import Project from "./Project"
import { projects } from "@/data/Projects"
import styles from "@/styles"

const AllProjects = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div
        className={`${styles.projectWidth} mx-auto dark:text-secondary-white`}
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="lg:mr-[20%] mr-0">
            <p className="uppercase text-[10px] text-stone-500">
              [ Software Engineering, Product Design ... ]
            </p>
            <p className="text-[13px] md:text-[15px] ">
              Curated collection of some of my projects spanning various
              domains, including personal, client, and open-source projects.
              These projects represent the ones that can be shared publicly.
              Design Projects:{" "}
              <Link href="https://www.behance.net/kelvinyelyen">Behance</Link>
            </p>
          </div>

          <div className="col-span-2">
            <hr className="h-px bg-gray-400 dark:bg-neutral-500 border-0" />
            {projects.map((project) => (
              <Project key={project.number} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AllProjects
