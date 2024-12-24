import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { serialize } from "next-mdx-remote/serialize"

import { formatTimeAgo, formatDateTimeFull } from "./dates"

const blogDir = "content/blog"

function generateSlugsFromFiles() {
  const files = fs.readdirSync(path.join(blogDir))

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }))

  return paths
}

async function getPost({ slug }) {
  const markdownFile = fs.readFileSync(
    path.join(blogDir, slug + ".mdx"),
    "utf-8"
  )
  const { data: frontMatter, content } = matter(markdownFile)

  return {
    metadata: {
      ...frontMatter,
      publishedAtFormatted: formatDateTimeFull(frontMatter.publishedAt),
    },
    slug,
    content: content,
  }
}

function getBlogContent() {
  const files = fs.readdirSync(path.join(blogDir))

  const content = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8")
    const { data: frontMatter } = matter(fileContent)
    return {
      metadata: {
        ...frontMatter,
        publishedAt: new Date(frontMatter.publishedAt),
      },
      slug: filename.replace(".mdx", ""),
    }
  })

  const sortedContent = sortBlogContent(content)
  return sortedContent
}

function sortBlogContent(content) {
  const sortedContent = [...content]
  sortedContent.sort((a, b) => b.metadata.publishedAt - a.metadata.publishedAt)

  sortedContent.forEach((blog) => {
    blog.metadata.publishedAt = formatTimeAgo(blog.metadata.publishedAt)
  })

  return sortedContent
}

export { generateSlugsFromFiles, getPost, getBlogContent }
