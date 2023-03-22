import Link from "next/link"
import { getPosts } from "@/lib/ghost"
import styles from "@/styles"

export default function BlogPost({ posts }) {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div className={`${styles.projectWidth} mx-auto text-secondary-white`}>
        <p className="uppercase text-[10px] text-stone-500">
          (Musings, Shower-thoughts, Notes ...)
        </p>
        <p className="">
          At certain times, articulating a concise portrayal of my identity or
          occupation can prove to be challenging, as it encompasses a
          complexity that cannot be adequately conveyed through a mere handful
          of words.
        </p>
        <hr className="h-px my-8 bg-gray-300 dark:bg-neutral-500 border-0" />
        {posts.map((post) => (
          <div key={post.id}>
            <div className="flex justify-between text-start">
              <Link href={`/blog/${post.slug}`}>
                <p className="text-[13px]">
                  ({new Date(post.published_at).toDateString()})
                </p>
                <h2 className="text-[20px] lg:text-[25px] ">{post.title}</h2>
                <p className="text-[13px]">{post.excerpt}</p>
              </Link>
              <div> &#x1F866;</div>
            </div>
            <hr className="h-px my-8 bg-gray-300 dark:bg-neutral-500 border-0" />
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
