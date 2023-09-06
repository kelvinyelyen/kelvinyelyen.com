import styles from "@/styles"
import Image from "next/image"
import existential from "@/public/images/existential.jpg"
import books from "@/public/images/books.jpg"
import laptop from "@/public/images/laptop.jpg"
import kerubin from "@/public/images/kerubin.JPG"
import rebel from "@/public/images/rebel.JPG"

const About = () => {
  return (
    <section className={`${styles.paddings} about relative z-10 -mt-10`}>
      <div className={`${styles.innerWidth} mx-auto`}>
        <p className="text-[14px] text-stone-500 lg:mx-0">[ ABOUT ]</p>
        <div className="dark:font-light text-[14px] lg:text-[16px] dark:text-stone-200">
          <p>
            I&apos;m a software engineer and designer whose passion lies in
            utilizing science and technology to create innovative solutions that
            have a positive impact on the world. I&apos;m constantly seeking to
            break barriers and explore novel approaches to problem-solving.
            Ultimately, my goal is to shape the future through the advancements
            of science and technology. Curently exploring AI and
            Neurotechnology.
          </p>
          <div className="columns-2 sm:columns-3 gap-4 my-8">
            <div className="relative h-40 mb-4">
              <Image
                alt="Me speaking on stage at React Summit about the future of Next.js"
                src={kerubin}
                fill
                sizes="(max-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover"
              />
            </div>
            <div className="relative h-80 mb-4 sm:mb-0">
              <Image
                alt="Me, Lydia, and Delba filming the Next.js Conf keynote"
                src={existential}
                fill
                sizes="(max-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover object-center"
              />
            </div>
            <div className="relative h-40 sm:h-80 sm:mb-4">
              <Image
                alt="Me standing on stage at Reactathon delivering the keynote"
                src={laptop}
                fill
                sizes="(max-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover object-top sm:object-center"
              />
            </div>
            <div className="relative h-40 mb-4 sm:mb-0">
              <Image
                alt="Me standing on stage at SmashingConf giving a talk about my optimism for the web"
                src={rebel}
                fill
                sizes="(max-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover"
              />
            </div>
            <div className="relative h-40 mb-4">
              <Image
                alt="Me and Guillermo Rauch on stage for Vercel Ship, answering questions from the Next.js community"
                src={kerubin}
                fill
                sizes="(max-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover"
              />
            </div>
            <div className="relative h-80">
              <Image
                alt="My badge on top of a pile of badges from a Vercel meetup we held"
                src={books}
                fill
                sizes="(min-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover"
              />
            </div>
          </div>
          <br />
          <p>
            Outside of work, I&apos;m deeply passionate about travel, arts,
            culture, philosophy, and neuroscience. Engaging in philosophical and
            neuroscience discussions, immersing myself in diverse art forms, and
            taking on creative projects. I believe that these experiences help
            me develop a well-rounded perspective, which in turn informs my work
            and drives my passion for innovation and creativity.
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
