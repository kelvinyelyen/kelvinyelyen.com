import styles from "@/styles"

const About = () => {
  return (
    <section className={`${styles.paddings} about relative z-10 -mt-10`}>
      <div className={`${styles.innerWidth} mx-auto`}>
        <p className="text-[14px] text-stone-500 lg:mx-0">[ ABOUT ]</p>
        <div className="dark:font-light text-[14px] lg:text-[16px] dark:text-stone-300">
          <p>
            I believe that the human experience, like the nautilus shell, is an
            ever-growing spiral that allows us to build on our past experiences
            in order to meet and learn from the demands of the present moment.
          </p>
          <br />
          <p>
            I&apos;m a software engineer and designer whose passion lies in
            utilizing science and technology to create innovative solutions that
            have a positive impact on the world. I&apos;m constantly seeking to
            break barriers and explore novel approaches to problem-solving.
            Ultimately, my goal is to shape the future through the advancements
            of science and technology.
          </p>
          <br />
          <p>
            Outside of work, I have a deep passion for travel, arts and culture,
            philosophy, neuroscience etc. I enjoy engaging in discussions on
            philosophy and neuroscience, immersing myself in different forms of
            art and culture, and taking on creative projects. I believe that
            these experiences help me develop a well-rounded perspective, which
            in turn informs my work and drives my passion for innovation and
            creativity.
          </p>
          <br />
          <p>
            You can gain further insights into my background and interests
            through my written works, projects, and various social media
            profiles.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
