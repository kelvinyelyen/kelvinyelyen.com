import { getCategoryContent } from "@/lib/content-handler"

const URL = "https://kelvinyelyen.com"

export default function sitemap() {
  const blogs =  getCategoryContent("journal")
  const reading = getCategoryContent("reading")

  const blogPosts = blogs.map((post) => ({
    url: `${URL}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

    const readingList = reading.map((list) => ({
      url: `${URL}/reading/${list.slug}`,
      lastModified: list.metadata.publishedAt,
    }))

  const routes = ["", "/work", "/blog", "/reading"].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }))

  return [...routes, ...blogPosts, ...readingList]
}
