import { Link } from "next-view-transitions"
import { SubpageNav } from "@/components/layout"
import { getCategoryContent } from "@/lib/content"
import { formatDate } from "@/lib/date"

export const metadata = {
  title: "Notes",
  description: "Technical notes and perspectives on computational neuroscience and artificial intelligence.",
}

export default function Page() {
  const posts = getCategoryContent("notes")

  // Group posts: archive posts from 2023 and prior
  const activePosts = posts.filter((post) => {
    const year = new Date(post.metadata.publishedAt).getFullYear()
    return year > 2023
  })
  const archivedPosts = posts.filter((post) => {
    const year = new Date(post.metadata.publishedAt).getFullYear()
    return year <= 2023
  })

  return (
    <main className="container my-12 px-5 sm:px-0">
      <SubpageNav />
      <h1 className="text-[25px] font-semibold mt-10 mb-3">Notes</h1>

      <ul className="space-y-2 sm:space-y-1.5">
        {activePosts.map(({ slug, metadata }) => (
          <li key={slug} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 sm:gap-4">
            <span className="flex items-baseline gap-2">
              <Link
                href={`/notes/${slug}`}
                className="underline underline-offset-4 decoration-stone-300 hover:decoration-stone-600"
              >
                {metadata.title}
              </Link>
            </span>
            <span className="text-muted-foreground text-[15px] whitespace-nowrap mt-1 sm:mt-0">
              {formatDate(metadata.publishedAt)}
            </span>
          </li>
        ))}
      </ul>

      {archivedPosts.length > 0 && (
        <>
          <h2 className="text-[11px] font-bold mt-12 mb-3 text-stone-400 font-mono uppercase tracking-widest">
            Archive
          </h2>
          <ul className="space-y-2 sm:space-y-1.5">
            {archivedPosts.map(({ slug, metadata }) => (
              <li key={slug} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 sm:gap-4">
                <span className="flex items-baseline gap-2">
                  <Link
                    href={`/notes/${slug}`}
                    className="underline underline-offset-4 text-stone-500 decoration-stone-200 hover:text-stone-800 hover:decoration-stone-500 transition-colors"
                  >
                    {metadata.title}
                  </Link>
                </span>
                <span className="text-stone-400 text-[15px] whitespace-nowrap mt-1 sm:mt-0">
                  {formatDate(metadata.publishedAt)}
                </span>
              </li>
            ))}
          </ul>
        </>
      )}
    </main>
  )
}
