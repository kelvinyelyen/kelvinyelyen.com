import { Link } from "next-view-transitions"
import { SubpageNav } from "@/components/layout"
import { getCategoryContent } from "@/lib/content"
import { formatDate } from "@/lib/date"

export const metadata = {
  title: "Notes",
  description: "Technical notes and perspectives",
}

export const dynamic = "force-static"

export default function NotesPage() {
  const posts = getCategoryContent("notes")

  // Filter out archived posts from 2023 and prior
  const activePosts = posts.filter((post) => {
    const year = new Date(post.metadata.publishedAt).getFullYear()
    return year > 2023
  })

  return (
    <main className="container my-12 px-5 sm:px-0">
      <SubpageNav />
      <h1 className="text-[25px] font-semibold mt-10 mb-3">Notes</h1>

      <ul className="space-y-4">
        {activePosts.map(({ slug, metadata }) => (
          <li key={slug} className="flex justify-between items-baseline gap-x-4">
            <span className="flex items-baseline gap-2">
              <Link
                href={`/notes/${slug}`}
                className="underline underline-offset-4 decoration-1 decoration-stone-300 hover:decoration-stone-600"
              >
                {metadata.title}
              </Link>
            </span>
            <span className="text-muted-foreground text-[15px] whitespace-nowrap shrink-0">
              {formatDate(metadata.publishedAt)}
            </span>
          </li>
        ))}
      </ul>


    </main>
  )
}
