import Link from "next/link"
import { getPostBySlug, getPosts } from "@/lib/ghost"
import styles from "@/styles"
import Meta from "@/components/Meta"

export default function Post({ post }) {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <Meta
        title={post.title}
        ogImage={post.feature_image}
        description={post.excerpt}
      />
      <div className={`${styles.innerWidth} mx-auto`}>
        <div className="">
          <h1 className="lg:text-[26px] text-[22px] leading-tight my-5">
            {post.title}
          </h1>
          <div className="grid grid-cols-2 lg:text-[16px] text-[15px] my-5 ">
            <p className="">{new Date(post.published_at).toDateString()}</p>
            <Link href="/blog" className="text-end">
              Back
            </Link>
          </div>
          <div
            className="lg:leading-8 leading-8 text-[15px] lg:text-[16px] font-medium text-neutral-800 dark:text-stone-300 prose dark:prose-invert prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </div>
    </section>
  )
}

export async function getStaticPaths() {
  const posts = await getPosts()
  const paths = posts.map((post) => ({ params: { slug: post.slug } }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug)
  return { props: { post } }
}
