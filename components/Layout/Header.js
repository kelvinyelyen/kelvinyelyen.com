import Link from "next/link"
import styles from "@/styles"

const Header = () => {
  return (
    <nav className={`${styles.xPaddings} py-8 relative`}>
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <div className="dark:text-secondary-white text-neutral-800">
          <Link href="/">
            <h1 className="block lg:hidden text-20 -mt-1">&#10042;</h1>
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
