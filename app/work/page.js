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
      <div className="mx-auto text-foreground-contrast">
        <div className="mb-12">
          <div className="mb-6">
            <h1 className="font-semibold">
              Experience <sup className="text-primary-foreground"> 01 </sup>
            </h1>
            <p className="text-primary-foreground">Professional journey</p>
          </div>
          <div>
            {experience.map(({ slug, metadata }) => (
              <WorkItem
                key={slug}
                role={metadata.role}
                company={metadata.company}
                year={metadata.year}
                website={metadata.website}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto text-foreground-contrast mb-[200px]">
        <div className="mb-12">
          <div className="mb-6">
            <h1 className="font-semibold">
              Education <sup className="text-primary-foreground"> 02 </sup>
            </h1>
            <p className="text-primary-foreground">Academic background</p>
          </div>
          <div>
            {education.map(({ slug, metadata }) => (
              <EducationItem
                key={slug}
                degree={metadata.degree}
                institution={metadata.institution}
                year={metadata.year}
                website={metadata.website}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
