import { Link } from "next-view-transitions"
import { getCategoryContent, sortCategoryContent } from "@/lib/content"

export const metadata = {
  title: "Writing",
  description: "Technical notes and perspectives on computational neuroscience and artificial intelligence.",
}

export default function Page() {
  const rawPosts = getCategoryContent("journal")
  const posts = sortCategoryContent(rawPosts)

  return (
    <main className="container my-12 text-sm tracking-tight">
      <div className="mb-12 border-b border-muted/30 pb-4">
        <h1 className="text-xs uppercase tracking-[0.2em] font-semibold text-muted-foreground mb-1">
          Writing
        </h1>
        <p className="text-muted-foreground">
          Technical notes and ideas.
        </p>
      </div>

      <div className="py-2 space-y-0">
        {posts.map(({ slug, metadata }) => (
          <Link
            href={`/blog/${slug}`}
            key={slug}
            className="block py-3 lg:py-2 border-b border-muted/20 transition duration-200 ease-in-out md:hover:text-muted-foreground"
          >
            <div className="flex items-center justify-between gap-4">
              <h2 className="flex-1 font -medium">{metadata.title}</h2>
              <time
                dateTime={metadata.publishedAt}
                className="text-muted-foreground text-end whitespace-nowrap"
              >
                {metadata.publishedAt}
              </time>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
