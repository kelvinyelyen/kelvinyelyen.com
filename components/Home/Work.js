import styles from "@/styles"

const Work = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div className={`${styles.textWidth} mx-auto`}>
        <div className="lg:mt-5 flex justify-between">
          <article className="lg:mx-[200px] prose sm:prose-lg">
            <p className="text-[10px] text-stone-500 uppercase">(Work with me)</p>
            <p className="md:text-[15px] text-[13px] dark:font-light dark:text-secondary-white">
              I&apos;m currently focusing on software engineering and Product
              Design, as well as exploring new areas of technology eg. AI and
              pursuing my creative interest in design. I&apos;m always seeking
              out new opportunities. Outside of work, I have a deep passion for
              travel, the arts, culture, philosophy, neuroscience, and
              industrial design etc.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Work
