import { LinkItem } from "@/components/index"
import { ProjectItem } from "@/components/work/resume-items"
import { getCategoryContent } from "@/lib/content"

export default function Home() {
  const projects = getCategoryContent("resume/projects/research")

  return (
    <main className="container my-12 tracking-tight">
      <section className="mb-12">
        <div className="prose-sm max-w-none leading-relaxed text-foreground">
          <p>
            I am currently a Faculty Assistant at Academic City University, with research interests at the intersection
            of artificial intelligence and neuroscience. My work and ongoing study explore the bidirectional relationship
            between biological and artificial systems: translating neural mechanisms into more adaptive machine learning
            architectures, and using computational models to deepen our understanding of the brain.
            Prior to this, I worked as a freelance software engineer, designing and building scalable full-stack web systems.
            I have a background in Computer Science from University for Development Studies.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-8 border-b border-muted/50 pb-2">
          Selected Research
        </h2>
        <div className="space-y-0 text-sm divide-y divide-muted/50">
          {projects.map(({ slug, metadata }) => (
            <ProjectItem
              key={slug}
              title={metadata.title}
              authors={metadata.authors}
              document={metadata.document}
              code={metadata.code}
              venue={metadata.venue}
              date={metadata.date}
            />
          ))}
        </div>
      </section>

      <section className="mt-20 pt-8">
        <nav>
          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-[13px] font-medium text-muted-foreground">
            <LinkItem href="https://drive.google.com/file/d/1WrAu-gMjW0jJ0qo_oDWs7Ebimy7Mee1T/view?usp=sharing">CV</LinkItem>
            <LinkItem href="https://github.com/kelvinyelyen">GitHub</LinkItem>
            <LinkItem href="https://x.com/kelvinyelyen">X</LinkItem>
            <LinkItem href="https://www.linkedin.com/in/kelvinyelyen/">LinkedIn</LinkItem>
            <LinkItem href="https://kelvinyelyen.substack.com">Substack</LinkItem>
          </ul>
        </nav>
      </section>
    </main>
  )
}
