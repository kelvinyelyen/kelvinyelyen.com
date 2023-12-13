"use client"

import { useEffect, useState } from "react"
import { gsap } from "gsap"

const Preloader = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        const preloader = document.querySelector(".preloader")
        preloader.classList.add("preloader-done")
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
      <div className="preloader__inner">
        <h1 className="preloader__text lg:text-xl text-base text-secondary-white">
          <span className="text-primary-foreground font-normal">Kelvin Yelyen </span>
          <span className="font-extralight">Portfolio</span>
        </h1>
      </div>
    </div>
  )
}

export default Preloader
