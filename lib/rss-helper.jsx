import RSS from "rss"
import { getAllBlogs } from "./content-helper"
import fs from "fs"
import path from "path"

export const site_url = "https://kelvinyelyen.com"

export default async function generateRssFeed() {
  const allPosts = getAllBlogs()

  const feedOptions = {
    title: "Kelvin Yelyen",
    description:
      "Welcome to GSoftware engineer and designer based in Ghana, passionate about utilizing science and technology to create innovative solutions.",
    site_url: site_url,
    feed_url: `${site_url}/rss.xml`,
    image_url: `${site_url}/img/favicon.png`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, Kelvin Yelyen`,
  }

  const feed = new RSS(feedOptions)

  allPosts.map((post) => {
    if (post && post.meta.title && post.meta.description && post.meta.date) {
      feed.item({
        title: post.meta.title,
        description: post.meta.description,
        url: `${site_url}/blog/${post.slug}`,
        date: post.meta.date,
      })
    }
  })

  const fullFilePath = path.join(process.cwd(), "public", "rss.xml")

  // remove the old file
  if (fs.existsSync(fullFilePath)) {
    await fs.promises.unlink(fullFilePath)
  }

  fs.writeFileSync(fullFilePath, feed.xml({ indent: true }))
}
