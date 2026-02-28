import { SubpageNav } from "@/components/layout"
import { generateSlugsFromCategory, getContent } from "@/lib/content"
import { formatDate } from "@/lib/date"
import { CustomMDX } from "@/lib/mdx"

export async function generateStaticParams() {
  return generateSlugsFromCategory("journal")
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const { metadata } = await getContent({ category: "journal", slug })
  const ogImage = `https://kelvinyelyen.com/og?title=${metadata.title}`

  return {
    title: metadata.title,
    description: metadata.summary,
    publishedAt: metadata.publishedAtFormatted,
    openGraph: {
      title: metadata.title,
      description: metadata.summary,
      publishedAt: metadata.publishedAtFormatted,
      url: `https://kelvinyelyen.com/blog/${slug}`,
      images: [{ url: ogImage }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.summary,
      images: [ogImage],
    },
  }
}

export default async function Post({ params }) {
  const { slug } = await params
  const post = await getContent({ category: "journal", slug })
  const { title, publishedAt, summary } = post.metadata

  return (
    <main className="container my-12 px-5 sm:px-0">
      <SubpageNav />

      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: title,
            datePublished: publishedAt,
            dateModified: publishedAt,
            description: summary,
            image: post.metadata.image
              ? `https://kelvinyelyen.com${post.metadata.image}`
              : `https://kelvinyelyen.com/og?title=${title}`,
            url: `https://kelvinyelyen.com/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "Kelvin Yelyen",
            },
          }),
        }}
      />

      <header className="mt-10 mb-10">
        <h1 className="text-[22px] sm:text-[25px] font-semibold">{title}</h1>
        <div className="flex flex-col mt-4 sm:mt-6 gap-4 sm:gap-6">
          <p className="font-semibold">{summary}</p>
          <p className="text-foreground">{formatDate(publishedAt)}</p>
        </div>
        <hr className="mt-8 border-stone-200" />
      </header>

      <article className="prose prose-quoteless max-w-none text-foreground">
        {/* @ts-expect-error Server Component */}
        <CustomMDX source={post.content} />
      </article>
    </main>
  )
}
