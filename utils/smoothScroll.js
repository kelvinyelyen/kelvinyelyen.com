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

    scrollbar.current = SmoothScrollbar.init(el, {
      // renderByPixels: false,
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
  }, [])

  const isDesktop = window.matchMedia("(min-width: 768px)").matches

  if (!isDesktop) {
    return (
      <div {...rest}>
        <div className="container">{children}</div>
      </div>
    )
  }

  return (
    <div
      data-scrollbar
      ref={$content}
      style={{
        overflow: "auto", // enable scrollbar
        "-webkit-overflow-scrolling": "touch", // enable momentum scrolling
        height: "100vh", // set height to full viewport height
      }}
      {...rest}
    >
      <div className="container">{children}</div>
    </div>
  )
}
