import Link from "next/link"
import { WorkItem } from "@/components/item"
import workData from "@/data/work.json"

export const metadata = {
  title: "Work",
  description:
    "Creative initiatives, professional experience and educational background.",
}

export default function Page() {
  const { experience, education } = workData

  return (
    <section className="container my-8 text-sm tracking-tight">
      <div className="mx-auto text-foreground-contrast mb-[200px]">
        <div className="mb-12">
          <div className="mb-6">
            <h1 className="font-semibold">
              Experience <sup className="text-primary-foreground"> 01 </sup>
            </h1>
            <p className="text-primary-foreground">Professional journey</p>
          </div>
          <div>
            {experience.map(({ number, ...role }) => (
              <WorkItem key={number} {...role} />
            ))}
          </div>
        </div>

        <div className="mb-12">
          <div className="mb-6">
            <h1 className="font-semibold">
              Education <sup className="text-primary-foreground"> 02 </sup>
            </h1>
            <p className="text-primary-foreground">Academic background</p>
          </div>
          <div>
            {education.map(({ number, ...level }) => (
              <WorkItem key={number} {...level} />
            ))}
          </div>
        </div>
        <Link
          href="https://docs.google.com/document/d/1DSLtMOM3OMOGYvzs17h0UxYYz2QT5OTy6qJjh0yEWZ8/edit?usp=sharing"
          className="underline transition duration-200 ease-in-out hover:text-stone-200"
          blank_target="_blank"
        >
          Full CV
        </Link>
      </div>
    </section>
  )
}
