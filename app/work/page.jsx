import { SubpageNav } from "@/components/layout"
import { getCategoryContent } from "@/lib/content"

export const metadata = {
  title: "Research & Experience",
  description:
    "Investigating the intersection of computational neuroscience and artificial intelligence through neural decoding and adaptive architectures.",
}

const AUTHOR_NAME = "Kelvin Yelyen"

function highlightAuthor(text) {
  const parts = text.split(new RegExp(`(${AUTHOR_NAME})`, "gi"))
  return parts.map((part, i) =>
    part.toLowerCase() === AUTHOR_NAME.toLowerCase()
      ? <span key={i} className="text-foreground">{part}</span>
      : part
  )
}

function ResumeItem({ item }) {
  return (
    <li className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-4">
      <div className="flex flex-wrap items-baseline gap-x-2">
        <a
          href={item.website}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 decoration-[0.5px]"
        >
          {item.role || item.degree}
        </a>
        <span className="text-muted-foreground"> {item.company || item.institution}
        </span>
      </div>
      <span className="text-muted-foreground text-[15px] whitespace-nowrap mt-1 sm:mt-0">
        {item.year}
      </span>
    </li>
  )
}

export default function Page() {
  const projects = getCategoryContent("resume/projects/research")
  const experience = getCategoryContent("resume/experience")
  const education = getCategoryContent("resume/education")

  return (
    <main className="container my-12 px-5 sm:px-0">
      <SubpageNav />

      <div className="mt-10 space-y-14">
        <section>
          <h2 className="text-[25px] font-semibold mb-6">Education</h2>
          <ul className="space-y-4">
            {education.map(({ slug, metadata }) => (
              <ResumeItem key={slug} item={metadata} />
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-[25px] font-semibold mb-6">Experience</h2>
          <ul className="space-y-4">
            {experience.map(({ slug, metadata }) => (
              <ResumeItem key={slug} item={metadata} />
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-[25px] font-semibold mb-6">Research</h2>
          <div className="space-y-6">
            {projects.map(({ slug, metadata }) => (
              <div key={slug}>
                <div>
                  <a
                    href={metadata.document}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 decoration-[0.5px]"
                  >
                    {metadata.title}
                  </a>
                  {" "}
                  <span className="text-muted-foreground">
                    {highlightAuthor(metadata.authors)}
                  </span>
                </div>
                <div>{metadata.venue}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
