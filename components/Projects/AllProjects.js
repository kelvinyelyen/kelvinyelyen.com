import Link from "next/link"
import Project from "./Project"
import { projects, archived } from "@/content/Projects"
import styles from "@/styles"

const AllProjects = () => {
  return (
    <section className={`${styles.paddings} relative z-10 -mt-10`}>
      <div className={`${styles.innerWidth} mx-auto dark:text-stone-200`}>
        <div className="mb-20">
          <div className="mb-6">
            <p className="text-[14px] md:text-[16px] ">
              Curated collection of some of my projects spanning various
              domains.
            </p>
          </div>

          <div className="">
            <hr className="h-px bg-gray-200 dark:bg-neutral-800 border-0" />
            {projects.map((project) => (
              <Project key={project.number} {...project} />
            ))}
          </div>
        </div>

        <div className="mb-6 text-[14px] md:text-[16px] ">
          <p className="text-lg my-4">Archived</p>
          <p className="dark:text-stone-200">
            My experiments and archived projects.
          </p>
        </div>

        <div className="">
          <hr className="h-px bg-gray-200 dark:bg-neutral-800 border-0" />
          {archived.map((archive) => (
            <Project key={archive.number} {...archive} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default AllProjects
