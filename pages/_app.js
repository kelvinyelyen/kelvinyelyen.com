import { ThemeProvider } from "next-themes"
import Scroller from "@/utils/smoothScroll"
import Layout from "@/components/Layout"
import "@/styles/globals.css"
import Preloader from "@/components/Preloader"

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Preloader />
      <Scroller>
        <ThemeProvider attribute="class">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Scroller>
    </div>
  )
}
