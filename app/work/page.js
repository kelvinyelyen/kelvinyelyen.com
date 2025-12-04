import { Link } from "next-view-transitions"
import { WorkItem, EducationItem, ProjectItem } from "@/components/ui/resume-items"
import { getCategoryContent } from "@/lib/content"

export const metadata = {
  title: "Work",
  description:
    "Creative initiatives, professional experience and educational background.",
}

export default function Page() {
  const experience = getCategoryContent("work")
  const education = getCategoryContent("work/education")
  const project = getCategoryContent("work/projects")

  return (
    <section className="container my-8 text-sm tracking-tight">
      <div className="mx-auto text-foreground-contrast space-y-12">


        <Section
          title="Education"
          number="01"
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
          number="02"
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
          number="03"
        >
          {project.map(({ slug, metadata }) => (
            <ProjectItem
              key={slug}
              title={metadata.title}
              people={metadata.people}
              link={metadata.link}
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
          {title} <sup className="text-primary-foreground"> {number} </sup>
        </h2>
        <p className="text-primary-foreground">{subtitle}</p>
      </div>
      <div>{children}</div>
    </div>
  )
}