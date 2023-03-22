import { useRef, useEffect } from "react"
import gsap, { Power3 } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import Splitting from "splitting"

const SplitTextAnimation = (props) => {
  const textRef = useRef(null)

  useEffect(() => {
    const splitText = () => {
      if (typeof document !== "undefined") {
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

    gsap.registerPlugin(ScrollTrigger)
    const revealLines = () => {
      if (typeof document !== "undefined" && textRef.current) {
        // check if element exists before attempting to animate it
        const lines = textRef.current.querySelectorAll(".line .words")
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
          delay: props.delay || 0, // Use the passed delay or default to 0
        })
      }
    }

    splitText()
    revealLines()
  }, [])

  return <div ref={textRef}>{props.children}</div>
}

export default SplitTextAnimation
