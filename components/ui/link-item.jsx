import { Link } from "next-view-transitions"

export function LinkItem({ href, children }) {
    return (
        <li className="transition duration-200 ease-in-out hover:text-stone-200">
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
