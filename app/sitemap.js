import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { formatDateTimeFull } from "@/lib/date-helper"

// Function to get post
function getPost(slug) {
  const markdownFile = fs.readFileSync(
    path.join("content", slug + ".mdx"),
    "utf-8"
  )
  const { data: frontMatter, content } = matter(markdownFile)
  return {
    frontMatter: {
      ...frontMatter,
      publishedAtFormatted: formatDateTimeFull(frontMatter.publishedAt),
    },
    slug,
    content,
  }
}

const URL = "https://kelvinyelyen.com"

export default async function sitemap() {
  // Obtain slugs for posts
  const files = fs.readdirSync(path.join("content"))
  const paths = files.map((filename) => filename.replace(".mdx", ""))

  // Generate blog URLs and last modified dates
  let blogs = paths.map((slug) => {
    const post = getPost(slug)
    return {
      url: `${URL}/blog/${slug}`,
      lastModified: post.frontMatter.publishedAtFormatted,
    }
  })

  // Define other routes
  let routes = ["", "/projects", "/blog"].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }))

  return [...routes, ...blogs]
}
