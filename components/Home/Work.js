import styles from "@/styles"

const Work = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div className={`${styles.textWidth} mx-auto`}>
        <div className="lg:mt-5 flex justify-between">
          <article className="uppercase lg:mx-[200px] prose sm:prose-lg">
            <p className="text-[10px] text-stone-500">(Work with me)</p>
            <p className="sm:text-[15px] text-[12px] dark:font-light dark:text-secondary-white">
              I'm currently focusing on software engineering and Product Design
              and exploring new areas of technology ie. AI and pursuing my
              creative interest in design. I&apos;m always seeking new
              opportunities.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Work
