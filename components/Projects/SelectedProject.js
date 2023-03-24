import { useState } from "react"
import Link from "next/link"

const SelectedProject = ({ number, title, imageUrl, altText, year, type, url }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY })
  }

  return (
    <>
      <Link href={url}>
        <div className="relative" onMouseMove={handleMouseMove}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:my-10 my-0 text-end dark:text-secondary-white">
            <div className="flex">
              <span className="text-stone-500 text-xs sm:text-base mr-1 sm:mr-5">
                <sup>{number}</sup>
              </span>
              <h2 className="font-monument uppercase tracking-tighter text-[25px] sm:text-4xl text-start">
                {title}
              </h2>
            </div>
            <div className="text-[10px]">
              <p>{type}</p>
              <p>/{year}</p>
            </div>
            <div className="text-xs md:text-sm hidden lg:block">&#129126;</div>
          </div>
          <img
            src={imageUrl}
            alt={altText}
            className="absolute left-0 top-0 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              width: "200px",
              height: "200px",
              transform: `translate(${position.x}px, ${position.y}px)`,
            }}
          />
        </div>
      </Link>

      <hr className="h-px my-4 sm:my-8 bg-gray-300 dark:bg-neutral-500 border-0" />
    </>
  )
}

export default SelectedProject
