import Link from "next/link"

export function WorkItem({ company, role, year, website }) {
  return (
    <>
      <Link
        href={website}
        target="_blank"
        className="transition duration-200 ease-in-out md:hover:text-primary-foreground my-4"
      >
        <div className="grid md:grid-cols-3 grid-cols-1 text-sm border-b border-muted py-3 lg:py-2 relative">
          <div className="col-span-2">
            {role},&nbsp;
            <span className="text-primary-foreground">{company}</span>
          </div>
          <div className="col-span-1 text-primary-foreground text-xs md:text-end">
            {year}
          </div>
        </div>
      </Link>
    </>
  )
}


export function EducationItem({ institution, degree, year, website }) {
  return (
    <>
      <Link
        href={website}
        target="_blank"
        className="transition duration-200 ease-in-out md:hover:text-primary-foreground my-4"
      >
        <div className="grid md:grid-cols-3 grid-cols-1 text-sm border-b border-muted py-3 lg:py-2 relative">
          <div className="col-span-2">
            {degree},&nbsp;
            <span className="text-primary-foreground">{institution}</span>
          </div>
          <div className="col-span-1 text-primary-foreground text-xs md:text-end">
            {year}
          </div>
        </div>
      </Link>
    </>
  )
}