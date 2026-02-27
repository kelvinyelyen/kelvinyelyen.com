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
      ? <strong key={i}>{part}</strong>
      : part
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
              <li key={slug}>
                <a
                  href={metadata.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 decoration-[0.5px]"
                >
                  {metadata.degree}
                </a>
                <span className="text-muted-foreground">, {metadata.institution}</span>
                <span className="text-muted-foreground block sm:inline sm:ml-2">
                  {metadata.year}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-[25px] font-semibold mb-6">Experience</h2>
          <ul className="space-y-4">
            {experience.map(({ slug, metadata }) => (
              <li key={slug}>
                <a
                  href={metadata.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 decoration-[0.5px]"
                >
                  {metadata.role}
                </a>
                <span className="text-muted-foreground">, {metadata.company}</span>
                <span className="text-muted-foreground block sm:inline sm:ml-2">
                  {metadata.year}
                </span>
              </li>
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
                    className="font-semibold underline underline-offset-2 decoration-[0.5px]"
                  >
                    {metadata.title}
                  </a>
                  {" "}
                  <span className="text-muted-foreground">
                    {highlightAuthor(metadata.authors)}
                  </span>
                </div>
                <div className="text-muted-foreground">{metadata.venue}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
