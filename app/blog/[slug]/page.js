import fs from "fs"
import path from "path"
import Link from "next/link"
import matter from "gray-matter"
import { CustomMDX } from "@/lib/mdx"
import { formatDateTimeFull } from "@/lib/date-helper"
import generateRssFeed from "@/lib/rss-helper"

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

export async function generateMetadata({ params, searchParams }) {
  const blog = getPost({ slug: params.slug })

  const metadata = {
    title: blog.frontMatter.title,
    description: blog.frontMatter.summary,
    publishedAt: blog.frontMatter.publishedAtFormatted,
    openGraph: {
      title: blog.frontMatter.title,
      description: blog.frontMatter.summary,
      publishedAt: blog.frontMatter.publishedAtFormatted,
      type: "article",
    },
    twitter: {
      card: "summary",
      site: "@kelvinyelyen",
      creator: "@kelvinyelyen",
      title: blog.frontMatter.title,
      description: blog.frontMatter.summary,
    },
  }

  if (blog.frontMatter.image) {
    const imageArray = Array.isArray(blog.frontMatter.image)
      ? blog.frontMatter.image
      : [blog.frontMatter.image]

    metadata.openGraph = {
      ...metadata.openGraph,
      images: imageArray,
    }

    metadata.twitter.images = imageArray[0]

    metadata.twitter.card = metadata.twitter.images
      ? "summary_large_image"
      : "summary"
  }

  return metadata
}

export default function Post({ params }) {
  const props = getPost(params)
  const { title, publishedAtFormatted, summary } = props.frontMatter

  return (
    <section className="container my-5 mb-[200px]">
      <article className="prose prose-quoteless prose-stone prose-sm max-w-none dark:prose-invert leading-7">
        <h1 className="lg:text-2xl text-xl font-normal">{title}</h1>

        <div className="flex justify-between items-center -mt-8 text-sm text-primary-foreground">
          <div>
            <p>{publishedAtFormatted}</p>
          </div>
          <div className="ml-auto">
            <Link href="/blog/">back</Link>
          </div>
        </div>

        {/* @ts-expect-error Server Component*/}
        <CustomMDX source={props.content} />
      </article>
    </section>
  )
}
