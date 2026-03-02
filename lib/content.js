import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { formatTimeAgo, formatDateTimeFull } from "./date"

const contentDir = "content"

function getMdxFiles(categoryDir) {
  const files = fs.readdirSync(categoryDir)
  return files.filter((filename) => {
    const fullPath = path.join(categoryDir, filename)
    return fs.statSync(fullPath).isFile() && filename.endsWith(".mdx")
  })
}

function generateSlugsFromCategory(category) {
  const categoryDir = path.join(contentDir, category)
  return getMdxFiles(categoryDir).map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }))
}


async function getContent({ category, slug }) {
  const categoryDir = path.join(contentDir, category)
  const markdownFile = fs.readFileSync(
    path.join(categoryDir, slug + ".mdx"),
    "utf-8"
  )
  const { data: frontMatter, content } = matter(markdownFile)

  return {
    metadata: {
      ...frontMatter,
      publishedAtFormatted: formatDateTimeFull(frontMatter.publishedAt),
    },
    slug,
    content: content,
  }
}

function getCategoryContent(category) {
  const categoryDir = path.join(contentDir, category)

  const content = getMdxFiles(categoryDir).map((filename) => {
    const fileContent = fs.readFileSync(path.join(categoryDir, filename), "utf-8")
    const { data: frontMatter } = matter(fileContent)

    return {
      metadata: {
        ...frontMatter,
        publishedAt: new Date(frontMatter.publishedAt),
      },
      slug: filename.replace(".mdx", ""),
    }
  })

  return content.sort((a, b) => b.metadata.publishedAt - a.metadata.publishedAt)
}




export {
  generateSlugsFromCategory,
  getContent,
  getCategoryContent,
}
