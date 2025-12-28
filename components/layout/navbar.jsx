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
    name: "notes",
  },
}

function cx(...classes) {
  return classes.filter(Boolean).join(" ")
}

export function Nav() {
  const pathname = usePathname()

  return (
    <nav className="container py-8 relative tracking-tight"> 
      <div className="mx-auto flex justify-between items-center gap-8">
        <Link href="/" className="group">
          <span className="text-[17px] font-medium transition-colors">
            kelvin<span className="text-muted-foreground group-hover:text-foreground transition-colors">yelyen</span>
          </span>
        </Link>
        
        <ul className="flex gap-6 text-sm">
          {Object.entries(navItems).map(([path, { name }]) => (
            <NavLink key={path} path={path} name={name} isActive={pathname === path} />
          ))}
        </ul>
      </div>
    </nav>
  )
}

function NavLink({ path, name, isActive }) {
  return (
    <li className="list-none">
      <Link 
        href={path}
        className={cx(
          "transition-colors duration-200 ease-in-out hover:text-foreground",
          isActive ? "text-foreground font-medium" : "text-muted-foreground"
        )}
      >
        {name}
      </Link>
    </li>
  )
}
