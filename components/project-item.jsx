import Link from "next/link"

export default function ProjectItem({ title, url, description, role }) {
  return (
    <>
      <Link
        href={url}
        target="_blank"
        className="transition duration-200 ease-in-out hover:text-primary-foreground my-4"
      >
        <div className="grid md:grid-cols-3 grid-cols-1 text-sm border-b border-muted py-2 lg:py-2 relative">
          <div className="col-span-1">
            <h3>
              {title}{" "}
              <span class="inline-block bg-neutral-800 text-white text-xs font-normal px-2 rounded-full">
                {role}
              </span>
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
