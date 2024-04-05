import ProjectItem from "@/components/project-item"
import WorkItem from "@/components/work-item"
import projectData from "@/data/projects.json"
import workData from "@/data/work.json"

export const metadata = {
  title: "Work",
  description:
    "Curated collection of some of my projects spanning various domains.",
}

export default function Page() {
  const { projects, archived } = projectData
  const { work } = workData

  return (
    <section className="container my-5 text-sm tracking-tight">
      <div className="mx-auto text-white mb-[100px]">
        <div className="mb-12">
          <div className="mb-6">
            <h1>Work</h1>
            <p className="text-primary-foreground">
              Professional journey
            </p>
          </div>
          <div>
            {work.map((role) => (
              <WorkItem key={role.number} {...role} />
            ))}
          </div>
        </div>

        <div className="mb-12">
          <div className="mb-6">
            <h1>Projects</h1>
            <p className="text-primary-foreground">
              Some of my project compilation across domains.
            </p>
          </div>
          <div>
            {projects.map((project) => (
              <ProjectItem key={project.number} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
