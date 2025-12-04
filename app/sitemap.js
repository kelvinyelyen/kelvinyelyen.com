import { getCategoryContent } from "@/lib/content"

const URL = "https://kelvinyelyen.com"

export default function sitemap() {
  const blogs = getCategoryContent("journal")

  const blogPosts = blogs.map((post) => ({
    url: `${URL}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  const routes = ["/", "/work", "/blog"].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }))

  return [...routes, ...blogPosts]
}
