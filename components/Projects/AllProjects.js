import Link from "next/link"
import Project from "./Project"
import { projects, archived } from "@/data/Projects"
import styles from "@/styles"

const AllProjects = () => {
  return (
    <section className={`${styles.paddings} relative z-10 -mt-10`}>
      <div className={`${styles.innerWidth} mx-auto dark:text-stone-300`}>
        <div className="mb-20">
          <div className="mb-6">
            <p className="text-[14px] md:text-[16px] ">
              Curated collection of some of my projects spanning various
              domains, including personal, client, and open-source projects.
              These projects represent the ones that can be shared publicly.
              Design Projects:{" "}
              <Link href="https://www.behance.net/kelvinyelyen">Behance</Link>
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
          <p className="uppercase  text-stone-500">[ Archived ]</p>
          <p>
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
