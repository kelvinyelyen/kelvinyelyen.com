import { getContent } from "@/lib/content-handler"

const URL = "https://kelvinyelyen.com"

export default async function sitemap(params) {
  const { slug } = await params

  const blogs = await getContent({ category: "journal", slug })

  const blogPosts = blogs.map((post) => ({
    url: `${URL}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  const routes = ["", "/work", "/blog", "/reading"].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }))

  return [...routes, ...blogPosts]
}
