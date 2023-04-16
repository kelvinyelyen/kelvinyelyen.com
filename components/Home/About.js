import styles from "@/styles"

const About = () => {
  return (
    <section className={`${styles.paddings} about relative z-10`}>
      <div
        className={`${styles.innerWidth} mx-auto mt-[120px] lg:mt-[50px]  mb-10`}
      >
        <div className="md:ml-[65%]">
          <p className="text-[10px] text-stone-500 lg:mx-[0px]">(ABOUT)</p>
          <p className="uppercase dark:font-light text-[13px] lg:text-[17px] dark:text-stone-300">
            I&apos;m an indie software engineer and designer whose passion lies
            in utilizing science and technology to create innovative solutions
            that have a positive impact on the world.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
