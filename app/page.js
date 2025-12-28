import { Link } from "next-view-transitions"
import { LinkItem } from "@/components/ui/link-item"

export default function Home() {
  return (
    <main className="container items-center text-sm my-8 tracking-tight">
      <section>
        <div className="mx-auto">
          <div className="prose-sm max-w-none lg:leading-6 leading-relaxed">
            <p>
               I build computational models at the intersection of artificial intelligence and neuroscience. My work focuses on reverse-engineering biological intelligence to understand how it emerges in neural systems and to design more adaptive machine learning architectures—drawing on neural decoding, brain-inspired design, and computational models of intelligence.{" "}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto my-10 lg:leading-6 leading-relaxed">
        <ul className="text-muted-foreground flex flex-row space-x-4">
          <LinkItem href="https://drive.google.com/file/d/1PfEDoALLGI4S99Meb0zAqh_GMxPMFB7s/view?usp=sharing">CV</LinkItem>
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
