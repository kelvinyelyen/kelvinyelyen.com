import { ProjectItem, WorkItem } from "@/components/item"
import projectData from "@/data/projects.json"
import workData from "@/data/work.json"

export const metadata = {
  title: "Work",
  description:
    "Creative initiatives, professional experience and educational background.",
}

export default function Page() {
  const { projects } = projectData
  const { experience, education } = workData

  return (
    <section className="container my-5 text-sm tracking-tight">
      <div className="mx-auto text-white mb-[100px]">
        <div className="mb-12">
          <div className="mb-6">
            <h1>Experience</h1>
            <p className="text-primary-foreground">Professional journey</p>
          </div>
          <div>
            {experience.map(({ number, ...role }) => (
              <WorkItem key={number} {...role} />
            ))}
          </div>
        </div>

        <div className="mb-12">
          <div className="mb-6">
            <h1>Education</h1>
            <p className="text-primary-foreground">Academic background</p>
          </div>
          <div>
            {education.map(({ number, ...level }) => (
              <WorkItem key={number} {...level} />
            ))}
          </div>
        </div>

        <div className="mb-12">
          <div className="mb-6">
            <h1>Projects</h1>
            <p className="text-primary-foreground">Creative initiatives</p>
          </div>
          <div>
            {projects.map(({ number, ...project }) => (
              <ProjectItem key={number} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
