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
              (Software Eng, Web Apps, Product Design ... )
            </p>
            <p className="text-[13px] md:text-[15px] ">
              I&apos;ve collaborated on various personal and team projects
              throughout my career, and here are some that can be mentioned
              publicly.
            </p>
          </div>

          <div className="col-span-2">
            <hr className="h-px md:mt-10 bg-gray-400 dark:bg-neutral-500 border-0" />
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
