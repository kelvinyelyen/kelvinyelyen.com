import { Link } from "next-view-transitions"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

export function ProjectCard({ title, description, link, tech, className }) {
    return (
        <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
                "group block h-full p-6 border border-muted/40 bg-background hover:border-primary/20 hover:bg-muted/5 transition-all duration-300 ease-out",
                className
            )}
        >
            <div className="flex flex-col h-full justify-between gap-4">
                <div>
                    <div className="flex items-start justify-between gap-2 mb-3">
                        <h3 className="font-medium text-base group-hover:text-foreground/90 transition-colors">
                            {title}
                        </h3>
                        <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {description}
                    </p>
                </div>

                {tech && (
                    <div className="flex flex-wrap gap-2 mt-auto pt-4">
                        {tech.map((t) => (
                            <span key={t} className="text-[10px] uppercase tracking-wider text-muted-foreground/60 border border-muted/50 px-2 py-0.5 rounded-full">
                                {t}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </Link>
    )
}
