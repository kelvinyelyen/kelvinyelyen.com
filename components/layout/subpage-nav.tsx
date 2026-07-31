"use client"

import { Link } from "next-view-transitions"
import { usePathname } from "next/navigation"

const routes = [
    { href: "/", label: "kelvinyelyen" },
    { href: "/work", label: "work" },
    { href: "/notes", label: "notes" },
]

export function SubpageNav() {
    const pathname = usePathname()

    return (
        <nav className="flex flex-wrap gap-x-1 gap-y-0.5" style={{ viewTransitionName: 'nav' }}>
            {routes.map((route, i) => {
                const isActive =
                    route.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(route.href)

                return (
                    <span key={route.href}>
                        {i > 0 && <span className="text-stone-400">/</span>}
                        {" "}
                        <Link
                            href={route.href}
                            className={
                                isActive
                                    ? "text-stone-900 font-medium cursor-default"
                                    : "text-stone-400 hover:text-stone-900 transition-colors"
                            }
                        >
                            {route.label}
                        </Link>
                    </span>
                )
            })}
        </nav>
    )
}
