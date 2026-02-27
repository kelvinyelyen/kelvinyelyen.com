"use client"

import { Link } from "next-view-transitions"
import { usePathname } from "next/navigation"

const routes = [
    { href: "/", label: "kelvinyelyen" },
    { href: "/blog", label: "notes" },
    { href: "/work", label: "work" },
]

export function SubpageNav() {
    const pathname = usePathname()

    return (
        <nav className="text-sm flex flex-wrap gap-x-1 gap-y-0.5">
            {routes.map((route, i) => {
                const isActive =
                    route.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(route.href)

                return (
                    <span key={route.href}>
                        {i > 0 && <span className="text-muted-foreground">/</span>}
                        {" "}
                        {isActive ? (
                            <span className="text-foreground">{route.label}</span>
                        ) : (
                            <Link
                                href={route.href}
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {route.label}
                            </Link>
                        )}
                    </span>
                )
            })}
        </nav>
    )
}
