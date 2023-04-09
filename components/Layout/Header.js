import Link from "next/link"
import { useRouter } from "next/router"
import gsap from "gsap"
import styles from "@/styles"

const Header = () => {
  const router = useRouter()

  const handleHover = (event) => {
    gsap.from(event.target, {
      y: event.target.offsetHeight,
      opacity: 0,
      duration: 0.3,
      ease: "power2.out",
    })
  }

  return (
    <nav className={`${styles.xPaddings} py-8 relative`}>
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <div className="dark:text-secondary-white text-neutral-800">
          {router.pathname === "/" ? (
            <h1></h1>
          ) : (
            <Link href="/">
              <p className="text-[20px] -mt-2">&#10042; kelvinyelyen</p>
            </Link>
          )}
        </div>
        <ul className="flex gap-5 text-xs dark:text-secondary-white uppercase">
          <li>
            <Link href="/projects" onMouseEnter={handleHover}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/blog" onMouseEnter={handleHover}>
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
