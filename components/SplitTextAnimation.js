import { useRef, useEffect } from "react"
import { Power3 } from "gsap"
import gsap from "gsap/dist/gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import dynamic from "next/dynamic"

const SplitTextAnimation = (props) => {
  const textRef = useRef(null)

  const splitText = async () => {
    const Splitting = await dynamic(() => import("splitting"))
    if (textRef.current && typeof Splitting === "function") {
      const results = Splitting({ target: textRef.current, by: "lines" })

      results.forEach((splitResult) => {
        const wrappedLines = splitResult.lines
          .map((wordsArr) => {
            let lineWords = wordsArr
              .map((word, index) => {
                const isLastWord = index === wordsArr.length - 1
                const whitespaceSpan = isLastWord
                  ? ""
                  : '<span class="whitespace"> </span>'
                return `${word.outerHTML}${whitespaceSpan}`
              })
              .join("")
            return `<span class="line"><div class="words">${lineWords}</div></span>`
          })
          .join("")

        splitResult.el.innerHTML = wrappedLines
      })
    }
  }

  useEffect(() => {
    const revealLines = () => {
      const lines = textRef.current?.querySelectorAll(".line .words")
      if (lines) {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: textRef.current,
            toggleActions: "play once",
          },
        })
        tl.set(textRef.current, { autoAlpha: 1 })
        tl.from(lines, 0.8, {
          yPercent: 100,
          ease: Power3.out,
          stagger: 0.15,
          delay: props.delay || 0,
        })
      }
    }

    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)
      splitText()
      revealLines()
    }
  }, [])

  return <div ref={textRef}>{props.children}</div>
}

export default SplitTextAnimation
