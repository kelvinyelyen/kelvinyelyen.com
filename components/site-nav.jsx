"use client"

import { Link } from "next-view-transitions"
import { usePathname } from "next/navigation"

const navItems = {
  "/work": {
    name: "work",
  },
  "/blog": {
    name: "journal",
  },
  "/reading": {
    name: "reading",
  },
}

export function Nav() {
  const pathname = usePathname()
  let cx = (...classes) => classes.filter(Boolean).join(" ")

  const NavLink = ({ path, name }) => (
    <li className="transition duration-200 ease-in-out md:hover:text-primary-foreground">
      <Link href={path} passHref>
        <p className={cx({ "text-primary-foreground": pathname === path })}>
          {name}
        </p>
      </Link>
    </li>
  )

  return (
    <nav className="container py-8 relative text-foreground tracking-tight">
      <div className={cx("mx-auto flex justify-between align-middle gap-8")}>
        <Link href="/">
          <p className="text-[17px] text-foreground">
            kelvin<span className="text-primary-foreground">yelyen_</span>
          </p>
        </Link>
        <ul className="flex gap-5 text-sm">
          {Object.entries(navItems).map(([path, { name }]) => (
            <NavLink key={path} path={path} name={name} />
          ))}
        </ul>
      </div>
    </nav>
  )
}
