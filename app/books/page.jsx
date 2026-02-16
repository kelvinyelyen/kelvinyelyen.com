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
    <main className="container my-12 text-sm tracking-tight">
      <div className="mb-6 border-b border-muted/15 pb-2">
        <h1 className="text-xs uppercase tracking-[0.2em] font-semibold text-muted-foreground mb-1">
          Books
        </h1>
        <p className="text-muted-foreground">
          My reading list and book recommendations.
        </p>
      </div>
      <div className="prose prose-quoteless prose-sm max-w-none leading-6 text-foreground dark:prose-invert">
        <CustomMDX source={content} />
      </div>
    </main>
  )
}