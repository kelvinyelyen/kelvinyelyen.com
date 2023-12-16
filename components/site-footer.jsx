import Link from "next/link"
import { ModeToggle } from "./mode-toggle"

export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="container my-8">
      <div className="mx-auto text-xs">
        <hr className="h-0.5px my-4 sm:my-8 border-secondary-foreground" />
        <div className="flex justify-between">
          <p className="text-primary-foreground">
            {currentYear} &#169; Kelvin Yelyen
          </p>
          <Link href="/blog/portfolio-refresh">Version 2.0</Link>
        </div>
      </div>
    </footer>
  )
}
