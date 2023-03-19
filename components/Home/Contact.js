import Link from "next/link"
import styles from "@/styles"
import { motion } from "framer-motion"
import { staggerContainer } from "@/utils/motion"

const Contact = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.textWidth} mx-auto`}
      >
        <div className="mt-[150px] flex justify-between">
          <article className="dark:text-secondary-white uppercase lg:mx-[200px]">
            <p className="text-[10px] lg:text-[10px] text-stone-500">
              (Work with me)
            </p>

            <p className="dark:font-light sm:text-[15px] text-[13px]">
              I appreciate designing tools that allow us to spend our time doing
              what we love most, whether it&apos;s a Slack bot that automates
              your morning ritual or a tailored backend service to manage your
              workflow by utilizing the required strategies.
               {/* I&apos;m exploring
              new areas of technology eg. Artificial Intelligence and pursuing
              my creative interest in design eg. Motion Design as well as
              seeking new opportunities to help create fluid and humane
              technologies. */}
            </p>

            <br />
          </article>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
