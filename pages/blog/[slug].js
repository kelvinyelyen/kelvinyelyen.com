import { getPostBySlug, getPosts } from "@/lib/ghost"

export default function Post({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export async function getStaticPaths() {
  const posts = await getPosts()
  const paths = posts.map((post) => ({ params: { slug: post.slug } }))
  console.log(paths)
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug)
  return { props: { post } }
}
