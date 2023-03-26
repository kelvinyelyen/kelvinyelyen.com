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

    if (window.innerWidth > 768) {
      // only execute if viewport width is greater than 768px (adjust as needed)
      scrollbar.current = SmoothScrollbar.init(el, {
        damping: 0.04,
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

      return () => {
        if (scrollbar.current) {
          scrollbar.current.destroy()
          scrollbar.current = null
        }
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
