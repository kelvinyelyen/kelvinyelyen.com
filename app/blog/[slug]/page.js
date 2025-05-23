import { Link } from "next-view-transitions"
import { generateSlugsFromCategory, getContent } from "@/lib/content-handler"
import { CustomMDX } from "@/lib/mdx-utils"
import generateRssFeed from "@/lib/rss"

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
  const { title, publishedAtFormatted, summary } = post.metadata

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
      <article className="prose prose-quoteless prose-sm max-w-none prose-stone prose-invert leading-6">
        <h1 className="lg:text-[26px] text-[22px] font-medium">{title}</h1>
        <div className="flex justify-between items-center -mt-8 text-foreground-contrast">
          <div>
            <p>{publishedAtFormatted}</p>
          </div>
          <div className="ml-auto">
            <Link href="/blog/">back</Link>
          </div>
        </div>
        {/* @ts-expect-error Server Component */}
        <CustomMDX source={post.content} />
      </article>
    </section>
  )
}
