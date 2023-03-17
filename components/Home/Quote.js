import styles from "@/styles"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "@/utils/motion"

const Quote = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.textWidth} mx-auto`}
      >
        <div className="mt-[150px]">
          <div>
            <motion.p
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="font-normal sm:text-[30px] text-[20px] text-center text-secondary-white dark:text-neutral-600"
            >
              “This is the real secret of life -- to be completely engaged with
              what you are doing in the here and now. And instead of calling it
              work, realize it is play.” <br /> - Alan Watts
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Quote
