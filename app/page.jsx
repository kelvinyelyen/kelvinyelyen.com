import { Link } from "next-view-transitions"

export default function Home() {
  return (
    <main className="container my-12 px-5 sm:px-0">
      <section className="mb-10">
        <h1 className="text-[25px] font-semibold mb-6">Kelvin Yelyen</h1>

        <div className="space-y-5 text-foreground">
          <p>
            I am currently a Faculty Assistant at{" "}
            <a href="https://acity.edu.gh/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-[0.5px]">
              Academic City University
            </a>
            , with research interests at the intersection of artificial intelligence and neuroscience.
            My work explores the bidirectional relationship between biological and artificial systems:
            examining how neural mechanisms can inform more adaptive machine learning architectures,
            and how computational models can deepen our understanding of the brain.
          </p>

          <p>
            Prior to this, I worked as a freelance software engineer, designing and building
            scalable full-stack web systems. I have a background in Computer Science from{" "}
            <a href="https://uds.edu.gh/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-[0.5px]">
              University for Development Studies
            </a>.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <p className="mb-5 text-foreground">Some representative lines of work include:</p>

        <div className="space-y-5 text-foreground">
          <p>
            Investigating how{" "}
            <a href="https://docs.google.com/presentation/d/1AFLK94lhrYCVdoR3AWnjYlY4LEAuBvLxwoQsCaRJ92Y/edit" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-[0.5px]">
              distributed default mode network activity
            </a>{" "}
            can predict social video processing compared to primary visual cortices, using
            linear decoding methods to understand how the brain separates social cognition
            from basic visual processing.
          </p>
        </div>
      </section>

      <section className="mt-4">
        <p className="text-foreground">
          You can explore my{" "}
          <Link href="/work" className="underline underline-offset-2 decoration-[0.5px]">work</Link>,{" "}
          read my{" "}
          <Link href="/blog" className="underline underline-offset-2 decoration-[0.5px]">writing</Link>,{" "}
          or browse my{" "}
          <a href="https://github.com/kelvinyelyen" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-[0.5px]">code</a> on GitHub.
          I also write creatively on{" "}
          <a href="https://kelvinyelyen.substack.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-[0.5px]">Substack</a>.
          I&apos;m also on{" "}
          <a href="https://x.com/kelvinyelyen" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-[0.5px]">X</a> and{" "}
          <a href="https://www.linkedin.com/in/kelvinyelyen/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-[0.5px]">LinkedIn</a>.
        </p>
        <p className="mt-4 text-foreground">
          <a href="mailto:kelvinyelyen@gmail.com" className="underline underline-offset-2 decoration-[0.5px]">kelvinyelyen [at] gmail [dot] com</a>
          <span className="text-muted-foreground"> / </span>
          <a href="https://drive.google.com/drive/folders/1vSpuEMBHVt9m0rQqy02TLqi4-AqmBRk9?usp=sharing" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-[0.5px]">CV</a>
        </p>
      </section>
    </main>
  )
}
