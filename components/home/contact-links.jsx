import Link from "next/link"

export default function ContactLinks() {
  return (
    <div className="text-end">
      <div className="text-primary-foreground cursor-pointer">
        <ul>
          <li className="transition duration-200 ease-in-out hover:text-stone-400">
            <Link href="mailto:kelvinyelyen@gmail.com" target="_blank">
              kelvinyelyen@gmail.com
            </Link>
          </li>
          <li className="transition duration-200 ease-in-out hover:text-stone-400">
            <Link href="https://github.com/kelvinyelyen" target="_blank">
              GitHub &#129125;
            </Link>
          </li>
          <li className="transition duration-200 ease-in-out hover:text-stone-400">
            <Link href="https://twitter.com/kelvinyelyen" target="_blank">
              X (Twitter) &#129125;
            </Link>
          </li>
          <li className="transition duration-200 ease-in-out hover:text-stone-400">
            <Link
              href="https://www.linkedin.com/in/kelvinyelyen/"
              target="_blank"
              className="transition duration-200 ease-in-out hover:text-stone-400"
            >
              Linkedin &#129125;
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
