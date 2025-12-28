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
      <div className="mb-12 border-b border-muted/20 pb-4">
        <h1 className="text-xs uppercase tracking-[0.2em] font-semibold text-muted-foreground mb-1">
          Writing
        </h1>
        <p className="text-muted-foreground italic">
          Technical notes and perspectives on systems of intelligence.
        </p>
      </div>

      <div className="space-y-0">
        {posts.map(({ slug, metadata }) => (
          <Link
            href={`/blog/${slug}`}
            key={slug}
            className="group block py-4 border-b border-muted/10 transition-colors duration-200"
          >
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
              <h2 className="text-sm font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                {metadata.title}
              </h2>
              <time
                dateTime={metadata.publishedAt}
                className="text-xs text-muted-foreground/60 tabular-nums shrink-0"
              >
                {new Date(metadata.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit'
                }).replace(/\//g, '.')}
              </time>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
