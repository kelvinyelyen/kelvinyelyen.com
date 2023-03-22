import { ThemeProvider } from "next-themes"
import Scroller from "@/utils/smoothScroll"
import Layout from "@/components/Layout"
import "@/styles/globals.css"

export default function App({ Component, pageProps }) {
  return (
    <div>
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
