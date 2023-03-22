import Link from "next/link"
import styles from "@/styles"

const Footer = () => {
  return (
    <footer className={`${styles.xPaddings} py-8 relative`}>
      <div className={`${styles.innerWidth} mx-auto text-[10px]`}>
        <hr className="h-px my-8 bg-gray-300 dark:bg-neutral-600 border-0" />
        <div className="dark:font-light text-stone-500">
          <div className="flex justify-between uppercase">
            <div>
              <p>
                &#169; {new Date().getFullYear()} Designed and Developed by
                Kelvin Yelyen
              </p>
            </div>
            <div className="hidden sm:block">
              <Link href="https://kelvinyelyen.netlify.app/">
                v1 &nbsp; &nbsp;
              </Link>
              <Link href="#">credits &nbsp; &nbsp;</Link>
              <Link href="#">experiments</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
