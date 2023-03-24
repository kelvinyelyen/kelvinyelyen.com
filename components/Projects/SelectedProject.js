import { useRef, useState } from "react"
import Link from "next/link"
import gsap from "gsap"

const SelectedProject = ({
  number,
  title,
  imageUrl,
  altText,
  year,
  type,
  url,
}) => {
  const [showImage, setShowImage] = useState(false)
  const imageRef = useRef(null)

  const handleMouseEnter = () => {
    setShowImage(true)
  }

const handleMouseMove = (event) => {
  if (showImage) {
    const image = imageRef.current

    // Calculate the position of the mouse relative to the component
    const rect = event.currentTarget.getBoundingClientRect()
    const mouseX = event.clientX - rect.left
    const mouseY = event.clientY - rect.top

    // Update the position of the image with a parallax effect
    gsap.to(image, {
      x: mouseX - 80,
      y: mouseY - 80,
      duration: 1,
      ease: "power2.out",
    })

    // Disable scrolling
    document.body.style.overflow = "auto"
  }
}



  const handleMouseLeave = () => {
    setShowImage(false)
  }

  return (
    <>
      <Link href={url}>
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:my-10 my-0 text-end dark:text-secondary-white"
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
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
      </Link>

      <hr className="h-px my-4 sm:my-8 bg-gray-300 dark:bg-neutral-500 border-0" />

      {showImage && (
        <img
          ref={imageRef}
          src={imageUrl}
          alt={altText}
          className="absolute w-[400px] h-[200px] object-cover"
        />
      )}
    </>
  )
}

export default SelectedProject
