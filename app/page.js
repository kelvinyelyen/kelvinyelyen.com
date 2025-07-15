import { Link } from "next-view-transitions"

export default function Home() {
  return (
    <main className="container items-center text-sm my-8 tracking-tight">
      <section>
        <div className="mx-auto">
          <div className="prose prose-sm text-foreground-contrast prose-stone prose-invert max-w-none lg:leading-6 leading-relaxed">
            <p>
              I am a software engineer with a background in computer science, currently exploring research and engineering questions at the intersection of artificial intelligence, neuroscience, and cognitive science. My interests center on understanding how intelligence emerges both in biological and computational systems. I'm particularly focused on drawing insights from neural mechanisms to improve AI models, and conversely, using computational approaches to deepen our understanding of the brain.            
            </p>
            <p>
              Outside of work, I am passionate about philosophy, engineering, game design, arts, and culture. I enjoy exploring the interplay between logic and creativity, and how scientific and artistic perspectives can jointly illuminate complex ideas.
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
