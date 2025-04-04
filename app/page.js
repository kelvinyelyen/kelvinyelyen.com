import { Link } from "next-view-transitions"

export default function Home() {
  return (
    <main className="container items-center text-sm my-8 tracking-tight">
      <section>
        <div className="mx-auto">
          <div className="prose prose-sm text-foreground-contrast prose-stone prose-invert max-w-none lg:leading-6 leading-relaxed">
            <p>
              I&apos;m dedicated to exploring novel approaches to
              problem-solving, particularly at the intersection of cognitive
              science and artificial intelligence. My research interests focus
              on leveraging insights from these fields to enhance intelligent
              systems and deepen our understanding of human cognition.
            </p>
            <p>
              Outside of work, I&apos;m passionate about philosophy,
              neuroscience, game design, travel, arts, and culture. I enjoy
              engaging in philosophical and neuroscientific discussions,
              immersing myself in diverse art forms, and pursuing creative
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
