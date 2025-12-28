import { Link } from "next-view-transitions"
import { LinkItem } from "@/components/ui/link-item"
import { WorkItem, EducationItem, ProjectItem } from "@/components/ui/resume-items"
import { getCategoryContent } from "@/lib/content"

export default function Home() {
  const projects = getCategoryContent("resume/projects")
  return (
    <main className="container items-center text-sm my-8 tracking-tight">
      <section>
        <div className="mx-auto">
          <div className="prose-sm max-w-none lg:leading-6 leading-relaxed">
            <p>
              I build computational models at the intersection of artificial intelligence and neuroscience. My work focuses on the bidirectional link between biological and artificial intelligence: translating neural mechanisms into more adaptive machine learning architectures, and using artificial intelligence to model and deepen our understanding of the brain.
            </p>
          </div>
        </div>
      </section>

    <section>
      <div className="divide-y divide-muted/20">
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
            
      <section className="mx-auto my-10 lg:leading-6 leading-relaxed">
        <ul className="text-muted-foreground flex flex-row space-x-4">
          <LinkItem href="https://drive.google.com/file/d/1PfEDoALLGI4S99Meb0zAqh_GMxPMFB7s/view?usp=sharing">Read CV</LinkItem>
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
