import { ThemeProvider } from "next-themes"
import Layout from "@/components/Layout"
import Script from "next/script"
import "@/styles/globals.css"
import Preloader from "@/components/Preloader"

export default function App({ Component, pageProps }) {
  return (
    <div>
      <div className="bg"></div>
      <Preloader />
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-27MSMZKLNN"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-27MSMZKLNN', {
            page_path: window.location.pathname,
            });
            `,
        }}
      />
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </div>
  )
}
