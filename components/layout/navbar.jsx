"use client"

import { Link } from "next-view-transitions"
import { usePathname } from "next/navigation"

const navItems = {
  "/": {
    name: "about",
  },
  "/work": {
    name: "work",
  },
  "/blog": {
    name: "journal",
  },
}

function cx(...classes) {
  return classes.filter(Boolean).join(" ")
}

export function Nav() {
  const pathname = usePathname()

  return (
    <nav className="container py-8 relative tracking-tight" style={{ viewTransitionName: 'navbar' }}>
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
          {Object.entries(navItems).map(([path, { name }]) => (
            <NavLink key={path} path={path} name={name} isActive={pathname === path} />
          ))}
        </ul>
      </div>
    </nav>
  )
}

function NavLink({ path, name, isActive }) {
  if (isActive) {
    return (
      <li className="transition duration-200 ease-in-out md:hover:text-primary-foreground">
        <span className={cx(isActive && "text-primary-foreground")}>
          {name}
        </span>
      </li>
    )
  }
  return (
    <li className="transition duration-200 ease-in-out md:hover:text-primary-foreground">
      <Link href={path}>
        <span className={cx(isActive && "text-primary-foreground")}>
          {name}
        </span>
      </Link>
    </li>
  )
}