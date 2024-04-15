import Link from "next/link"

import { getBlogContent } from "@/lib/blog"

export const metadata = {
  title: "Journal",
  description: "Thoughts, ideas, and opinions.",
}

export default function Page() {
  const posts = getBlogContent()

  return (
    <div className="container text-sm my-5 mb-[100px] tracking-tight">
      <div className="mb-6 ">
        <h1>Journal</h1>
        <p className="text-primary-foreground">
          Thoughts, ideas, and opinions.
        </p>
      </div>
      <div className="py-2">
        {posts.map((post) => {
          const {
            metadata: { title, publishedAt, summary, tags },
          } = post
          return (
            <Link href={"/blog/" + post.slug} passHref key={post.slug}>
              <div className="py-2 grid md:grid-cols-3 grid-cols-1 justify-between align-middle border-b border-muted transition duration-200 ease-in-out hover:text-primary-foreground relative">
                <div className="col-span-2">
                  <h3>{title}</h3>
                </div>
                <div className="my-auto col-span-1 text-primary-foreground lg:text-end">
                  <p>{publishedAt}</p>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
