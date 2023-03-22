import Link from "next/link"
import styles from "@/styles"

const Header = () => {
  return (
    <nav className={`${styles.xPaddings} py-8 relative`}>
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
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
    </nav>
  )
}

export default Header
