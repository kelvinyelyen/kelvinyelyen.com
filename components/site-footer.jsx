import Link from "next/link"
import { ModeToggle } from "./mode-toggle"

export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="container my-8 tracking-tight">
      <div className="mx-auto text-xs">
        <hr className="h-0.5px my-4 sm:my-8 border-secondary-foreground" />
        <div className="flex justify-between items-center">
          <p className="text-primary-foreground">
            {currentYear} &#169; Kelvin Yelyen
          </p>
          <div>
            <span class="inline-block bg-neutral-800 text-white text-xs font-normal px-2 py-1 rounded-full">
              v2.2.25
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
