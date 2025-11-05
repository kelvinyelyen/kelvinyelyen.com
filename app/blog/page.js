import { Link } from "next-view-transitions"
import { getCategoryContent, sortCategoryContent } from "@/lib/content-handler"

export const metadata = {
  title: "Journal",
  description: "Thoughts, ideas, and opinions.",
}

export default function Page() {
  const rawPosts = getCategoryContent("journal")
  const posts = sortCategoryContent(rawPosts)

  return (
    <div className="container text-sm my-8 mb-24 tracking-tight text-foreground-contrast">
      <div className="mb-6">
        <h1 className="font-semibold">Journal</h1>
        <p className="text-primary-foreground">
          Thoughts, ideas, notes and opinions.
        </p>
      </div>
      
      <div className="py-2 space-y-0">
        {posts.map(({ slug, metadata }) => (
          <Link 
            href={`/blog/${slug}`} 
            key={slug}
            className="block py-3 lg:py-2 border-b border-muted transition duration-200 ease-in-out md:hover:text-primary-foreground"
          >
            <div className="flex items-center justify-between gap-4">
              <h2 className="flex-1">{metadata.title}</h2>
              <time 
                dateTime={metadata.publishedAt} 
                className="text-primary-foreground text-end whitespace-nowrap"
              >
                {metadata.publishedAt}
              </time>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}