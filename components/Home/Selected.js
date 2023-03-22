import Link from "next/link"
import Image from "next/image"
import styles from "@/styles"

const Project = ({ number, title, imageUrl, altText, year, type, url }) => {
  return (
    <>
      <Link href={url}>
        <div className="grid grid-cols-3 sm:grid-cols-3  text-end dark:text-secondary-white">
          <div className="flex">
            <span className="text-stone-500 text-xs sm:text-base mr-1 sm:mr-5">
              <sup>{number}</sup>
            </span>
            <h2 className="font-monument uppercase tracking-tighter text-base sm:text-4xl">
              {title}
            </h2>
          </div>
          <div className="text-[10px]">
            <p>{type}</p>
            <p>/{year}</p>
          </div>
          <div className="flex justify-end">&#x1F866;</div>
        </div>
      </Link>

      <hr className="h-px my-4 sm:my-8 bg-gray-300 dark:bg-neutral-300 border-0" />
    </>
  )
}

const Selected = () => {
  const projects = [
    {
      number: "/01",
      title: "Augur.Ehrs",
      year: "2023",
      type: "CASE STUDY",
      url: "https://atlasweatherfocus.vercel.app/",
      imageUrl: "/pro.jpg",
      altText: "Project 1",
    },
    {
      number: "/02",
      title: "Atlas",
      year: "2023",
      type: "DESIGN/DEV",
      url: "https://atlasweatherfocus.vercel.app/",
      imageUrl: "/images/project2.jpg",
      altText: "Project 2",
    },
    {
      number: "/03",
      title: "Muzeyi",
      year: "2023",
      type: "DESIGN/DEV",
      url: "https://atlasweatherfocus.vercel.app/",
      imageUrl: "/images/project3.jpg",
      altText: "Project 3",
    },
    {
      number: "/04",
      title: "Typecast",
      year: "2023",
      type: "DEV",
      url: "https://atlasweatherfocus.vercel.app/",
      imageUrl: "/images/project4.jpg",
      altText: "Project 4",
    },
  ]

  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div className={`${styles.projectWidth} mx-auto mt-[50px]`}>
        <p className="text-[15px] text-secondary-white dark:text-neutral-600">
          SELECTED WORK
        </p>
        <hr className="h-px my-8 bg-gray-300 dark:bg-neutral-300 border-0" />

        {projects.map((project) => (
          <Project key={project.number} {...project} />
        ))}

        <Link href="/projects">
          <p className="text-right dark:font-light text-[13px] text-stone-500">
            MORE WORK (5) &#x1F866;
          </p>
        </Link>
      </div>
    </section>
  )
}

export default Selected
