import { useEffect, useRef } from "react"
import { ThemeProvider } from "next-themes"
import Layout from "@/components/Layout"
import "@/styles/globals.css"

export default function App({ Component, pageProps }) {
  return (
    <div>
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </div>
  )
}
