import {
  Intro,
  About,
  Inversion,
  Selected,
  Work,
  Contact,
} from "@/components/Home"
import Meta from "@/components/Meta"

export default function Home() {
  return (
    <div>
      <Meta />
      <div className="w-screen">
        <Intro />
        <About />
        <Inversion />
      </div>
      <Selected />
      <Work />
      <Contact />
    </div>
  )
}
