import Link from "next/link"

export default function ProjectItem({ title, url, description }) {
  return (
    <>
      <Link
        href={url}
        target="_blank"
        className="transition duration-200 ease-in-out hover:text-primary-foreground my-4"
      >
        <div className="grid md:grid-cols-3 grid-cols-1 text-sm border-b border-secondary-foreground py-2 lg:py-2 relative">
          <div className="col-span-1">
            <h2>{title}</h2>
          </div>
          <div className="col-span-2 text-primary-foreground md:text-end text-xs ">
            {description}
          </div>
        </div>
      </Link>
    </>
  )
}
