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
        <div className="flex items-center gap-2 text-stone-500">
          <Link href="/blog" className="flex items-center">
            <span className="inline-block bg-stone-500 rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384.67 384.67"
                className="w-2 h-2 text-white transform rotate-45 scale-x-[-1]"
              >
                <g data-name="Layer 2">
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M0 45.26l276.05 276.05H22.63v63.36h362.04V22.63h-63.36v253.42L45.26 0 0 45.26z"
                    data-name="Layer 1"
                  ></path>
                </g>
              </svg>
            </span>
          </Link>
          <p className="text-sm my-5">
            {" "}
            ({new Date(post.published_at).toDateString()})
          </p>
        </div>
        <div className="">
          <img src={post.feature_image} alt="" />
          <h1 className="lg:text-[30px] text-[25px] leading-tight my-5">
            {post.title}
          </h1>
          <div
            className="lg:leading-9 leading-7 text-sm lg:text-[16px] text-neutral-800 dark:text-stone-300 prose dark:prose-invert prose-sm max-w-none"
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
