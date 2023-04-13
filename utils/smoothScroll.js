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
      damping: 0.1,
      delegateTo: document,
      plugins: {
        disableScroll: true, // add this option to prevent the default scrollbar from showing
      },
    })

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

  return (
    <div
      data-scrollbar
      ref={$content}
      style={{
        overflow: "auto",
        WebkitOverflowScrolling: "touch",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
      {...rest}
    >
      <div className="container">{children}</div>
    </div>
  )
}
