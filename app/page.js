import { Link } from "next-view-transitions"

export default function Home() {
  return (
    <main className="container items-center text-sm my-8 tracking-tight">
      <section>
        <div className="mx-auto">
          <div className="prose prose-sm text-foreground-contrast prose-stone prose-invert max-w-none lg:leading-6 leading-relaxed">
            <p>
              I am a software engineer with a background in computer science, currently exploring ideas at the intersection of computer science, artificial intelligence and neuroscience. I am particularly interested in how intelligence emerges, biologically and computationally and how this understanding might inform the development of more adaptive and human-aligned technologies.
            </p>
            <p>
              Outside of this, I am passionate about philosophy, engineering, game design, arts, and culture. I enjoy exploring the connections between art and logic, and between science and storytelling.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto my-10 lg:leading-6 leading-relaxed">
        <div className="text-primary-foreground flex flex-row space-x-4">
          <LinkItem href="https://github.com/kelvinyelyen">[GitHub]</LinkItem>
          <LinkItem href="https://x.com/kelvinyelyen">[X]</LinkItem>
          <LinkItem href="https://www.linkedin.com/in/kelvinyelyen/">
            [Linkedin]
          </LinkItem>
          <LinkItem href="https://kelvinyelyen.substack.com">
            [Substack]
          </LinkItem>
        </div>
      </section>
    </main>
  )
}

function LinkItem({ href, children }) {
  return (
    <ul>
      <li className="flex justify-end transition duration-200 ease-in-out hover:text-stone-200">
        <Link href={href} target="_blank" className="flex items-center">
          {children}
        </Link>
      </li>
    </ul>
  )
}
