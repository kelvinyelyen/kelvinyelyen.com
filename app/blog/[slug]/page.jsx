import { Link } from "next-view-transitions"
import { generateSlugsFromCategory, getContent } from "@/lib/content"
import { formatDate } from "@/lib/date"
import { CustomMDX } from "@/lib/mdx"

export async function generateStaticParams() {
  const blogSlugs = generateSlugsFromCategory("journal")
  return blogSlugs
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const blog = await getContent({ category: "journal", slug })

  const ogImage = `https://kelvinyelyen.com/og?title=${blog.metadata.title}`

  const metadata = {
    title: blog.metadata.title,
    description: blog.metadata.summary,
    publishedAt: blog.metadata.publishedAtFormatted,
    openGraph: {
      title: blog.metadata.title,
      description: blog.metadata.summary,
      publishedAt: blog.metadata.publishedAtFormatted,
      url: `https://kelvinyelyen.com/blog/${blog.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: blog.metadata.title,
      description: blog.metadata.summary,
      images: [ogImage],
    },
  }

  return metadata
}

export default async function Post({ params }) {
  const { slug } = await params
  const post = await getContent({ category: "journal", slug })
  const { title, publishedAt, summary } = post.metadata

  return (
    <section className="container my-8 mb-[100px] tracking-tight">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `https://kelvinyelyen.com${post.metadata.image}`
              : `https://kelvinyelyen.com/og?title=${post.metadata.title}`,
            url: `https://kelvinyelyen.com/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "Kelvin Yelyen",
            },
          }),
        }}
      />

      <header className="mb-10">
        <h1 className="lg:text-[26px] text-[22px] font-semibold">{title}</h1>
        <div className="flex flex-col mt-6">
          <p className="font-semibold text-sm">{summary}</p>
          <p className="text-sm text-foreground mt-6">{formatDate(publishedAt)}</p>
        </div>
        <hr className="mt-8 border-stone-200 dark:border-stone-800" />
      </header>

      <article className="prose prose-quoteless prose-sm max-w-none leading-6 text-foreground dark:prose-invert">
        {/* @ts-expect-error Server Component */}
        <CustomMDX source={post.content} />
      </article>
    </section>
  )
}
