import { Link } from "next-view-transitions"
import { cn } from "@/lib/utils"

export function WorkItem({ company, role, year, website, className }) {
  return (
    <Link
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group block py-3 lg:py-2 border-b border-border/40 transition-colors duration-200 ease-in-out",
        className
      )}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-4 text-sm">
        <div className="flex-1">
          <span className="md:group-hover:text-muted-foreground dark:md:group-hover:text-primary-foreground transition-colors duration-200">
            {role}
          </span>
          <span className="text-muted-foreground">, {company}</span>
        </div>
        <time className="text-muted-foreground text-xs md:text-sm whitespace-nowrap">
          {year}
        </time>
      </div>
    </Link>
  )
}

export function EducationItem({ institution, degree, year, website, className }) {
  return (
    <Link
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group block py-3 lg:py-2 border-b border-border/40 transition-colors duration-200 ease-in-out",
        className
      )}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-4 text-sm">
        <div className="flex-1">
          <span className="md:group-hover:text-muted-foreground dark:md:group-hover:text-primary-foreground transition-colors duration-200">
            {degree}
          </span>
          <span className="text-muted-foreground">, {institution}</span>
        </div>
        <time className="text-muted-foreground text-xs md:text-sm whitespace-nowrap">
          {year}
        </time>
      </div>
    </Link>
  )
}

export function ProjectItem({ title, authors, document, venue, className }) {
  const highlightName = (text, name = "Kelvin Yelyen") => {
    const parts = text.split(new RegExp(`(\\b${name}\\b)`, "gi"))
    return parts.map((part, i) =>
      part.toLowerCase() === name.toLowerCase() ? (
        // using Tailwind utility class
        <span key={i} className="font-semibold">
          {part}
        </span>
      ) : (
        part
      )
    )
  }

  return (
    <div className={cn(
      "group block py-3 lg:py-2 border-b border-border/40 space-y-1",
      className
    )}>
      <Link
        href={document}
        target="_blank"
        rel="noopener noreferrer"

      >
        <p className="underline">
          {title}
        </p>
      </Link>
      <p className="text-sm">
        {highlightName(authors)}
      </p>
      <p className="text-sm text-muted-foreground">
        {venue}
      </p>
    </div>

  )
}
