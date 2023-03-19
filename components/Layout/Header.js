import Link from "next/link"
import styles from "@/styles"

const Header = () => {
  return (
    <nav className={`${styles.xPaddings} py-8 relative`}>
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        {/* Show this div on large screens only */}
        <div className="flex-col hidden lg:block">
          <Link href="/">
            <p className="font-monument tracking-tighter text-[40px] lg:text-[90px] -mb-7 -mt-4">
              Kelvin Yelyen
            </p>
            <span className="text-[20px] dark:font-light">
              SOFTWARE ENGINEER & DESIGNER
            </span>
          </Link>
        </div>
        <div className="flex"></div>

        <ul className="flex gap-5 sm:text-[13px] text-[10px]">
          <li>
            <Link href="/projects">PROJECTS</Link>
          </li>
          <li>
            <Link href="/blog">BLOG</Link>
          </li>
        </ul>
      </div>

      {/* Show this div on mobile screens only */}
      <div className="flex flex-col lg:hidden mt-[200px]">
        <h1 className="font-monument text-[40px] tracking-tighter -mb-3">
          Kelvin Yelyen
        </h1>
        <span className="text-[15px]">Software Engineer and Designer</span>
      </div>
    </nav>
  )
}

export default Header
