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
      ? <span key={i} className="text-stone-700 dark:text-stone-700 font-semibold">{part}</span>
      : part
  )
}

function getTruncatedAuthors(text: string) {
  const authors = text.split(",").map(a => a.trim());
  if (authors.length <= 3) return text;

  const myIndex = authors.findIndex(a => a.toLowerCase().includes(AUTHOR_NAME.toLowerCase()));

  if (myIndex === -1) return `${authors[0]} et\u00A0al.`;
  if (myIndex === 0) return `${authors[0]} et\u00A0al.`;

  if (myIndex === 1) {
    return `${authors[0]}, ${authors[1]}, et\u00A0al.`;
  }

  const isLast = myIndex === authors.length - 1;
  return `${authors[0]}, ..., ${authors[myIndex]}${isLast ? '' : ', et\u00A0al.'}`;
}

function ResumeItem({ item }: { item: PostMetadata }) {
  return (
    <li className="flex justify-between items-baseline gap-x-4">
      <div className="leading-snug">
        <span className="font-medium text-foreground">
          {item.role || item.degree}
        </span>
        {item.website ? (
          <a
            href={item.website}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-stone-600 text-[14px] mt-0.5 underline underline-offset-4 decoration-1 decoration-stone-300 hover:decoration-stone-600"
          >
            {item.company || item.institution}
          </a>
        ) : (
          <span className="block text-stone-600 text-[14px] mt-0.5">
            {item.company || item.institution}
          </span>
        )}
      </div>
      <span className="text-stone-600 text-[14px] whitespace-nowrap shrink-0">
        {item.year}
      </span>
    </li>
  )
}

export default function Page() {
  const research = getCategoryContent("resume/projects/research")
  const projects = getCategoryContent("resume/projects/personal")
  const experience = getCategoryContent("resume/experience")
  const education = getCategoryContent("resume/education")

  return (
    <main className="container my-12 px-5 sm:px-0">
      <SubpageNav />

      <div className="mt-10 space-y-14">
        <section>
          <h2 className="text-[25px] font-semibold mb-3">Education</h2>
          <ul className="space-y-4">
            {education.map(({ slug, metadata }) => (
              <ResumeItem key={slug} item={metadata} />
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-[25px] font-semibold mb-3">Experience</h2>
          <ul className="space-y-4">
            {experience.map(({ slug, metadata }) => (
              <ResumeItem key={slug} item={metadata} />
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-[25px] font-semibold mb-3">Research</h2>
          <ul className="space-y-6">
            {research.map(({ slug, metadata }) => (
              <li key={slug} className="space-y-1">
                <div>
                  <a
                    href={metadata.document}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 decoration-1 decoration-stone-300 hover:decoration-stone-600 font-medium text-[15px]"
                  >
                    {metadata.title}
                  </a>
                  <div className="mt-0.5 leading-snug">
                    {metadata.authors && (
                      <span className="text-stone-700 text-[14px]">
                        <span className="sm:hidden">{highlightAuthor(getTruncatedAuthors(metadata.authors))}</span>
                        <span className="hidden sm:inline">{highlightAuthor(metadata.authors)}</span>
                        <span className="mx-1.5 text-stone-700">&bull;</span>
                      </span>
                    )}
                    {metadata.affiliation && (
                      <span className="text-[14px] font-medium tracking-wide text-stone-700">
                        {metadata.affiliation}
                      </span>
                    )}
                  </div>
                  {metadata.summary && (
                    <p className="mt-2 text-stone-700 text-[14px] leading-relaxed">
                      {metadata.summary}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-[25px] font-semibold mb-3">Projects</h2>
          <ul className="space-y-6">
            {projects.map(({ slug, metadata }) => (
              <li key={slug} className="space-y-1">
                <div>
                  <a
                    href={metadata.document}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 decoration-1 decoration-stone-300 hover:decoration-stone-600 font-medium text-[15px]"
                  >
                    {metadata.title}
                  </a>
                  <div className="mt-0.5 leading-snug">
                    {metadata.authors && (
                      <span className="text-stone-700 text-[14px]">
                        <span className="sm:hidden">{highlightAuthor(getTruncatedAuthors(metadata.authors))}</span>
                        <span className="hidden sm:inline">{highlightAuthor(metadata.authors)}</span>
                        <span className="mx-1.5 text-stone-700">&bull;</span>
                      </span>
                    )}
                    {metadata.affiliation && (
                      <span className="text-[14px] font-medium tracking-wide text-stone-700">
                        {metadata.affiliation}
                      </span>
                    )}
                  </div>
                  {metadata.summary && (
                    <p className="mt-2 text-stone-700 text-[14px] leading-relaxed max-w-2xl">
                      {metadata.summary}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  )
}
