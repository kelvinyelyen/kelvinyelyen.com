import GhostContentAPI from "@tryghost/content-api"

const api = new GhostContentAPI({
  url: "https://kelvin-yelyen.ghost.io",
  key: "bbea8e16be900dc1849155b2a0",
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
