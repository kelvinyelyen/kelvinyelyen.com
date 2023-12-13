//TODO: Apply DRY principles
export async function generateStaticParams() {
  await generateRssFeed()
  const files = fs.readdirSync(path.join("content"))

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }))

  return paths
}

function getPost({ slug }) {
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
    let blogs = getPost().map((post) => ({
      url: `{URL}/blog/${post.slug}`,
      lastModified: post.metadata.publishedAt,
    }))

  let routes = ["", "/projects", "/blog"].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }))

  return [...routes, ...blogs]
}
