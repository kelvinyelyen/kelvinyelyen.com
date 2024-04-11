import Link from "next/link"

export default function WorkItem({
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
        className="transition duration-200 ease-in-out hover:text-primary-foreground my-4"
      >
        <div className="grid md:grid-cols-3 grid-cols-1 text-sm border-b border-muted py-2 lg:py-2 relative">
          <div className="col-span-2">
            {type === "work" ? (
              <>
                {role},{" "}
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
