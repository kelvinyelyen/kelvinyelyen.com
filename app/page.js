import { Link } from "next-view-transitions"

const READING_LIST = [
  {
    title: "Norwegian Wood",
    author: "Haruki Murakami",
  },
  {
    title: "The Way of Zen",
    author: "Alan W. Watts",
  },
]

export default function Home() {
  return (
    <main className="container items-center text-sm my-8 tracking-tight">
      <section>
        <div className="mx-auto">
          <div className="prose prose-sm prose-stone prose-invert max-w-none lg:leading-6 leading-relaxed">
            <p>
              With a background in computer science, I explore research and engineering questions at the intersection of artificial intelligence, neuroscience, and cognitive science. My work focuses on understanding how intelligence emerges in both biological and computational systems, drawing insights from neural mechanisms to design more adaptive machine learning models, while also using computational approaches to deepen our understanding of the brain.{" "}
              <Link
                href="https://drive.google.com/file/d/1a2SroEwfHbUHmwbm68rZu7G272KNySno/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground underline decoration-dotted underline-offset-4 transition duration-200 ease-in-out hover:text-stone-200"
              >
                Full CV
              </Link>
            </p>
            <p>
              Outside of work, I&apos;m interested in philosophy, game design, and the arts, areas where technical thinking meets creative expression.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto my-10">
        <h2 className="text-sm font-medium mb-3 text-muted-foreground">
          Currently Reading
        </h2>
        <ul className="space-y-2">
          {READING_LIST.map((item) => (
            <li>
                <span className="text-muted-foreground">
                  {item.title}
                </span>
                <span className="text-xs text-muted-foreground/80">
                  — {item.author}
                </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto my-10 lg:leading-6 leading-relaxed">
        <ul className="text-muted-foreground flex flex-row space-x-4">
          <LinkItem href="https://github.com/kelvinyelyen">GitHub</LinkItem>
          <LinkItem href="https://x.com/kelvinyelyen">X</LinkItem>
          <LinkItem href="https://www.linkedin.com/in/kelvinyelyen/">
            LinkedIn
          </LinkItem>
          <LinkItem href="https://kelvinyelyen.substack.com">
            Substack
          </LinkItem>
        </ul>
      </section>
    </main>
  )
}

function LinkItem({ href, children }) {
  return (
    <li className="transition duration-200 ease-in-out hover:text-stone-200">
      <Link 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center"
      >
        [{children}]
      </Link>
    </li>
  )
}