import Link from "next/link"
import { useState } from "react"

const Project = ({ title, url, description }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
      <Link href={url} target="_blank" className="my-4">
        <div
          className="grid md:grid-cols-2 grid-cols-1 text-[14px] md:text-[16px] border-b border-gray-200 dark:border-neutral-800 py-2 lg:py-3 relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="font-medium">
            <h2>{title}</h2>
          </div>
          <div className="text-stone-500 font-thin md:text-end">
            {description}
            <div
              className={`absolute top-full left-0 bg-white text-black p-2 rounded shadow-md transition-opacity ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              {description}
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default Project
