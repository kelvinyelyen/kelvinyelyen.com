import { WorkItem, EducationItem, ProjectItem } from "@/components/ui/resume-items"
import { getCategoryContent } from "@/lib/content"

export const metadata = {
  title: "Research & Experience",
  description:
    "Investigating the intersection of computational neuroscience and artificial intelligence through neural decoding and adaptive architectures.",
}

export default function Page() {
  const projects = getCategoryContent("resume/projects")
  const experience = getCategoryContent("resume/experience")
  const education = getCategoryContent("resume/education")

  return (
    <section className="container my-12 text-sm tracking-tight">
      <div className="mx-auto space-y-16">
    
        <Section title="Education">
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
            
        <Section title="Experience">
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
            
        <Section title="Research">
          <div className="divide-y divide-muted/20">
            {projects.map(({ slug, metadata }) => (
              <ProjectItem
                key={slug}
                title={metadata.title}
                authors={metadata.authors}
                document={metadata.document}
                code={metadata.code}
                venue={metadata.venue}
                date={metadata.date}
              />
            ))}
          </div>
        </Section>
              
      </div>
    </section>
  )
}

function Section({ title, children }) {
  return (
    <section className="flex flex-col">
      <div className="mb-6 border-b border-muted/50 pb-2">
        <h2 className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
          {title}
        </h2>
      </div>
      <div className="space-y-0">{children}</div>
    </section>
  )
}
