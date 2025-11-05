import { Link } from "next-view-transitions"
import { WorkItem, EducationItem } from "@/components/item"
import { getCategoryContent } from "@/lib/content-handler"

export const metadata = {
  title: "Work",
  description:
    "Creative initiatives, professional experience and educational background.",
}

export default function Page() {
  const experience = getCategoryContent("work")
  const education = getCategoryContent("work/education")

  return (
    <section className="container my-8 text-sm tracking-tight">
      <div className="mx-auto text-foreground-contrast space-y-12">
        <Section
          title="Experience"
          subtitle="Professional journey"
          number="01"
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
          title="Education"
          subtitle="Academic background"
          number="02"
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