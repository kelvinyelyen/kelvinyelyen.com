import Link from "next/link"

import contentConfig from "@/config/contentConfig"

export default function Home() {
  const { text, images } = contentConfig
  return (
    <main className="container items-center text-sm text-foreground my-5">
      <section className="relative z-10">
        <div className="mx-auto">
          <div className="prose prose-quoteless prose-stone prose-sm max-w-none dark:prose-invert leading-6">
            <p>{text.intro}</p>
            <p>{text.interests}</p>
            <div
              dangerouslySetInnerHTML={{
                __html: text.furtherInsights,
              }}
            />
          </div>
        </div>
      </section>
      <section className="mx-auto flex flex-col sm:flex-row justify-between my-10 leading-6">
        <div className="uppercase mb-4">
          <p>
            Programming<sup className="text-primary-foreground"> 01 </sup>
          </p>
          <p>
            Product Design (UX Design)
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
