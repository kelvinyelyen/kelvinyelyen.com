import Link from "next/link"

const Project = ({ title, url, description }) => {
  return (
    <>
      <Link
        href={url}
        target="_blank"
        className="hover:dark:text-stone-100 hover:text-stone-800 my-4"
      >
        <div className="grid md:grid-cols-2 grid-cols-1 text-[14px] md:text-[16px] lg:my-0 my-4  border-b border-gray-200 dark:border-neutral-800 lg:py-4 pb-4">
          <div className=" dark:text-stone-200">
            <h2>{title}</h2>
          </div>
          <div className="text-stone-500 md:text-end">{description}</div>
        </div>
      </Link>
    </>
  )
}

export default Project
