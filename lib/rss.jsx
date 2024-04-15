import RSS from "rss"
import { getBlogContent } from "./blog"
import fs from "fs"
import path from "path"

export const site_url = "https://kelvinyelyen.com"

export default async function generateRssFeed() {
  const allPosts = getBlogContent()

  const feedOptions = {
    title: "Kelvin Yelyen",
    description: "Software engineer and designer based in Ghana.",
    site_url: site_url,
    feed_url: `${site_url}/rss.xml`,
    image_url: `${site_url}/favicon.ico`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, Kelvin Yelyen`,
  }

  const feed = new RSS(feedOptions)

  allPosts.map((post) => {
    if (
      post &&
      post.metadata.title &&
      post.metadata.description &&
      post.metadata.date
    ) {
      feed.item({
        title: post.metadata.title,
        description: post.metadata.description,
        url: `${site_url}/blog/${post.slug}`,
        date: post.metadata.date,
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
