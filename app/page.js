import Link from "next/link"

export default function Home() {
  return (
    <main className="container items-center text-sm my-5 tracking-tight">
      <section>
        <div className="mx-auto">
          <div className="prose prose-sm prose-white prose-invert max-w-none lg:leading-6 leading-relaxed">
            <p>
              Software engineer and designer constantly seeking to break
              barriers and explore novel approaches to problem-solving. My range
              of interests covers a broad spectrum, spanning web application
              development and computational cognitive science to game design and
              human-computer interaction.
            </p>
            <p>
              Outside of work, I&apos;m deeply passionate about philosophy,
              neuroscience, travel, arts and culture etc. I enjoy engaging in
              philosophical and neuroscientific discussions, immersing myself in
              diverse art forms, and taking on creative projects. I believe that
              these experiences contribute to my development of a well-rounded
              perspective, informing my work and fueling my passion for
              innovation and creativity.
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
              <li className="flex justify-end transition duration-200 ease-in-out hover:text-stone-400">
                <Link
                  href="https://github.com/kelvinyelyen"
                  target="_blank"
                  className="flex align-center items-center"
                >
                  GitHub
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

              <li className="flex justify-end transition duration-200 ease-in-out hover:text-stone-400">
                <Link
                  href="https://twitter.com/kelvinyelyen"
                  target="_blank"
                  className="flex align-center items-center"
                >
                  X (Twitter)
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
              <li className="flex justify-end transition duration-200 ease-in-out hover:text-stone-400">
                <Link
                  href="https://www.linkedin.com/in/kelvinyelyen/"
                  target="_blank"
                  className="flex align-center items-center"
                >
                  Linkedin
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
              <li className="flex justify-end transition duration-200 ease-in-out hover:text-stone-400">
                <Link
                  href="https://www.behance.net/kelvinyelyen"
                  target="_blank"
                  className="flex align-center items-center"
                >
                  Behance
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
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
