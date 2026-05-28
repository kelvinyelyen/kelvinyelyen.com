import { SubpageNav } from "@/components/layout"
import { CustomMDX } from "@/lib/mdx"
import { readFileSync } from "fs"
import { join } from "path"
import matter from "gray-matter"

export const metadata = {
  title: "Books",
  description: "My reading list and book recommendations.",
}

export default function BooksPage() {
  const filePath = join(process.cwd(), "content/books.mdx")
  const { content } = matter(readFileSync(filePath, "utf-8"))

  return (
    <main className="container my-12 px-5 sm:px-0">
      <SubpageNav />
      <h1 className="text-[25px] font-semibold mt-10 mb-6">Books</h1>
      <div className="prose prose-stone prose-quoteless max-w-none text-foreground [&_ul]:my-2 [&_li]:my-0.5 [&_h3]:mt-6 [&_h3]:mb-2 [&_h4]:mt-3 [&_h4]:mb-1">
        <CustomMDX source={content} />
      </div>
    </main>
  )
}