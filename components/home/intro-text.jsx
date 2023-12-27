import Link from "next/link"

export default function IntroText() {
  return (
    <div className="mx-auto">
      <div className="prose prose-sm prose-stone prose-invert max-w-none lg:leading-6 leading-relaxed">
        <p>
          I&apos;m a software engineer and designer whose passion lies in
          utilizing science and technology to create innovative solutions that
          have a positive impact on the world. I&apos;m constantly seeking to
          break barriers and explore novel approaches to problem-solving. My
          range of interests covers a broad spectrum, spanning from web
          development and AI - computational cognitive science to game design and
          human-computer interaction.
        </p>
        <p>
          Outside of work, I&apos;m deeply passionate about philosophy,
          neuroscience, travel, arts and culture etc. I enjoy engaging in
          philosophical and neuroscientific discussions, immersing myself in
          diverse art forms, and taking on creative projects. I believe that
          these experiences help me develop a well-rounded perspective, which in
          turn informs my work and drives my passion for innovation and
          creativity.
        </p>
        <p>
          You can gain further insights into my background and interests through
          my <Link href="/blog">written works</Link>,{" "}
          <Link href="/projects">projects</Link>, and various social media
          profiles.
        </p>
      </div>
    </div>
  )
}

