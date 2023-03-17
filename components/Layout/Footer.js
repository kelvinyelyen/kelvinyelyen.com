import Link from "next/link"
import styles from "@/styles"
import { motion } from "framer-motion"
import { staggerContainer } from "../../utils/motion"

const Footer = () => {
  return (
    <footer className={`${styles.paddings} relative z-10 mt-[150px]`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto`}
      >
        <div className="dark:font-light sm:text-[16px] text-[15px]">
          <div className="flex justify-between">
            <div>
              <p>
                &#169; {new Date().getFullYear()} Designed and Developed by
                Kelvin Yelyen
              </p>
            </div>
            <div className="text-right">
              {/* <Link
                href="https://kelvinyelyen.github.io/portfolio/"
                target="_blank"
              >
                v1 &nbsp; &nbsp; &nbsp;
              </Link>
              <Link href="#">credits &nbsp; &nbsp; &nbsp;</Link>
              <Link
                href="#"
                className="text-secondary-white dark:text-neutral-600"
              >
                experiments &nbsp; &nbsp; &nbsp;
              </Link> */}
              <ul className="flex gap-5">
                <li className="my-2">
                  <Link href="https://github.com/kelvinyelyen" target="_blank">
                    GitHub
                  </Link>
                </li>
                <li className="my-2">
                  <Link
                    href="https://www.behance.net/kelvinyelyen"
                    target="_blank"
                  >
                    Behance
                  </Link>
                </li>
                <li className="my-2">
                  <Link href="https://twitter.com/kelvinyelyen" target="_blank">
                    Twitter
                  </Link>
                </li>
                <li className="my-2">
                  <Link
                    href="https://www.linkedin.com/in/kelvinyelyen/"
                    target="_blank"
                  >
                    Linkedin
                  </Link>
                </li>
                <li className="my-2">
                  <Link
                    href="https://www.instagram.com/kelvinyelyen/"
                    target="_blank"
                  >
                    Instagram
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
