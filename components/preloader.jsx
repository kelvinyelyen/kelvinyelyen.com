"use client"
import { useEffect } from "react"
import { gsap } from "gsap"

export function Preloader() {
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        const preloader = document.querySelector(".preloader")
        if (preloader) {
          preloader.classList.add("preloader-done")
        }
      },
    })

    tl.to(".preloader__text", {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    })
      .to(".preloader__text", {
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
        delay: 1,
      })
      .to(".preloader", {
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
        delay: -0.5,
      })
  }, [])

  return (
    <div className="preloader bg-background">
      <div className="bg"></div>
      <div className="preloader__inner flex items-center">
        <h1 className="text-xl font-extralight">
          <span className="font-normal preloader__text">Kelvin</span> Yelyen
        </h1>
      </div>
    </div>
  )
}
