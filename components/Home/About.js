import Link from "next/link"
import styles from "@/styles"

const About = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div className={`${styles.aboutWidth} mx-auto mt-[100px] lg:mt-[80px]`}>
        <p className="text-[10px] text-stone-500 lg:mx-[90px]">(ABOUT)</p>
        <p
          data-scroll
          className="uppercase dark:font-light text-[12px] lg:text-[15px] dark:text-secondary-white lg:mx-[90px]"
        >
          I&apos;m a software engineer and designer who&apos;s passion lies in
          utilizing science and technology to create innovative solutions that
          have a positive impact on the world. I believe that the human
          experience, like the nautilus shell, is an ever-growing spiral that
          allows us to build on our past experiences in order to meet and learn
          from the demands of the present moment.
          <Link href="/blog/2023-booklist"> Currently reading &#10042;</Link>
        </p>
      </div>
    </section>
  )
}

export default About
