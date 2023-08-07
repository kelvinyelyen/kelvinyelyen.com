import styles from "@/styles"

const About = () => {
  return (
    <section className={`${styles.paddings} about relative z-10`}>
      <div
        className={`${styles.innerWidth} mx-auto mt-[90px] lg:mt-[70px] lg:mb-0 mb-10`}
      >
        <div className="md:ml-[65%]">
          <p className="text-[10px] text-stone-500 lg:mx-[0px]">[ ABOUT ]</p>
          <p className=" dark:font-light text-[13px] lg:text-[15px] dark:text-stone-300">
            Software engineer and designer passionate about utilizing science
            and technology to create innovative solutions that have a positive
            impact on the world. Ultimately, my goal is to shape the future
            through the advancements of science and technology.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
