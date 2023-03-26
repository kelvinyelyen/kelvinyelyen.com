import { useRef, useEffect } from "react"
import SmoothScrollbar from "smooth-scrollbar"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"

export default function Layout({ children, ...rest }) {
  const $content = useRef()
  const scrollbar = useRef()

 useEffect(() => {
   gsap.registerPlugin(ScrollTrigger)

   const el = $content.current

   const isMobile = window.innerWidth < 768 // check if device width is less than 768px

   scrollbar.current = SmoothScrollbar.init(el, {
     damping: isMobile ? 1 : 0.04, // set damping to 1 for mobile devices, 0.04 for desktop devices
     delegateTo: document,
   })

   scrollbar.current.setPosition(0, 0)
   scrollbar.current.track.xAxis.element.remove()

   ScrollTrigger.scrollerProxy(el, {
     scrollTop(value) {
       if (arguments.length) {
         scrollbar.current.scrollTop = value
       }
       return scrollbar.current.scrollTop
     },
   })

   scrollbar.current.addListener(ScrollTrigger.update)

   if (isMobile) {
     // disable scrollbars for mobile devices
     document.body.style.overflow = "hidden !important"
     el.style.overflow = "scroll !important"
   }

   return () => {
     if (scrollbar.current) {
       scrollbar.current.destroy()
       scrollbar.current = null
     }
     if (isMobile) {
       // re-enable scrollbars for mobile devices when component unmounts
       document.body.style.overflow = ""
     }
   }
 }, [])


  return (
    <div
      data-scrollbar
      ref={$content}
      className="desktop-only" // add a class for desktop devices
      {...rest}
    >
      <div className="container">{children}</div>
    </div>
  )
}
