import styles from "@/styles"
import Inversion from "@/utils/Inversion"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={`${styles.xPaddings} py-8 relative`}>
      <div
        className={`${styles.innerWidth} mx-auto text-[11px] md:text-[13px]`}
      >
        <hr className="h-px my-4 sm:my-8 bg-gray-200 dark:bg-neutral-800 border-0" />
        <div className="dark:font-light text-stone-500">
          <div className="flex justify-between">
            <div>
              <p>{currentYear} &#169; Kelvin Yelyen, Version 2.0</p>
            </div>
            <div>
              <ul className="flex gap-5">
                <li>
                  <Inversion />
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
