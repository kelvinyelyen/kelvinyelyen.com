import { CustomMDX } from "@/lib/mdx"
import { readFileSync } from "fs"
import { join } from "path"
import matter from "gray-matter"

export const metadata = {
  title: "Books",
  description: "My reading list and book recommendations.",
}

export default function BooksPage() {
  const fileContent = readFileSync(
    join(process.cwd(), "content/books.mdx"),
    "utf-8"
  )
  const { content } = matter(fileContent)

  return (
    <article className="container my-8 text-sm tracking-tight">
      <div className="prose prose-sm max-w-none lg:leading-6 leading-relaxed dark:prose-invert">
        <CustomMDX source={content} />
      </div>
    </article>
  )
}