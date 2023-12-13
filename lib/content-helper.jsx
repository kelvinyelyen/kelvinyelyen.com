const fs = require("fs")
const path = require("path")
const matter = require("gray-matter")

const blogDir = "content"

const getSlugFromFileName = (filename) => filename.replace(".mdx", "")

const getFileNameFromSlug = (slug) => slug + ".mdx"

const getBlogFiles = () =>
  fs.readdirSync(path.join(blogDir)).filter((x) => {
    const y = x.split(".")
    return y[y.length - 1] === "mdx"
  })

const readBlogFile = (filename) => {
  try {
    return fs.readFileSync(path.join(blogDir, filename), "utf-8")
  } catch {
    return null
  }
}

const getBlogFromFile = (filename) => {
  const file = readBlogFile(filename)
  if (file == null) {
    return null
  }

  const { data, content } = matter(file)
  const slug = getSlugFromFileName(filename)

  const meta = cleanMetaFromMatter(data)

  return { meta, slug, content }
}

const cleanMetaFromMatter = (meta) => {
  return {
    ...meta,
    author: meta.author ?? "Kelvin Yelyen",
    date: new Date(meta.date) ?? null,
  }
}

const getBlogItemFromFile = (filename) => {
  return {
    slug: getSlugFromFileName(filename),
  }
}

const filterNewToOld = (blogs) => {
  return blogs.sort(
    (a, b) =>
      new Date(b?.meta?.date ?? new Date()).getTime() -
      new Date(a?.meta?.date ?? new Date()).getTime()
  )
}

function getAllBlogs() {
  const files = getBlogFiles()

  const blogs = files.map((filename) => {
    return getBlogFromFile(filename)
  })

  return filterNewToOld(blogs)
}

function getAllBlogsInfo() {
  const files = getBlogFiles()

  return files.map((filename) => getBlogItemFromFile(filename))
}

function getBlog(slug) {
  const filename = getFileNameFromSlug(slug)

  return getBlogFromFile(filename)
}

module.exports = {
  getAllBlogs,
  getAllBlogsInfo,
  getBlog,
}
