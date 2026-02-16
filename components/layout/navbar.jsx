"use client"

import { Link } from "next-view-transitions"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = {
  "/": { name: "about" },
  "/work": { name: "work" },
  "/blog": { name: "notes" },
}

export function Nav({ className }) {
  const pathname = usePathname()

  return (
    <nav
      className={cn("container py-8 relative tracking-tight", className)}
      style={{ viewTransitionName: "navbar" }}
    >
      <div className="mx-auto flex justify-between items-center gap-8">
        <Link
          href="/"
          className={cn(pathname === "/" && "pointer-events-none")}
        >
          <span className="text-[17px]">
            kelvin<span className="text-muted-foreground">yelyen</span>
          </span>
        </Link>

        <ul className="flex gap-5 text-sm text-muted-foreground">
          {Object.entries(navItems).map(([path, { name }]) => {
            const isActive =
              pathname === path ||
              (path !== "/" && pathname.startsWith(path))

            return (
              <li
                key={path}
                className={cn(
                  "transition duration-200 ease-in-out",
                  !isActive && "md:hover:text-stone-900 dark:md:hover:text-foreground"
                )}
              >
                {isActive ? (
                  <span className="text-stone-900 dark:text-foreground">{name}</span>
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
