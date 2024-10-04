import { Link } from "next-view-transitions"

import { getBlogContent } from "@/lib/blog"

export const metadata = {
  title: "Journal",
  description: "Thoughts, ideas, and opinions.",
}

export default function Page() {
  const posts = getBlogContent()

  return (
    <div className="container text-sm my-8 mb-[100px] tracking-tight">
      <div>
        <div className="mb-6 ">
          <h1 className="font-semibold">Journal</h1>
          <p className="text-primary-foreground">
            Thoughts, ideas, notes and opinions.
          </p>
        </div>
        <div className="py-2">
          {posts.map((post) => {
            const {
              metadata: { title, publishedAt, summary, tags },
            } = post
            return (
              <Link href={"/blog/" + post.slug} passHref key={post.slug}>
                <div className="lg:py-2 py-3 flex align-top md:grid-cols-3 grid-cols-3 justify-between border-b border-muted transition duration-200 ease-in-out md:hover:text-primary-foreground relative">
                  <div className="col-span-2">
                    <h3>{title}</h3>
                  </div>
                  <div className="my-auto col-span-1 text-primary-foreground text-end">
                    <p>{publishedAt}</p>
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
