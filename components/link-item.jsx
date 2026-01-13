import { Link } from "next-view-transitions"
import { cn } from "@/lib/utils"

export function LinkItem({ href, children, className }) {
    return (
        <li className={cn(
            "transition duration-200 ease-in-out hover:text-primary-foreground",
            className
        )}>
            <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
            >
                [{children}]
            </Link>
        </li>
    )
}
