import { Link } from "next-view-transitions"

export default function Home() {
  return (
    <main className="container items-center text-sm my-8 tracking-tight">
      <section>
        <div className="mx-auto">
          <div className="prose prose-sm text-foreground-contrast prose-stone prose-invert max-w-none lg:leading-6 leading-relaxed">
            <p>
              I&apos;m ddedicated to exploring novel approaches to
              problem-solving at the intersection of computational neuroscience,
              artificial intelligence, and computer science. My interests lie in
              understanding how intelligence emerges, biologically and
              computationally, and in leveraging these insights to develop more
              adaptive and human-aligned intelligent systems.
            </p>
            <p>
              Outside of work, I&apos;m passionate about philosophy,
              neuroscience, game design, travel, arts, and culture. I enjoy
              engaging in philosophical and neuroscientific discussions,
              immersing myself in diverse artistic expressions, and pursuing
              creative projects that challenge conventional thinking.
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
