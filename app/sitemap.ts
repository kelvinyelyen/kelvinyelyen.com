import { getCategoryContent } from "@/lib/content"

const URL = "https://kelvinyelyen.com"

export default function sitemap() {
  const notes = getCategoryContent("notes")

  const notesPosts = notes.map((post) => ({
    url: `${URL}/notes/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  const routes = ["/", "/work", "/notes"].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }))

  return [...routes, ...notesPosts]
}
