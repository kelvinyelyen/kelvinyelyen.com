import { ProjectCard } from "@/components/work/project-card"
import { getCategoryContent } from "@/lib/content"

export const metadata = {
    title: "Engineering",
    description: "Software engineering projects and technical experiments.",
}

export default function Page() {
    const projects = getCategoryContent("resume/projects/engineering")
    projects.sort((a, b) => new Date(b.metadata.publishedAt) - new Date(a.metadata.publishedAt))

    return (
        <section className="container my-12 tracking-tight text-sm">
            <div className="mx-auto space-y-12">
                <div className="mb-12 border-b border-muted/15 pb-4">
                    <h1 className="text-xs uppercase tracking-[0.2em] font-semibold text-muted-foreground mb-1">
                        Engineering
                    </h1>
                    <p className="text-muted-foreground">
                        A collection of software projects, experiments, and technical explorations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projects.map(({ slug, metadata }) => (
                        <ProjectCard
                            key={slug}
                            title={metadata.title}
                            description={metadata.description}
                            link={metadata.link}
                            tech={metadata.tech}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
