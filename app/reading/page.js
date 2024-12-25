import { Link } from "next-view-transitions"
import { getCategoryContent, sortCategoryContent } from "@/lib/content-handler"

export const metadata = {
  title: "Reading",
  description: "Reading List.",
}

export default function Page() {
  const rawPosts = getCategoryContent("reading")
  const posts = sortCategoryContent(rawPosts)

  return (
    <div className="container text-sm my-8 mb-[100px] tracking-tight text-foreground-contrast">
      <div>
        <div className="mb-6 ">
          <h1 className="font-semibold">Reading</h1>
          <p className="text-primary-foreground">
            My childhood hobby of reading has evolved into a lifelong passion.
            My choices of books are greatly influenced by my fascination with
            Arts and Culture, Philosophy, Neuroscience, Technology, and other
            related subjects. Nevertheless, I am always willing to explore any
            book, regardless of its genre, for I believe that every book holds a
            unique perspective to be discovered. So, feel free to suggest
            reads—I&apos;m eager to discuss and discover new perspectives.
          </p>
        </div>
        <div className="py-2">
          {posts.map(({ slug, metadata }) => {
            const randomColor = `#${Math.floor(
              Math.random() * 16777215
            ).toString(16)}`
            return (
              <Link href={"/reading/" + slug} passHref key={slug}>
                <div className="lg:py-2 py-3 flex md:grid-cols-3 grid-cols-3 justify-between border-b border-muted transition duration-200 ease-in-out md:hover:text-primary-foreground relative">
                  <div className="col-span-2">
                    <h1>{metadata.title}</h1>
                  </div>
                  <div
                    className="h-2 w-2 rounded-full ml-2 self-center"
                    style={{ backgroundColor: randomColor }}
                  ></div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
