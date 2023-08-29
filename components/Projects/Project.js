import Link from "next/link"

const Project = ({ title, url, description }) => {
  return (
    <>
      <Link
        href={url}
        target="_blank"
        className="hover:dark:text-stone-100 hover:text-stone-800 my-4"
      >
        <div className="grid grid-cols-2 text-[13px] md:text-[16px] lg:my-0 my-4 text-end border-b border-gray-200 dark:border-neutral-800 lg:py-4 pb-4">
          <div className="flex">
            <h2>{title}</h2>
          </div>
          <div className="text-stone-500">{description}</div>
        </div>
      </Link>
      
    </>
  )
}

export default Project
