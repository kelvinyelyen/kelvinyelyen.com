import Link from "next/link"

const Project = ({ title, url, description }) => {
  return (
    <>
      <Link
        href={url}
        target="_blank"
        className="transition duration-200 ease-in-out hover:text-stone-500 my-4"
      >
        <div className="grid md:grid-cols-2 grid-cols-1 text-[14px] md:text-[16px] border-b border-gray-200 dark:border-neutral-800 py-2 lg:py-3 relative">
          <div className="font-medium">
            <h2>{title}</h2>
          </div>
          <div className="text-stone-500 font-thin md:text-end">
            {description}
          </div>
        </div>
      </Link>
    </>
  )
}

export default Project
