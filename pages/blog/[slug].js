import { getPostBySlug, getPosts } from "@/lib/ghost"
import styles from "@/styles"

export default function Post({ post }) {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div className={`${styles.blogWidth} mx-auto`}>
        <p className="text-[13px] text-stone-500">
          ({new Date(post.published_at).toDateString()})
        </p>

        <img src={post.feature_image} alt="" />
        <h1 className="text-[40px]">{post.title}</h1>
        <div
          className="leading-7 text-[16px]"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
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
