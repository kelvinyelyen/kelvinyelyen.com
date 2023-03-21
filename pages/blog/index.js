import Link from "next/link"
import { getPosts } from "@/lib/ghost"
import styles from "@/styles"

export default function Home({ posts }) {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div className={`${styles.projectWidth} mx-auto`}>
        <h1 className="uppercase text-[10px] text-stone-500">
          (Welcome to my blog)
        </h1>
        <hr className="h-px my-8 bg-gray-300 dark:bg-neutral-300 border-0" />

        {posts.map((post) => (
          <div key={post.id}>
            <div className="flex justify-between text-start">
              <Link href={`/${post.slug}`}>
                <p>{post.published_at}</p>
                <h2 className="text-[20px] lg:text-[20px] ">{post.title}</h2>
                <p>{post.custom_excerpt}</p>
              </Link>
              <div className="sm:block hidden">&#x1F866;</div>
            </div>
            <hr className="h-px my-8 bg-gray-300 dark:bg-neutral-300 border-0" />
          </div>
        ))}
      </div>
    </section>
  )
}

export async function getStaticProps() {
  const posts = await getPosts()
  return { props: { posts } }
}
