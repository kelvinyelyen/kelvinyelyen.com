"use client"

import { Link } from "next-view-transitions"
import { usePathname } from "next/navigation"

const navItems = {
  "/": { name: "about" },
  "/work": { name: "work" },
  "/blog": { name: "notes" },
}

export function Nav() {
  const pathname = usePathname()

  return (
    <nav
      className="container py-8 relative tracking-tight"
      style={{ viewTransitionName: "navbar" }}
    >
      <div className="mx-auto flex justify-between items-center gap-8">
        {pathname === "/" ? (
          <span className="text-[17px] cursor-default">
            kelvin<span className="text-muted-foreground">yelyen</span>
          </span>
        ) : (
          <Link href="/">
            <span className="text-[17px]">
              kelvin<span className="text-muted-foreground">yelyen</span>
            </span>
          </Link>
        )}

        <ul className="flex gap-5 text-sm">
          {Object.entries(navItems).map(([path, { name }]) => {
            const isActive =
              pathname === path ||
              (path !== "/" && pathname.startsWith(path))

            return (
              <li
                key={path}
                className={`transition duration-200 ease-in-out ${
                  !isActive && "md:hover:text-primary-foreground"
                }`}
              >
                {isActive ? (
                  <span className="text-primary-foreground">{name}</span>
                ) : (
                  <Link href={path}>{name}</Link>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
