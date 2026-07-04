"use client"
import React, { useState } from "react"
import Link from "next/link"

const EXISTENTIAL_QUOTES = [
  "“I opened myself to the gentle indifference of the universe.” — Albert Camus",
  "“The absurd is born of this confrontation between the human need and the unreasonable silence of the world.” — Albert Camus",
  "“One must imagine Sisyphus happy.” — Albert Camus",
  "“The meaning of life is just to be alive. It is so plain and so obvious and so simple.” — Alan Watts",
  "“Trying to define yourself is like trying to bite your own teeth.” — Alan Watts",
  "“You are an aperture through which the universe is looking at and exploring itself.” — Alan Watts",
  "“The only way to make sense out of change is to plunge into it, move with it, and join the dance.” — Alan Watts",
  "“In the depth of winter, I finally learned that within me there lay an invincible summer.” — Albert Camus"
]

export default function NotFound() {
  const [quoteIndex, setQuoteIndex] = useState(-1)
  const [isVisible, setIsVisible] = useState(false)

  const handleSearch = () => {
    setIsVisible(false)
    setTimeout(() => {
      // Pick a random quote
      setQuoteIndex((prev) => {
        let next = Math.floor(Math.random() * EXISTENTIAL_QUOTES.length)
        if (next === prev) {
          next = (next + 1) % EXISTENTIAL_QUOTES.length
        }
        return next
      })
      setIsVisible(true)
    }, 200)
  }

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center select-none bg-white text-stone-900 z-50">
      
      {/* Existential visual indicator */}
      <div className="text-[12px] font-mono uppercase tracking-[0.25em] text-stone-400 mb-8">
        ERROR 404 / Void
      </div>

      {/* Stark Minimal Existential Button */}
      <button
        onClick={handleSearch}
        className="px-6 py-2.5 border border-stone-800 rounded font-mono text-[11px] uppercase tracking-widest text-stone-800 hover:bg-stone-900 hover:text-white transition-all duration-300 shadow-sm focus:outline-none focus:ring-0 focus:ring-transparent focus-visible:outline-none cursor-pointer"
      >
        Search for meaning
      </button>

      {/* Subtly Faded Quote Output */}
      <div className="h-24 flex items-center justify-center mt-10">
        <p
          className={`font-serif italic text-stone-500 max-w-sm text-center text-[15px] leading-relaxed transition-all duration-700 ease-out ${
            isVisible && quoteIndex >= 0 ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-2 pointer-events-none"
          }`}
        >
          {quoteIndex >= 0 ? EXISTENTIAL_QUOTES[quoteIndex] : ""}
        </p>
      </div>

      {/* Quiet Back Link */}
      <Link
        href="/"
        className="mt-16 font-mono text-[11px] uppercase tracking-widest text-stone-400 hover:text-stone-700 transition-colors no-underline"
      >
        Return to safety
      </Link>

    </div>
  )
}
