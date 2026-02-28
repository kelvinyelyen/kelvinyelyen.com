import { Link } from "next-view-transitions"

export default function Home() {
  return (
    <main className="container my-12 px-5 sm:px-0">
      <section>
        <h1 className="text-[22px] sm:text-[25px] font-semibold mb-6">Kelvin Yelyen</h1>

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

      <hr className="border-stone-200 my-8" />

      <section>
        <p className="mb-5 text-foreground">Some representative lines of work include:</p>

        <div className="space-y-5 text-foreground">
          <p>
            Examining whether{" "}
            <a href="https://docs.google.com/presentation/d/1AFLK94lhrYCVdoR3AWnjYlY4LEAuBvLxwoQsCaRJ92Y/edit" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-[0.5px]">
              default mode network activity
            </a>{" "}
            can distinguish social from non-social video stimuli more accurately than
            early visual areas (V1–V2), using linear decoding of BOLD signals.
          </p>
        </div>
      </section>

      <section className="mt-4 space-y-4">
        <p className="text-foreground flex flex-wrap gap-x-3 gap-y-1">
          <Link href="/work" className="underline underline-offset-2 decoration-[0.5px]">Work</Link>
          <span className="text-muted-foreground">·</span>
          <Link href="/blog" className="underline underline-offset-2 decoration-[0.5px]">Notes</Link>
          <span className="text-muted-foreground">·</span>
          <a href="https://github.com/kelvinyelyen" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-[0.5px]">GitHub</a>
          <span className="text-muted-foreground">·</span>
          <a href="https://x.com/kelvinyelyen" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-[0.5px]">X</a>
          <span className="text-muted-foreground">·</span>
          <a href="https://www.linkedin.com/in/kelvinyelyen/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-[0.5px]">LinkedIn</a>
        </p>
        <p className="text-foreground">
          <a href="mailto:kelvinyelyen@gmail.com" className="underline underline-offset-2 decoration-[0.5px]">kelvinyelyen [at] gmail [dot] com</a>
          <span className="text-muted-foreground"> / </span>
          <a href="https://drive.google.com/drive/folders/1vSpuEMBHVt9m0rQqy02TLqi4-AqmBRk9?usp=sharing" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-[0.5px]">CV</a>
        </p>
      </section>
    </main>
  )
}
