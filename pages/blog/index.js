import Link from "next/link"
import { getPosts } from "@/lib/ghost"
import styles from "@/styles"
import Meta from "@/components/Meta"

export default function BlogPost({ posts }) {
  return (
    <section className={`${styles.paddings} relative z-10 -mt-10`}>
      <Meta description="Articulating a concise portrayal of my identity or occupation can prove to be challenging, as it encompasses a complexity that cannot be adequately conveyed through a mere handful of words." />
      <div className={`${styles.innerWidth} mx-auto dark:text-stone-200`}>
        <div className="mb-6">
          <p className="uppercase text-[14px] md:text-[16px]  text-stone-500">
            [ Musings, Shower-thoughts ]
          </p>
          <p className="text-[14px] md:text-[16px] ">
            At certain times, articulating a concise portrayal of my identity or
            occupation can prove to be challenging, as it encompasses a
            complexity that cannot be adequately conveyed through a mere handful
            of words.
          </p>
        </div>
        <div className="">
          <hr className="h-px lg:mb-4 mb-4 mt-4 lg:my-0 bg-gray-200 dark:bg-neutral-800 border-0" />
          {posts.map((post) => (
            <div key={post.id}>
              <Link href={`/blog/${post.slug}`}>
                <div className="flex justify-between gap-10 text-start my-4 border-b border-gray-200 dark:border-neutral-800 pb-4">
                  <div>
                    <h2 className="text-[14px] md:text-[16px] font-medium">
                      {post.title}
                    </h2>
                  </div>
                  <div className="text-[10px] md:text-[16px] ">
                    <p className="text-stone-500">
                      ({new Date(post.published_at).toDateString()})
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
