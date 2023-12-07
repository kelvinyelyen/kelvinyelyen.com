import styles from "@/styles"
import Image from "next/image"
import existential from "@/public/images/existential.jpg"
import books from "@/public/images/books.jpg"
import laptop from "@/public/images/laptop.jpg"
import kerubin from "@/public/images/kerubin.jpg"
import rebel from "@/public/images/rebel.jpg"

const About = () => {
  return (
    <section className={`${styles.paddings} about relative z-10 -mt-10`}>
      <div className={`${styles.innerWidth} mx-auto`}>
        <div className="dark:font-light text-[14px] lg:text-[16px] dark:text-stone-200">
          <p>
            I&apos;m a software engineer and designer whose passion lies in
            utilizing science and technology to create innovative solutions that
            have a positive impact on the world. I&apos;m constantly seeking to
            break barriers and explore novel approaches to problem-solving. I
            have an interest in computational cognitive science and it&apos;s
            potential to drive advancements in AI while contributing to the
            comprehension of human cognition.
          </p>
          {/* <div className="columns-2 sm:columns-3 gap-4 my-8">
            <div className="relative h-40 mb-4">
              <Image
                alt="My name is Japanese"
                src={kerubin}
                fill
                sizes="(max-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover"
              />
            </div>
            <div className="relative h-80 mb-4 sm:mb-0">
              <Image
                alt=""
                src={existential}
                fill
                sizes="(max-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover object-center"
              />
            </div>
            <div className="relative h-40 sm:h-80 sm:mb-4">
              <Image
                alt=""
                src={laptop}
                fill
                sizes="(max-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover object-top sm:object-center"
              />
            </div>
            <div className="relative h-40 mb-4 sm:mb-0">
              <Image
                alt=""
                src={rebel}
                fill
                sizes="(max-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover"
              />
            </div>
            <div className="relative h-40 mb-4">
              <Image
                alt="My name is Japanese"
                src={kerubin}
                fill
                sizes="(max-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover"
              />
            </div>
            <div className="relative h-80">
              <Image
                alt="A few of my favourite books"
                src={books}
                fill
                sizes="(min-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover"
              />
            </div>
          </div> */}
          <br />
          <p>
            Outside of work, I&apos;m deeply passionate about philosophy,
            neuroscience, travel, arts and culture etc. I enjoy engaging in
            philosophical and neuroscientific discussions, immersing myself in
            diverse art forms, and taking on creative projects. I believe that
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
