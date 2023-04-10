import styles from "@/styles"

const Work = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div className={`${styles.textWidth} mx-auto`}>
        <div className="lg:mt-5 flex justify-between">
          <article className="lg:mx-[200px] prose sm:prose-lg">
            <p className="text-[10px] text-stone-500 uppercase">
              (Work with me)
            </p>
            <p className="uppercase md:text-base text-[12px] dark:font-light dark:text-stone-300 text-justify">
              I&apos;m currently focusing on software engineering and Product
              Design, as well as exploring new areas of technology (AI) and
              pursuing my creative interest in design.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Work
