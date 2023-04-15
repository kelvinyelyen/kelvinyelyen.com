import { ThemeProvider } from "next-themes"
import Layout from "@/components/Layout"
import "@/styles/globals.css"
import Preloader from "@/components/Preloader"

export default function App({ Component, pageProps }) {
  return (
    <div>
      <div className="bg"></div>
      <Preloader />
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </div>
  )
}
