import Link from "next/link"
import styles from "@/styles"

const About = () => {
  return (
    <section className={`${styles.paddings} about relative z-10`}>
      <div className={`${styles.aboutWidth} mx-auto mt-[90px] lg:mt-[60px]`}>
        <p className="text-[10px] text-stone-500 lg:mx-[90px]">(ABOUT)</p>
        <p className="uppercase dark:font-light text-[13px] lg:text-base dark:text-stone-300 lg:mx-[90px] text-justify">
          I&apos;m an indie software engineer and designer whose passion lies in
          utilizing science and technology to create innovative solutions that
          have a positive impact on the world.{" "}
          <Link href="/blog/2023-booklist"> &#10042;</Link>
        </p>
      </div>
    </section>
  )
}

export default About
