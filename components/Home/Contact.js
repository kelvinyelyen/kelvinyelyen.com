import styles from "@/styles"

const Contact = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div className={`${styles.textWidth} mx-auto`}>
        <div className="mt-10 lg:mt-10 flex justify-between">
          <article className="uppercase lg:mx-[200px] prose sm:prose-lg">
            <p className="text-[10px] text-stone-500">(Work with me)</p>
            <p className="sm:text-[15px] text-[12px] dark:font-light dark:text-secondary-white">
              I appreciate designing tools that allow us to spend our time doing
              what we love most, whether it&apos;s a Slack bot that automates
              your morning ritual or a tailored backend service to manage your
              workflow by utilizing the required strategies.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact
