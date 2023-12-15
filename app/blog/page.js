import fs from "fs"
import path from "path"
import matter from "gray-matter"

import Link from "next/link"

import { formatTimeAgo } from "@/lib/date-helper"

export const metadata = {
  title: "Blog",
  description: "Thoughts, ideas, and opinions.",
}

export default function Page() {
  const blogDir = "content"

  const files = fs.readdirSync(path.join(blogDir))

  const content = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8")
    const { data: frontMatter } = matter(fileContent)
    return {
      meta: {
        ...frontMatter,
        publishedAt: new Date(frontMatter.publishedAt),
      },
      slug: filename.replace(".mdx", ""),
    }
  })

  content.sort((a, b) => b.meta.publishedAt - a.meta.publishedAt)

  content.forEach((blog) => {
    blog.meta.publishedAt = formatTimeAgo(blog.meta.publishedAt)
  })

  return (
    <div className="container text-sm my-5 mb-[300px]">
      <div className="mb-6 text-primary-foreground">
        <p>Thoughts, ideas, and opinions.</p>
      </div>
      <div className="py-2">
        {content.map((blog) => (
          <Link href={"/blog/" + blog.slug} passHref key={blog.slug}>
            <div className="py-2 grid md:grid-cols-3 grid-cols-1 justify-between align-middle border-b border-secondary-foreground transition duration-200 ease-in-out hover:text-primary-foreground relative">
              <div className="col-span-2">
                <h3>{blog.meta.title}</h3>
                {/* <p className="text-primary-foreground text-sm">{blog.meta.summary}</p> */}
              </div>
              <div className="my-auto col-span-1 text-primary-foreground lg:text-end">
                <p>{blog.meta.publishedAt}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
