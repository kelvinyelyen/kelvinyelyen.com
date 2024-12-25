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
    <div className="container text-sm my-8 mb-[100px] tracking-tight text-foreground-contrast">
      <div>
        <div className="mb-6 ">
          <h1 className="font-semibold">Journal</h1>
          <p className="text-primary-foreground">
            Thoughts, ideas, notes and opinions.
          </p>
        </div>
        <div className="py-2">
          {posts.map(({ slug, metadata }) => {
            return (
              <Link href={"/blog/" + slug} passHref key={slug}>
                <div className="lg:py-2 py-3 flex align-top md:grid-cols-3 grid-cols-3 justify-between border-b border-muted transition duration-200 ease-in-out md:hover:text-primary-foreground relative">
                  <div className="col-span-2">
                    <h1>{metadata.title}</h1>
                  </div>
                  <div className="my-auto col-span-1 text-primary-foreground text-end">
                    <p>{metadata.publishedAt}</p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
