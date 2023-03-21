import Link from "next/link"
import { getPosts } from "@/utils/ghost"
import styles from "@/styles"

export default function Home({ posts }) {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <h1 className="uppercase text-[10px]">(Welcome to my blog)</h1>
      <hr className="h-px my-8 bg-gray-300 dark:bg-neutral-300 border-0" />
      <Link href="">
        <div className="grid grid-cols-2 gap-20 text-end dark:text-secondary-white">
          <div className={`${styles.projectWidth} mx-auto`}>
            {posts.map((post) => (
              <div key={post.id}>
                <div className="flex justify-between">
                  <Link href={`/${post.slug}`}>
                    <h2 className="font-monument uppercase tracking-tighter text-[30px] lg:text-[40px] ">
                      {post.title}
                    </h2>
                    <p>{post.custom_excerpt}</p>
                  </Link>
                  <div className="sm:block hidden">&#x1F866;</div>
                </div>
                <hr className="h-px my-8 bg-gray-300 dark:bg-neutral-300 border-0" />
              </div>
            ))}
          </div>
        </div>
      </Link>
    </section>
  )
}

export async function getStaticProps() {
  const posts = await getPosts()
  return { props: { posts } }
}
