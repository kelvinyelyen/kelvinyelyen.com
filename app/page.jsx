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
            My work and ongoing study explores the bidirectional relationship between biological and artificial systems:
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

      <hr className="my-8 border-stone-200 dark:border-stone-800" />

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

      <section className="mt-8 flex flex-col gap-4 text-[15px]">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-muted-foreground">
          <Link href="/work" className="hover:text-foreground transition-colors pb-0.5 border-b border-transparent hover:border-neutral-300 dark:hover:border-neutral-700">Work</Link>
          <Link href="/blog" className="hover:text-foreground transition-colors pb-0.5 border-b border-transparent hover:border-neutral-300 dark:hover:border-neutral-700">Notes</Link>
          <a href="https://github.com/kelvinyelyen" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors pb-0.5 border-b border-transparent hover:border-neutral-300 dark:hover:border-neutral-700">Github</a>
          <a href="https://x.com/kelvinyelyen" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors pb-0.5 border-b border-transparent hover:border-neutral-300 dark:hover:border-neutral-700">X</a>
          <a href="https://www.linkedin.com/in/kelvinyelyen/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors pb-0.5 border-b border-transparent hover:border-neutral-300 dark:hover:border-neutral-700">LinkedIn</a>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-muted-foreground">
          <a href="mailto:kelvinyelyen@gmail.com" className="hover:text-foreground transition-colors pb-0.5 border-b border-transparent hover:border-neutral-300 dark:hover:border-neutral-700">kelvinyelyen [at] gmail [dot] com</a>
          <a href="https://drive.google.com/drive/folders/1vSpuEMBHVt9m0rQqy02TLqi4-AqmBRk9?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors pb-0.5 border-b border-transparent hover:border-neutral-300 dark:hover:border-neutral-700">CV</a>
        </div>
      </section>
    </main>
  )
}
