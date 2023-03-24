import Link from "next/link"
import { useRouter } from "next/router"
import styles from "@/styles"

const Header = () => {
  const router = useRouter()

  return (
    <nav className={`${styles.xPaddings} py-8 relative`}>
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <div className="dark:text-secondary-white text-neutral-800">
          {/* Conditionally render based on current path */}
          {router.pathname === "/" ? (
            <h1></h1>
          ) : (
            <Link href="/">
              <p className="text-[20px] -mt-1">&#10042; kelvinyelyen</p>
            </Link>
          )}
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
