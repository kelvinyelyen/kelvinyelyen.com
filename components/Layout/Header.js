import Link from "next/link"
import styles from "@/styles"

const Header = () => {
  return (
    <nav className={`${styles.xPaddings} py-8 relative`}>
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <div className="dark:text-secondary-white">
          <Link href="/">
            <h1 className="font-monument tracking-tighter lg:block hidden lg:text-5xl lg:mb-1">
              kelvinyelyen
            </h1>
            <p className="text-sm lg:block hidden dark:font-light uppercase">
              Software Engineer &amp; Designer
            </p>
            <h1 className="block lg:hidden text-xs">&#10042;</h1>
          </Link>
        </div>
        <ul className="flex gap-5 text-xs dark:text-secondary-white uppercase">
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
