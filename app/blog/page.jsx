import { Link } from "next-view-transitions"
import { SubpageNav } from "@/components/layout"
import { getCategoryContent } from "@/lib/content"
import { formatTimeAgo } from "@/lib/date"

export const metadata = {
  title: "Notes",
  description: "Technical notes and perspectives on computational neuroscience and artificial intelligence.",
}

export default function Page() {
  const posts = getCategoryContent("journal")

  return (
    <main className="container my-12 px-5 sm:px-0">
      <SubpageNav />
      <h1 className="text-[25px] font-semibold mt-10 mb-6">Notes</h1>

      <ul className="space-y-2 sm:space-y-1.5">
        {posts.map(({ slug, metadata }) => (
          <li key={slug} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 sm:gap-4">
            <span className="flex items-baseline gap-2">
              <span className="text-foreground shrink-0">▪</span>
              <Link
                href={`/blog/${slug}`}
                className="underline underline-offset-2 decoration-[0.5px]"
              >
                {metadata.title}
              </Link>
            </span>
            <span className="text-muted-foreground whitespace-nowrap text-sm sm:text-base pl-5 sm:pl-0">
              {formatTimeAgo(metadata.publishedAt)}
            </span>
          </li>
        ))}
      </ul>
    </main>
  )
}
