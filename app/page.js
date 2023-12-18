import IntroText from "@/components/home/intro-text"
import Categories from "@/components/home/categories"
import ContactLinks from "@/components/home/contact-links"

export default function Home() {
  return (
    <main className="container items-center text-sm text-foreground my-10 tracking-tight">
      <section className="relative z-10">
        <IntroText />
      </section>
      <section className="mx-auto flex flex-col sm:flex-row justify-between my-16 lg:leading-6 leading-relaxed">
        <Categories />
        <ContactLinks />
      </section>
    </main>
  )
}
