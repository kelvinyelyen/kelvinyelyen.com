import { SubpageNav } from "@/components/layout"
import { getCategoryContent, PostMetadata } from "@/lib/content"

export const metadata = {
  title: "Research & Experience",
  description:
    "Investigating the intersection of computational neuroscience and artificial intelligence through neural decoding and adaptive architectures.",
}

const AUTHOR_NAME = "Kelvin Yelyen"

function highlightAuthor(text: string) {
  const parts = text.split(new RegExp(`(${AUTHOR_NAME})`, "gi"))
  return parts.map((part, i) =>
    part.toLowerCase() === AUTHOR_NAME.toLowerCase()
      ? <span key={i} className="text-foreground">{part}</span>
      : part
  )
}

function ResumeItem({ item }: { item: PostMetadata }) {
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
          <div className="relative ml-3">
            {/* Vertical line */}
            <div className="absolute left-0 top-1.5 bottom-1.5 w-px bg-stone-200 dark:bg-stone-800" />

            <ul className="space-y-5">
              {experience.map(({ slug, metadata }) => (
                <li key={slug} className="relative pl-6 flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-4">
                  {/* Dot */}
                  <div className="absolute left-0 top-[9px] -translate-x-1/2 w-[7px] h-[7px] rounded-full bg-stone-400 dark:bg-stone-600" />

                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <a
                      href={metadata.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 decoration-[0.5px]"
                    >
                      {metadata.role || metadata.degree}
                    </a>
                    <span className="text-muted-foreground">
                      {metadata.company || metadata.institution}
                    </span>
                  </div>
                  <span className="text-muted-foreground text-[15px] whitespace-nowrap mt-1 sm:mt-0">
                    {metadata.year}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-[25px] font-semibold mb-6">Research</h2>
          <div className="space-y-4">
            {projects.map(({ slug, metadata }) => (
              <div key={slug} className="rounded-lg bg-stone-50 dark:bg-stone-900/50 px-5 py-4">
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
                    {highlightAuthor(metadata.authors || "")}
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
