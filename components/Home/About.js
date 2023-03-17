import Link from "next/link"
import styles from "@/styles"

const About = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div className={`${styles.aboutWidth} mx-auto mt-[150px] lg:mt-[50px]`}>
        <p className="dark:font-light text-[15px] lg:text-[16px]">
          I&apos;m a software engineer and designer who&apos;s passion lies in
          utilizing science and technology to create innovative solutions that
          have a positive impact on the world. I believe that the human
          experience, like the nautilus shell, is an ever-growing spiral that
          allows us to build on our past experiences in order to meet and learn
          from the demands of the present moment. Working towards shaping the
          future through technology and design. Outside of work, I&apos;m
          passionate about Travel, Arts and Culture, Philosophy, Neuroscience
          and Industrial Design.
          <Link href="/booklist">Currently reading &#10042;</Link>
        </p>
      </div>
    </section>
  )
}

export default About
