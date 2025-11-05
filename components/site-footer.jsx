import { Link } from "next-view-transitions"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="container tracking-tight">
      <div className="mx-auto text-xs">
        <hr className="my-4 border-t border-muted" />
        <div className="flex justify-between items-center my-8 gap-4">
          <nav aria-label="Footer navigation">
            <ul className="flex gap-4 text-muted-foreground">
              <li>
                <Link 
                  href="/rss.xml"
                  className="transition duration-200 ease-in-out hover:text-stone-200"
                >
                  [rss]
                </Link>
              </li>
              <li>
                <Link 
                  href="/books"
                  className="transition duration-200 ease-in-out hover:text-stone-200"
                >
                  [books]
                </Link>
              </li>
            </ul>
          </nav>
          <p className="text-muted-foreground whitespace-nowrap">
            © {currentYear} Kelvin Yelyen
          </p>
        </div>
      </div>
    </footer>
  )
}