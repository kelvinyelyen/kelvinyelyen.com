import Project from "./Project"
import { projects } from "@/data/Projects"
import styles from "@/styles"

const AllProjects = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div
        className={`${styles.projectWidth} mx-auto dark:text-secondary-white`}
      >
        <div className="lg:mr-[50%] mr-0">
          <p className="uppercase text-[10px] text-stone-500">
            (Full-Stack, Product Design ...)
          </p>
          <p className="text-neutral-700 dark:text-secondary-white text-[13px] md:text-base ">
            I possess a rare blend of technical abilities and design expertise,
            which enables me to develop software that not only functions
            properly but also impresses users with its pleasing appearance,
            intuitive usage, and user-friendliness. I&apos;ve collaborated on
            various personal and team projects throughout my career, and here
            are some that can be mentioned publicly.
          </p>
        </div>
        <hr className="h-px my-8 bg-gray-300 dark:bg-neutral-500 border-0" />
        {projects.map((project) => (
          <Project key={project.number} {...project} />
        ))}
      </div>
    </section>
  )
}

export default AllProjects
