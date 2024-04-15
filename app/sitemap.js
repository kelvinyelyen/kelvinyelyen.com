import { getBlogContent } from "@/lib/blog"

const URL = "https://kelvinyelyen.com"

export default async function sitemap() {
  let blogs = getBlogContent().map((post) => ({
    url: `https://kelvinyelyen.com/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))


  let routes = ["", "/work", "/blog"].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }))

  return [...routes, ...blogs]
}
