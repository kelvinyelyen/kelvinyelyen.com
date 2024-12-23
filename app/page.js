import { Link } from "next-view-transitions"
import { getBlogContent } from "@/lib/blog"

export default function Home() {
  const posts = getBlogContent()
  return (
    <main className="container items-center text-sm my-8 tracking-tight">
      <section>
        <div className="mx-auto">
          <div className="prose prose-sm text-foreground-contrast prose-stone prose-invert max-w-none lg:leading-6 leading-relaxed">
            <p>
              Software engineer dedicated to breaking new ground and exploring
              novel approaches to problem-solving. My interests include bridging
              the gap between cognitive science and artificial intelligence. I
              am particularly interested in how insights from these areas can be
              applied to enhance intelligent systems and advance our
              understanding of human cognition.
            </p>
            <p>
              Outside of work, I&apos;m deeply passionate about philosophy,
              neuroscience, game design, travel, arts and culture etc. I enjoy
              engaging in philosophical and neuroscientific discussions,
              immersing myself in diverse art forms, and taking on creative
              projects.
            </p>
            <p>
              You can gain further insights into my background and interests
              through my <Link href="/blog">written works</Link>,{" "}
              <Link href="/work">projects</Link>, and various social media
              profiles.
            </p>
          </div>
        </div>
      </section>

      {/* <section className="my-10">
        <h1 className="font-semibold">Journal</h1>
        <div className="py-2">
          {posts.slice(0, 4).map((post) => {
            const {
              metadata: { title, publishedAt, summary, tags },
            } = post
            return (
              <Link href={"/blog/" + post.slug} passHref key={post.slug}>
                <div className="lg:py-2 py-3 flex align-top md:grid-cols-3 grid-cols-3 justify-between border-b border-muted transition duration-200 ease-in-out md:hover:text-primary-foreground relative">
                  <div className="col-span-2">
                    <h3>{title}</h3>
                  </div>
                  <div className="my-auto col-span-1 text-primary-foreground text-end">
                    <p>{publishedAt}</p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
        <div className="py-2 flex underline transition duration-200 ease-in-out hover:text-stone-400">
          <Link href="/blog">All post</Link>
        </div>
      </section> */}

      <section className="mx-auto my-10 lg:leading-6 leading-relaxed text-primary-foreground">
        <div className="text-primary-foreground flex flex-row space-x-4">
          <LinkItem href="https://github.com/kelvinyelyen">GitHub</LinkItem>
          <LinkItem href="https://x.com/kelvinyelyen">
            X
          </LinkItem>
          <LinkItem href="https://www.linkedin.com/in/kelvinyelyen/">
            Linkedin
          </LinkItem>
          <LinkItem href="https://kelvinyelyen.substack.com">
            Substack
          </LinkItem>
        </div>
      </section>
    </main>
  )
}

function LinkItem({ href, children }) {
  return (
    <li className="flex justify-end transition duration-200 ease-in-out hover:text-stone-200">
      <Link href={href} target="_blank" className="flex items-center underline">
        {children}
      </Link>
    </li>
  )
}
