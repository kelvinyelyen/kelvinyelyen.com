import Link from "next/link"
import styles from "@/styles"

const Project = ({ number, title, imageUrl, altText, year, type, url}) => {
  return (
    <>
      <Link href="">
        <div className="grid grid-cols-3 gap-20 text-end dark:text-secondary-white">
          <div className="flex">
            <span className="text-stone-500 text-[13px] sm:text-[15px] mr-5">
              <sup>{number}</sup>
            </span>
            <h2 className="font-monument uppercase tracking-tighter text-[30px] lg:text-[40px] ">
              {title}
            </h2>
          </div>
          <div className="text-[10px] sm:text-[13px]">
            <p>({year})</p>
            <p>{type}</p>
          </div>
          <div className="">&#x1F866;</div>
        </div>
      </Link>

      <hr className="h-px my-8 bg-gray-300 dark:bg-neutral-600 border-0" />
    </>
  )
}

const Selected = () => {
  const projects = [
    {
      number: "/01",
      title: "Augur",
      year: "2023",
      type: "CASE STUDY",
      url: "https://atlasweatherfocus.vercel.app/",
      imageUrl: "/images/project1 .jpg",
      altText: "Project 1",
    },
    {
      number: "/02",
      title: "Atlas",
      year: "2023",
      type: "DESIGN & DEVELOPMENT",
      url: "https://atlasweatherfocus.vercel.app/",
      imageUrl: "/images/project2.jpg",
      altText: "Project 2",
    },
    {
      number: "/03",
      title: "Muzeyi",
      year: "2023",
      type: "DESIGN & DEVELOPMENT",
      url: "https://atlasweatherfocus.vercel.app/",
      imageUrl: "/images/project3.jpg",
      altText: "Project 3",
    },
    {
      number: "/04",
      title: "Typecast",
      year: "2023",
      type: "DEVELOPMENT",
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
        <hr className="h-px my-8 bg-gray-300 dark:bg-neutral-600 border-0" />

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
