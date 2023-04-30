import styles from "@/styles"

const Work = () => {
  return (
    <section className={`${styles.paddings} relative z-10 lg:my-10`}>
      <div className={`${styles.textWidth} mx-auto`}>
        <div className="lg:mt-5 flex justify-between">
          <article className="lg:mx-[280px]">
            <p className="text-[10px] text-stone-500 uppercase">
              (Work with me)
            </p>
            <p className="uppercase md:text-[17px] text-[13px] dark:font-light dark:text-stone-300">
              I&apos;m currently focusing on software engineering and Product
              Design, as well as exploring new areas of technology — AI and
              pursuing my creative interest in design.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Work
