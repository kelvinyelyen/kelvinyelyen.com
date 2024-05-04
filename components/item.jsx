import Link from "next/link"

export function ProjectItem({ title, url, description, role }) {
  return (
    <>
      <Link
        href={url}
        target="_blank"
        className="transition duration-200 ease-in-out md:hover:text-primary-foreground my-4"
      >
        <div className="grid md:grid-cols-3 grid-cols-1 text-sm border-b border-muted py-2 lg:py-2 relative">
          <div className="col-span-1">
            <h3>
              {title}&nbsp;&nbsp;
              {role && (
                <span className="inline-block bg-neutral-800 text-white text-xs font-normal px-2 py-[0.5px] rounded-full">
                  {role}
                </span>
              )}
            </h3>
          </div>
          <div className="col-span-2 text-primary-foreground text-xs md:text-end">
            {description}
          </div>
        </div>
      </Link>
    </>
  )
}

export function WorkItem({
  company,
  institution,
  role,
  degree,
  field,
  year,
  url,
  type,
}) {
  return (
    <>
      <Link
        href={url}
        target="_blank"
        className="transition duration-200 ease-in-out md:hover:text-primary-foreground my-4"
      >
        <div className="grid md:grid-cols-3 grid-cols-1 text-sm border-b border-muted py-3 lg:py-2 relative">
          <div className="col-span-2">
            {type === "work" ? (
              <>
                {role},&nbsp; 
                <span className="text-primary-foreground">{company}</span>
              </>
            ) : (
              <>
                {degree} in {field},{" "}
                <span className="text-primary-foreground">{institution}</span>
              </>
            )}
          </div>
          <div className="col-span-1 text-primary-foreground text-xs md:text-end">
            {year}
          </div>
        </div>
      </Link>
    </>
  )
}
