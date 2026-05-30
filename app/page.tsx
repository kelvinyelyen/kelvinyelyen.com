import { Link } from "next-view-transitions"
import { SubpageNav } from "@/components/layout"

export default function Home() {
  const socialLink = "hover:text-foreground transition-colors pb-0.5 border-b border-transparent hover:border-neutral-300"
  return (
    <main className="container my-12 px-5 sm:px-0">
      <SubpageNav />

      <section className="mt-10">
        <div className="space-y-5 text-foreground">
          <p>
            I am currently a Faculty Assistant at{" "}
            <a href="https://acity.edu.gh/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-[0.5px]">
              Academic City University
            </a>
            , with research interests at the intersection of artificial intelligence and neuroscience.
            My research and ongoing study explore the bidirectional relationship between biological and artificial systems:
            examining how neural mechanisms can inform more adaptive machine learning architectures,
            and how computational models can deepen our understanding of the brain.
          </p>

          <p>
            Prior to this, I worked as a freelance software engineer, designing and building
            scalable full-stack web systems, with a background in Computer Science from the{" "}
            <a href="https://uds.edu.gh/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-[0.5px]">
              University for Development Studies
            </a>.
          </p>
        </div>
      </section>

      <hr className="my-8 border-stone-200" />

      <section>
        <p className="mb-5 text-foreground">Some representative lines of work include:</p>

        <ul className="list-disc list-outside space-y-3 text-foreground pl-5">
          <li>
            Examining whether{" "}
            <a href="https://docs.google.com/presentation/d/1AFLK94lhrYCVdoR3AWnjYlY4LEAuBvLxwoQsCaRJ92Y/edit" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-[0.5px]">
              default mode network activity
            </a>{" "}
            can distinguish social from non-social video stimuli more accurately than
            early visual areas (V1–V2), using linear decoding of BOLD signals.
          </li>
          <li>
            An{" "}
            <a href="https://ncd-lab.vercel.app" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-[0.5px]">
              interactive lab
            </a>{" "}
            exploring neural dynamics from first principles, from single-neuron biophysics to population-level activity.
          </li>
        </ul>
      </section>

      <section className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[15px] text-muted-foreground">

  <a

    href="https://github.com/kelvinyelyen"

    target="_blank"

    rel="noopener noreferrer"

    aria-label="GitHub profile"

    className={socialLink}

  >

    GitHub

  </a>

  <a

    href="https://x.com/kelvinyelyen"

    target="_blank"

    rel="noopener noreferrer"

    aria-label="X (Twitter) profile"

    className={socialLink}

  >

    X

  </a>

  <a

    href="https://www.linkedin.com/in/kelvinyelyen/"

    target="_blank"

    rel="noopener noreferrer"

    aria-label="LinkedIn profile"

    className={socialLink}

  >

    LinkedIn

  </a>

  <Link

    href="/books"

    aria-label="Reading page"

    className={socialLink}

  >

    Reading

  </Link>

  <a

    href="https://drive.google.com/drive/folders/1vSpuEMBHVt9m0rQqy02TLqi4-AqmBRk9?usp=sharing"

    target="_blank"

    rel="noopener noreferrer"

    aria-label="Curriculum Vitae"

    className={socialLink}

  >

    CV

  </a>

  <a

    href="mailto:kelvinyelyen@gmail.com"

    aria-label="Send email to Kelvin Yelyen"

    className={socialLink}

  >

    kelvinyelyen [at] gmail [dot] com

  </a>

</section>
    </main>
  )
}
