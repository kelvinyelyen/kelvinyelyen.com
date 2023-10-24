import Link from "next/link"
import { getPosts } from "@/lib/ghost"
import styles from "@/styles"

export default function BlogPost({ posts }) {
  return (
    <section className={`${styles.paddings} relative z-10 -mt-10`}>
      <div className={`${styles.innerWidth} mx-auto dark:text-stone-200`}>
        <div className="mb-6">
          <p className="text-[14px] md:text-[16px] ">
            Describing my identity or occupation concisely is challenging due to
            its intricate nature, which defies brevity.
          </p>
        </div>
        <div className="">
          <hr className="h-px bg-gray-200 dark:bg-neutral-800 border-0" />
          {posts.map((post) => (
            <div key={post.id}>
              <Link href={`/blog/${post.slug}`}>
                <div className="flex justify-between gap-10 text-start border-b border-gray-200 dark:border-neutral-800 py-2 lg:py-3 ">
                  <div>
                    <h2 className="text-[14px] md:text-[16px] font-medium transition duration-200 ease-in-out hover:text-stone-500">
                      {post.title}
                    </h2>
                  </div>
                  <div className="text-[10px] md:text-[16px] ">
                    <p className="text-stone-500">
                      {new Date(post.published_at).toLocaleDateString("en-US")}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export async function getStaticProps() {
  const posts = await getPosts()
  return { props: { posts } }
}
