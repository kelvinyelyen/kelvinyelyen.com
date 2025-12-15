"use client"

import { Link } from "next-view-transitions"
import { usePathname } from "next/navigation"

export function Footer() {
  const pathname = usePathname()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="container tracking-tight" style={{ viewTransitionName: 'footer' }}>
      <div className="mx-auto text-xs">
        <hr className="my-4 border-t border-muted" />
        <div className="flex justify-between items-center my-8 gap-4">
          <nav aria-label="Footer navigation">
            <ul className="flex gap-4 text-muted-foreground">
              <li>
                <Link
                  href="/rss.xml"
                  className="transition duration-200 ease-in-out hover:text-stone-200"
                >
                  [rss]
                </Link>
              </li>
              <li>
                {pathname === "/books" ? (
                  <span className="transition duration-200 ease-in-out text-stone-200 cursor-default">
                    [books]
                  </span>
                ) : (
                  <Link
                    href="/books"
                    className="transition duration-200 ease-in-out hover:text-stone-200"
                  >
                    [books]
                  </Link>
                )}
              </li>
            </ul>

          </nav>
          <p className="text-muted-foreground whitespace-nowrap">
            © {currentYear} Kelvin Yelyen
          </p>
        </div>
      </div>
    </footer>
  )
}