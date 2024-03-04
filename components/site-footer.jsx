import Link from "next/link"
import { ModeToggle } from "./mode-toggle"

export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="container my-8 tracking-tight">
      <div className="mx-auto text-xs">
        <hr className="h-0.5px my-4 sm:my-8 border-secondary-foreground" />
        <div className="flex justify-between">
          <p className="text-primary-foreground">
            {currentYear} &#169; Kelvin Yelyen
          </p>
          <div>
            <ModeToggle />
            <p>version 2.0</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
