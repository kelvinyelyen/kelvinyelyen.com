import { Link } from "next-view-transitions"
import { generateSlugsFromCategory, getContent } from "@/lib/content-handler"
import { CustomMDX } from "@/lib/mdx-utils"

export async function generateStaticParams() {
  const listSlugs = generateSlugsFromCategory("reading")
  return listSlugs
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const list = await getContent({ category: "reading", slug })

  const ogImage = `https://kelvinyelyen.com/og?title=${list.metadata.title}`

  const metadata = {
    title: list.metadata.title,
    description: list.metadata.summary,
    publishedAt: list.metadata.publishedAtFormatted,
    openGraph: {
      title: list.metadata.title,
      description: list.metadata.summary,
      publishedAt: list.metadata.publishedAtFormatted,
      url: `https://kelvinyelyen.com/reading/${list.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: list.metadata.title,
      description: list.metadata.summary,
      images: [ogImage],
    },
  }

  return metadata
}

export default async function Reading({ params }) {
  const { slug } = await params
  const list = await getContent({ category: "reading", slug })
  const { title, publishedAtFormatted, summary } = list.metadata

  return (
    <section className="container my-8 mb-[100px] tracking-tight">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BookLists",
            headline: list.metadata.title,
            datePublished: list.metadata.publishedAt,
            dateModified: list.metadata.publishedAt,
            description: list.metadata.summary,
            image: list.metadata.image
              ? `https://kelvinyelyen.com${list.metadata.image}`
              : `https://kelvinyelyen.com/og?title=${list.metadata.title}`,
            url: `https://kelvinyelyen.com/blog/${list.slug}`,
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
        <CustomMDX source={list.content} />
      </article>
    </section>
  )
}
