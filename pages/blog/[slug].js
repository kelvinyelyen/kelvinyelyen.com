import Link from "next/link"
import { getPostBySlug, getPosts } from "@/lib/ghost"
import styles from "@/styles"

export default function Post({ post }) {
  
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div className={`${styles.blogWidth} mx-auto`}>
        <Link href="/blog" className="text-stone-500">
          &#129120;
        </Link>
        <p className="text-sm text-stone-500 my-5">
          ({new Date(post.published_at).toDateString()})
        </p>
        <div className="dark:text-secondary-white">
          <img src={post.feature_image} alt="" style={{ maxWidth: "100%" }} />
          <h1 className="lg:text-[30px] text-[25px] leading-tight my-5">
            {post.title}
          </h1>
          <div
            className="leading-7 text-[15px] lg:text-[16px] text-neutral-700 dark:text-secondary-white"
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