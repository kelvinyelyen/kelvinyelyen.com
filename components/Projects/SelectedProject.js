import { useRef, useState, useEffect } from "react"
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
    if (!isMobileDevice()) {
      setShowImage(true)

      // Define the animation timeline
      const timeline = gsap.timeline()
      timeline.to(imageRef.current, { scale: 1, autoAlpha: 1 })
      timeline.to(
        imageRef.current,
        {
          duration: 5,
          ease: "power2.out",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        },
        "-=0.3"
      )
    }
  }

  const handleMouseMove = (event) => {
    if (!isMobileDevice() && showImage) {
      const image = imageRef.current

      // Calculate the position of the mouse relative to the component
      const rect = event.currentTarget.getBoundingClientRect()
      const mouseX = event.clientX - rect.left
      const mouseY = event.clientY - rect.top

      // Update the position of the image with a parallax effect
      gsap.to(image, {
        x: mouseX - 50,
        y: mouseY - 25,
        duration: 1,
        ease: "power2.out",
      })

      // Disable scrolling
      document.body.style.overflow = "auto"
    }
  }

  const isMobileDevice = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  }

  const handleMouseLeave = () => {
    if (!isMobileDevice()) {
      setShowImage(false)
      gsap.to(imageRef.current, { scale: 0.1, autoAlpha: 0 })
    }
  }

  useEffect(() => {
    if (isMobileDevice()) {
      setShowImage(false)
      gsap.to(imageRef.current, { scale: 0.1, autoAlpha: 0 })
    }
  }, [])

  return (
    <>
      <Link
        href={url}
        target="_blank"
        className="hover:dark:text-stone-600 hover:text-stone-600 my-10"
      >
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:my-0 my-5 text-end border-b-2 border-gray-400 dark:border-neutral-500 lg:py-10 pb-5"
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
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
            <div>
              {showImage && (
                <img
                  ref={imageRef}
                  src={imageUrl}
                  alt={altText}
                  className="absolute w-[400px] h-[400px] object-cover"
                />
              )}
            </div>
          </div>
          <div className="text-xs md:text-sm hidden lg:block">&#129126;</div>
        </div>
      </Link>
    </>
  )
}

export default SelectedProject
