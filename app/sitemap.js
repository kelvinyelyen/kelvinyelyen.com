import { getContent } from "@/lib/content-handler"

const URL = "https://kelvinyelyen.com"

export default async function sitemap(params) {
  const { slug } = await params
  let blogs = getContent({ category: "journal", slug }).map((post) => ({
    url: `https://kelvinyelyen.com/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))


  let routes = ["", "/work", "/blog", "/reading"].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }))

  return [...routes, ...blogs]
}
