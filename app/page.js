import { Link } from "next-view-transitions"
import { getBlogContent } from "@/lib/blog"

export default function Home() {
  const posts = getBlogContent()
  return (
    <main className="container items-center text-sm my-8 tracking-tight">
      <section>
        <div className="mx-auto">
          <div className="prose prose-sm prose-stone prose-invert max-w-none lg:leading-6 leading-relaxed">
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
              projects. I believe that these experiences contribute to my
              development of a well-rounded perspective, informing my work and
              fueling my passion for innovation and creativity.
            </p>
            {/* <p>
              You can gain further insights into my background and interests
              through my <Link href="/blog">written works</Link>,{" "}
              <Link href="/work">projects</Link>, and various social media
              profiles.
            </p> */}
          </div>
        </div>
      </section>

      <section className="my-14">
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
        <div className="py-2">
          <Link href="#" className="underline">
            All post
          </Link>
        </div>
      </section>

      <section className="mx-auto flex flex-col sm:flex-row justify-between my-14 lg:leading-6 leading-relaxed">
        <div className="mb-4">
          <p className="transition duration-200 ease-in-out hover:text-stone-400">
            <Link
              href="blog/book-list"
              target="_blank"
              className="flex align-center items-center"
            >
              Booklist
              <span>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </Link>
          </p>
          <p className="transition duration-200 ease-in-out hover:text-stone-400">
            <Link
              href="#"
              target="_blank"
              className="flex align-center items-center"
            >
              Design
              <span>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </Link>
          </p>
        </div>
        <div className=" mb-4 text-primary-foreground">
          <LinkItem href="mailto:kelvinyelyen@gmail.com">
            kelvinyelyen@gmail.com
          </LinkItem>
          <LinkItem href="https://github.com/kelvinyelyen">GitHub</LinkItem>
          <LinkItem href="https://x.com/kelvinyelyen">X</LinkItem>
          <LinkItem href="https://www.linkedin.com/in/kelvinyelyen/">
            Linkedin
          </LinkItem>
        </div>
      </section>
    </main>
  )
}

function LinkItem({ href, children }) {
  return (
    <li className="flex justify-end transition duration-200 ease-in-out hover:text-stone-400">
      <Link
        href={href}
        target="_blank"
        className="flex align-center items-center"
      >
        {children}
        <span>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </Link>
    </li>
  )
}
