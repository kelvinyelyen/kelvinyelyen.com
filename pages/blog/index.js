import Link from "next/link"
import { getPosts } from "@/lib/ghost"
import styles from "@/styles"
import Meta from "@/components/Meta"

export default function BlogPost({ posts }) {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <Meta description="Articulating a concise portrayal of my identity or occupation can prove to be challenging, as it encompasses a complexity that cannot be adequately conveyed through a mere handful of words." />
      <div
        className={`${styles.projectWidth} mx-auto dark:text-secondary-white`}
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="lg:mr-[20%] mr-0 w-30">
            <p className="uppercase text-[10px] text-stone-500">
              (Musings, Shower-thoughts, Essays ... )
            </p>
            <p className="text-[13px] md:text-[15px] ">
              At certain times, articulating a concise portrayal of my identity
              or occupation can prove to be challenging, as it encompasses a
              complexity that cannot be adequately conveyed through a mere
              handful of words.
            </p>
          </div>
          <div className="md:col-span-2">
            <hr className="h-px lg:mb-8 mb-8 mt-4 lg:my-0  bg-gray-400 dark:bg-neutral-500 border-0" />
            {posts.map((post) => (
              <div key={post.id}>
                <Link href={`/blog/${post.slug}`}>
                  <div className="flex justify-between gap-10 text-start">
                    
                    <div>
                      <p className="text-xs md:text-sm">
                        ({new Date(post.published_at).toDateString()})
                      </p>
                      <h2 className="text-[20px] md:text-2xl font-medium">
                        {post.title}
                      </h2>
                      <p className="text-xs md:text-sm text-neutral-700 dark:text-secondary-white">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="text-xs md:text-sm">&#x1F866;</div>
                  </div>
                </Link>
                <hr className="h-px my-8 bg-gray-400 dark:bg-neutral-500 border-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export async function getStaticProps() {
  const posts = await getPosts()
  return { props: { posts } }
}
