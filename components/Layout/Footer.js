import Link from "next/link"
import styles from "@/styles"
import { motion } from "framer-motion"
import { staggerContainer } from "../../utils/motion"

const Footer = () => {
  return (
    <footer className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto`}
      >
        <hr className="h-px my-8 bg-gray-300 dark:bg-neutral-600 border-0" />
        <div className="dark:font-light sm:text-[13px] text-[10px] text-stone-500">
          <div className="flex justify-between uppercase">
            <div>
              <p>
                &#169; {new Date().getFullYear()} Designed and Developed by
                Kelvin Yelyen
              </p>
            </div>
            <div className="lg:block hidden">
              <Link href="https://kelvinyelyen.netlify.app/">
                v1 &nbsp; &nbsp;
              </Link>
              <Link href="#">credits &nbsp; &nbsp;</Link>
              <Link href="#">experiments</Link>
            </div>
            <div className="text-right">
              <ul className="flex gap-5">
                <li>
                  <Link href="https://github.com/kelvinyelyen" target="_blank">
                    GitHub &#x1F865;
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com/kelvinyelyen" target="_blank">
                    Twitter &#x1F865;
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/kelvinyelyen/"
                    target="_blank"
                  >
                    Linkedin &#x1F865;
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer
