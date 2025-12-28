
import { WorkItem, EducationItem, ProjectItem } from "@/components/ui/resume-items"
import { getCategoryContent } from "@/lib/content"

export const metadata = {
  title: "Work",
  description:
    "Creative initiatives, professional experience and educational background.",
}

export default function Page() {
  const experience = getCategoryContent("resume/experience")
  const education = getCategoryContent("resume/education")
  const projects = getCategoryContent("resume/projects")

  return (
    <section className="container my-8 text-sm tracking-tight">
      <div className="mx-auto text-foreground-contrast space-y-12">

        <Section
          title="Education"
        >
          {education.map(({ slug, metadata }) => (
            <EducationItem
              key={slug}
              degree={metadata.degree}
              institution={metadata.institution}
              year={metadata.year}
              website={metadata.website}
            />
          ))}
        </Section>
        <Section
          title="Experience"
        >
          {experience.map(({ slug, metadata }) => (
            <WorkItem
              key={slug}
              role={metadata.role}
              company={metadata.company}
              year={metadata.year}
              website={metadata.website}
            />
          ))}
        </Section>
        <Section
          title="2025"
        >
          {projects.map(({ slug, metadata }) => (
            <ProjectItem
              key={slug}
              title={metadata.title}
              authors={metadata.authors}
              document={metadata.document}
              venue={metadata.venue}
              date={metadata.date}
            />
          ))}
        </Section>
      </div>
    </section>
  )
}

function Section({ title, subtitle, number, children }) {
  return (
    <div>
      <div className="mb-6">
        <h2 className="font-semibold">
          {title}
        </h2>
        <p className="text-primary-foreground">{subtitle}</p>
      </div>
    )
}
      <div>{children}</div>
    </div>
  )
}
