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
          <article>
            <p className="text-right text-[20px] lg:text-[40px]">
              WORK WITH ME
            </p>

            <p className="dark:font-light sm:text-[16px] text-[15px]">
              I appreciate designing tools that allow us to spend our time doing
              what we love most, whether it&apos;s a Slack bot that automates
              your morning ritual or a tailored backend service to manage your
              workflow by utilizing the required strategies. I&apos;m exploring
              new areas of technology eg. Artificial Intelligence and pursuing
              my creative interest in design eg. Motion Design as well as
              seeking new opportunities to help create fluid and humane
              technologies.
            </p>

            <br />
            <p className="dark:font-light sm:text-[16px] text-[15px]">
              <span className="font-bold">Full-stack Engineering</span>{" "}
              <sup> 01 </sup>/ <br className="lg:hidden" />
              <span className="font-bold">Product Design</span> (UI/UX Design)
              <sup> 02 </sup>/ <br className="lg:hidden" />
              <span className="font-bold">Graphic Design</span> <sup> 03 </sup>
            </p>
          </article>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
