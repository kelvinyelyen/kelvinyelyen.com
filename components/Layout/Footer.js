import Link from "next/link"
import styles from "@/styles"

const Footer = () => {
  return (
    <footer className={`${styles.xPaddings} py-8 relative`}>
      <div className={`${styles.innerWidth} mx-auto text-[10px]`}>
        <hr className="h-px my-4 sm:my-8 bg-gray-400 dark:bg-neutral-500 border-0" />
        <div className="dark:font-light text-stone-500">
          <div className="flex justify-between uppercase">
            <div>
              <p>
                &#169; {new Date().getFullYear()} Designed and Developed by
                Kelvin Yelyen
              </p>
            </div>
            <div className="hidden sm:block">
              <ul className="flex gap-5">
                <li>
                  <Link href="https://kelvinyelyen.netlify.app/">v1</Link>
                </li>
                <li>
                  <Link href="#">credits</Link>
                </li>
                <li>
                  <Link href="#">experiments</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
