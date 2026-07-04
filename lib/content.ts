import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { formatDateTimeFull } from "./date"

const contentDir = "content"

export interface PostMetadata {
  title: string
  publishedAt: string | Date
  summary: string
  image?: string
  authors?: string
  venue?: string
  document?: string
  website?: string
  role?: string
  degree?: string
  company?: string
  institution?: string
  year?: string | number
  publishedAtFormatted?: string
  updatedAt?: string
}

export interface Post {
  metadata: PostMetadata
  slug: string
  content: string
}

function getMdxFiles(categoryDir: string) {
  const files = fs.readdirSync(categoryDir)
  return files.filter((filename) => {
    const fullPath = path.join(categoryDir, filename)
    return fs.statSync(fullPath).isFile() && filename.endsWith(".mdx")
  })
}

export function generateSlugsFromCategory(category: string) {
  const categoryDir = path.join(contentDir, category)
  return getMdxFiles(categoryDir).map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }))
}

export async function getContent({ category, slug }: { category: string; slug: string }): Promise<Post> {
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
    } as PostMetadata,
    slug,
    content: content,
  }
}

export function getCategoryContent(category: string): Post[] {
  const categoryDir = path.join(contentDir, category)

  const content = getMdxFiles(categoryDir).map((filename) => {
    const fileContent = fs.readFileSync(path.join(categoryDir, filename), "utf-8")
    const { data: frontMatter, content: markdownContent } = matter(fileContent)

    return {
      metadata: {
        ...frontMatter,
        publishedAt: new Date(frontMatter.publishedAt),
      } as PostMetadata,
      slug: filename.replace(".mdx", ""),
      content: markdownContent
    }
  })

  return content.sort((a, b) => {
    const timeA = new Date(a.metadata.publishedAt).getTime();
    const timeB = new Date(b.metadata.publishedAt).getTime();

    if (!isNaN(timeA) && !isNaN(timeB)) {
      return timeB - timeA;
    }

    if (a.metadata.year && b.metadata.year) {
      const yearA = parseInt(a.metadata.year.toString().match(/\d{4}/)?.[0] || '0', 10);
      const yearB = parseInt(b.metadata.year.toString().match(/\d{4}/)?.[0] || '0', 10);
      if (yearA !== yearB) return yearB - yearA;
    }

    return a.slug.localeCompare(b.slug);
  })
}
