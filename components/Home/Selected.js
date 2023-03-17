import Link from "next/link"
import styles from "@/styles"

const Project = ({ number, title, imageUrl, altText, year, type }) => {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex">
          <span className="text-secondary-white text-[20px] mr-1">
            <sup>{number}</sup>
          </span>
          <h2 className="font-monument tracking-tighter text-[30px] lg:text-[60px]">
            {title}
          </h2>
        </div>
        <div className="text-end text-[16px]">
          <p>({year})</p>
          <p>{type}</p>
        </div>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-zinc-800" />
    </>
  )
}

const Selected = () => {
  const projects = [
    {
      number: "/01",
      title: "AugurEHRs",
      imageUrl: "/images/project1.jpg",
      altText: "Project 1",
      year: "2020",
      type: "UX CASE STUDY",
    },
    {
      number: "/02",
      title: "Atlas",
      imageUrl: "/images/project2.jpg",
      altText: "Project 2",
      year: "2023",
      type: "DESIGN & DEVELOPMENT",
    },
    {
      number: "/03",
      title: "Muzeyi",
      imageUrl: "/images/project3.jpg",
      altText: "Project 3",
      year: "2023 ",
      type: "DESIGN & DEVELOPMENT",
    },
  ]

  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div className={`${styles.innerWidth} mx-auto mt-[50px]`}>
        <p className="text-[20px] text-secondary-white dark:text-neutral-600">
          SELECTED WORK
        </p>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-zinc-800" />

        {projects.map((project) => (
          <Project key={project.number} {...project} />
        ))}

        <Link href="/projects">
          <p className="text-right dark:font-light text-[16px]">
            More work (5) &rarr;
          </p>
        </Link>
      </div>
    </section>
  )
}

export default Selected
