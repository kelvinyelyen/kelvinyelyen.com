import GhostContentAPI from "@tryghost/content-api"

const api = new GhostContentAPI({
  url: process.env.API_URL,
  key: process.env.CONTENT_API_KEY,
  version: "v5.0",
})

export async function getPosts() {
  return await api.posts
    .browse({
      limit: "all",
      include: "tags,authors",
      fields: "title,slug,html,published_at,excerpt,feature_image,id",
    })
    .catch((err) => {    
      console.error(err) 
    })
}

export async function getPostBySlug(slug) {
  return await api.posts.read({ slug }).catch((err) => {
    console.error(err)
  })
}