import {  Intro, About, Inversion, Selected, Work, Contact } from "@/components/Home"
import Meta from "@/components/Meta"

export default function Home() {
  return (
    <div className="">
      <Meta />
      <Intro/>
      <About />
      <Inversion />
      <Selected />
      <Work />
      <Contact />
    </div>
  )
}
