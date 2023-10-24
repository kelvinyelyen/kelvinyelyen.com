import Link from "next/link"
import { useRouter } from "next/router"
import styles from "@/styles"

const Header = () => {
  const router = useRouter()

  const isRouteActive = (path) => router.pathname === path

  return (
    <nav className={`${styles.xPaddings} py-8 relative`}>
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <div className="dark:text-stone-200 text-neutral-800">
          <Link href="/">
            <p className="md:text-[25px] text-[20px] -mt-2">
              kelvin<span className="text-stone-500">yelyen_</span>
            </p>
          </Link>
        </div>
        <ul className="flex gap-5 md:text-[16px] text-[14px] dark:text-stone-200">
          <li className="transition duration-200 ease-in-out hover:text-stone-500">
            <Link
              href="/projects"
              passHref
              className={`nav-link ${isRouteActive("/projects") ? "active" : ""}
            `}
            >
              Projects
            </Link>
          </li>
          <li className="transition duration-200 ease-in-out hover:text-stone-500">
            <Link
              href="/blog"
              passHref
              className={`nav-link ${isRouteActive("/blog") ? "active" : ""}
            `}
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
