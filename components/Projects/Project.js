import Link from "next/link"

const Project = ({ number, title, year, type, url, description }) => {
  return (
    <>
      <Link
        href={url}
        target="_blank"
        className="hover:dark:text-stone-700 hover:text-stone-500 my-10"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:my-0 my-5 text-end border-b border-gray-400 dark:border-neutral-500 lg:py-10 pb-5">
          <div className="flex">
            <span className="text-stone-500 text-xs sm:text-base mr-1 sm:mr-5">
              <sup>{number}</sup>
            </span>
            <h2 className="font-monument uppercase tracking-tighter text-[25px] sm:text-4xl dark:text-stone-300">
              {title}
            </h2>
          </div>
          <div className="md:text-[12px] text-[10px]  dark:text-stone-300">
            <p>{type}</p>
            <p>/{year}</p>
          </div>
          <div className="text-xs md:text-sm hidden lg:block">&#129126;</div>
        </div>
      </Link>
    </>
  )
}

export default Project
