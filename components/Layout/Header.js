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
          <Link href="/">
            <p className="sm:text-[20px] text-[15] -mt-2">
              kelvin,yelyen&#10042;
            </p>
          </Link>
        </div>
        <ul className="flex gap-5 md:text-[13px] text-[10px] dark:text-stone-300 uppercase">
          <li>
            <Link
              href="/projects"
              className={`nav-link ${
                router.pathname === "/projects" ? "active" : ""
              }`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className={`nav-link ${
                router.pathname === "/blog" ? "active" : ""
              }`}
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
