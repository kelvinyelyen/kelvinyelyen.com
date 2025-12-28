"use client"

import { Link } from "next-view-transitions"
import { usePathname } from "next/navigation"

export function Footer() {
  const pathname = usePathname()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="container tracking-tight" style={{ viewTransitionName: 'footer' }}>
      <div className="mx-auto text-xs">
        <hr className="my-8 border-t border-muted/20" />
        <div className="flex justify-between items-center mb-12 gap-4">
          <nav aria-label="Footer navigation">
            <ul className="flex gap-5 text-muted-foreground/60">
              <li>
                <Link
                  href="/rss.xml"
                  className="transition-colors duration-200 hover:text-foreground"
                >
                  [rss]
                </Link>
              </li>
              <li>
                {pathname === "/books" ? (
                  <span className="text-foreground cursor-default">
                    [library]
                  </span>
                ) : (
                  <Link
                    href="/books"
                    className="transition-colors duration-200 hover:text-foreground"
                  >
                    [library]
                  </Link>
                )}
              </li>
            </ul>
          </nav>
          
          <p className="text-muted-foreground/50 tabular-nums">
            © {currentYear} Kelvin Yelyen
          </p>
        </div>
      </div>
    </footer>
  )
}
