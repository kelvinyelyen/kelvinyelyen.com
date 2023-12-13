import ProjectItem from "@/components/project-item" 
import { projects, archived } from "@/config/projectConfig"

export const metadata = {
  title: "Projects",
  description:
    "Curated collection of some of my projects spanning various domains.",
}

export default function Page() {
  return (
    <section className="container my-5 text-sm">
      <div className="mx-auto text-foreground mb-[300px]">
        <div className="mb-12">
          <div className="mb-6">
            <p className="">
              Curated collection of some of my projects spanning various
              domains.
            </p>
          </div>

          <div>
            {projects.map((project) => (
              <ProjectItem key={project.number} {...project} />
            ))}
          </div>
        </div>

        <div className="mb-6">
          <p className="text-lg my-2">Archived</p>
          <p>
            My experiments and archived projects.
          </p>
        </div>

        <div>
          {archived.map((archive) => (
            <ProjectItem key={archive.number} {...archive} />
          ))}
        </div>
      </div>
    </section>
  )
}