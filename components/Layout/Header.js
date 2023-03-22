import Link from "next/link"
import styles from "@/styles"

const Header = () => {
  return (
    <nav className={`${styles.xPaddings} py-8 relative`}>
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        {/* Show this div on large screens only */}
        <div className="flex-col dark:text-secondary-white">
          <Link href="/">
            <h1 className="font-monument tracking-tighter text-[15px] lg:text-[50px] -mb-2 lg:-mt-4">
              kelvinyelyen
            </h1>
            <p className="text-[15px] lg:block hidden dark:font-light uppercase">
              Software Engineer & Designer
            </p>
          </Link>
        </div>

        <ul className="flex gap-5 sm:text-[13px] text-[10px] dark:text-secondary-white">
          <li>
            <Link href="/projects">PROJECTS</Link>
          </li>
          <li>
            <Link href="/blog">BLOG</Link>
          </li>
        </ul>
      </div>

      {/* Show this div on mobile screens only */}
      {/* <div className="flex flex-col lg:hidden mt-[200px] dark:text-secondary-white">
        <h1 className="font-monument text-[40px] tracking-tighter -mb-1">
          kelvinyelyen
        </h1>
        <p className="text-[10px] uppercase">
          Software Engineer & Designer
        </p>
      </div> */}
    </nav>
  )
}

export default Header
