import { Link } from "next-view-transitions"

export function WorkItem({ company, role, year, website }) {
  return (
    <Link
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      className="group block py-3 lg:py-2 border-b border-muted transition-colors duration-200 ease-in-out"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-4 text-sm">
        <div className="flex-1">
          <span className="font-medium group-hover:text-primary-foreground transition-colors duration-200">
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

export function EducationItem({ institution, degree, year, website }) {
  return (
    <Link
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      className="group block py-3 lg:py-2 border-b border-muted transition-colors duration-200 ease-in-out"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-4 text-sm">
        <div className="flex-1">
          <span className="font-medium group-hover:text-primary-foreground transition-colors duration-200">
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

export function ProjectItem({ title, people, link }) {
  const highlightName = (text, name = "Kelvin Yelyen") => {
    const parts = text.split(new RegExp(`(\\b${name}\\b)`, "gi"))
    return parts.map((part, i) =>
      part.toLowerCase() === name.toLowerCase() ? (
        // using Tailwind utility class
        <span key={i} className="underline">
          {part}
        </span>
      ) : (
        part
      )
    )
  }

  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block py-4 border-b border-muted/50 transition-all duration-200 ease-in-out"
    >
      <div className="space-y-1">
        <h3 className="font-medium group-hover:text-primary-foreground transition-colors duration-200">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80 transition-colors duration-200">
          {highlightName(people)}
        </p>
      </div>
    </Link>
  )
}