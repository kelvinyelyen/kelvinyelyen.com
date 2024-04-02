import Link from "next/link"

export default function Home() {
  return (
    <main className="container items-center text-sm my-5 tracking-tight">
      <section>
        <div className="mx-auto">
          <div className="prose prose-sm prose-stone prose-invert max-w-none lg:leading-6 leading-relaxed">
            <p>
              I&apos;m a software engineer and designer whose passion lies in
              utilizing science and technology to create innovative solutions.
              I&apos;m constantly seeking to break barriers and explore novel
              approaches to problem-solving. My range of interests covers a
              broad spectrum, spanning from web application development and AI
              (computational cognitive science) to game design and
              human-computer interaction.
            </p>
            <p>
              Outside of work, I&apos;m deeply passionate about philosophy,
              neuroscience, travel, arts and culture etc. I enjoy engaging in
              philosophical and neuroscientific discussions, immersing myself in
              diverse art forms, and taking on creative projects. I believe that
              these experiences help me develop a well-rounded perspective,
              which in turn informs my work and drives my passion for innovation
              and creativity.
            </p>
            <p>
              You can gain further insights into my background and interests
              through my <Link href="/blog">written works</Link>,{" "}
              <Link href="/projects">projects</Link>, and various social media
              profiles.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto flex flex-col sm:flex-row justify-between my-14 lg:leading-6 leading-relaxed">
        <div className="uppercase mb-4">
          <p>
            Design
            <sup className="text-primary-foreground"> 01 </sup>
          </p>
          <p>
           Engineering
            <sup className="text-primary-foreground"> 02 </sup>
          </p>
        </div>
        <div className="text-end">
          <div className="text-primary-foreground cursor-pointer">
            <ul>
              <li className="transition duration-200 ease-in-out hover:text-stone-400">
                <Link href="mailto:kelvinyelyen@gmail.com" target="_blank">
                  kelvinyelyen@gmail.com
                </Link>
              </li>
              <li className="transition duration-200 ease-in-out hover:text-stone-400">
                <Link href="https://github.com/kelvinyelyen" target="_blank">
                  GitHub &#129125;
                </Link>
              </li>
              <li className="transition duration-200 ease-in-out hover:text-stone-400">
                <Link href="https://twitter.com/kelvinyelyen" target="_blank">
                  X (Twitter) &#129125;
                </Link>
              </li>
              <li className="transition duration-200 ease-in-out hover:text-stone-400">
                <Link
                  href="https://www.linkedin.com/in/kelvinyelyen/"
                  target="_blank"
                  className="transition duration-200 ease-in-out hover:text-stone-400"
                >
                  Linkedin &#129125;
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
