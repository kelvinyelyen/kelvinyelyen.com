import { LinkItem } from "@/components/index"
import { ProjectItem } from "@/components/work/resume-items"
import { getCategoryContent } from "@/lib/content"

export default function Home() {
  const projects = getCategoryContent("resume/projects/research")

  return (
    <main className="container my-8 tracking-tight">
      <section className="mb-8">
        <div className="prose prose-quoteless prose-sm max-w-none leading-6 text-foreground dark:prose-invert">
          <p>
            I am currently a Faculty Assistant at <a href="https://acity.edu.gh/" target="_blank" rel="noopener noreferrer" className="underline decoration-1 underline-offset-2">Academic City University</a>, with research interests at the intersection
            of artificial intelligence and neuroscience. My work and ongoing study explore the bidirectional relationship
            between biological and artificial systems: examining how neural mechanisms can inform more adaptive machine
            learning architectures, and how computational models can be used to deepen our understanding of the brain.
            Prior to this, I worked as a freelance software engineer, designing and building scalable full-stack web systems.
            I have a background in Computer Science from <a href="https://uds.edu.gh/" target="_blank" rel="noopener noreferrer" className="underline decoration-1 underline-offset-2">University for Development Studies</a>.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-6 border-b border-muted/50 pb-2">
          Selected Research
        </h2>
        <div className="space-y-0 text-sm divide-y divide-muted/50">
          {projects.map(({ slug, metadata }) => (
            <ProjectItem
              key={slug}
              title={metadata.title}
              authors={metadata.authors}
              document={metadata.document}
              documentType={metadata.document_type}
              venue={metadata.venue}
            />
          ))}
        </div>
      </section>

      <section className="mt-12 pt-6">
        <nav>
          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-muted-foreground">
            <LinkItem href="https://drive.google.com/drive/folders/1vSpuEMBHVt9m0rQqy02TLqi4-AqmBRk9?usp=sharing">CV</LinkItem>
            <LinkItem href="mailto:kelvinyelyen@gmail.com">Email</LinkItem>
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
