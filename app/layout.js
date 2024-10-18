import "./global.css"
import "katex/dist/katex.min.css"

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Suspense } from "react"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { ViewTransitions } from "next-view-transitions"

import GoogleAnalytics from "@/components/google-analytics"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import Preloader from "@/components/preloader"

export const metadata = {
  metadataBase: new URL("https://kelvinyelyen.com"),
  title: {
    default: "Kelvin Yelyen",
    template: "%s | Kelvin Yelyen",
  },
  description: "Software engineer and designer based in Ghana.",
  author: [{ name: "Kelvin Yelyen" }],
  publishedTime: "2023-03-17T15:01:08+00:00",
  openGraph: {
    title: "Kelvin Yelyen",
    description: "Software engineer and designer based in Ghana.",
    url: "https://kelvinyelyen.com",
    siteName: "Kelvin Yelyen",
    locale: "en_GH",
    type: "website",
    author: "Kelvin Yelyen",
    publishedTime: "2023-03-17T15:01:08+00:00",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Kelvin Yelyen",
    card: "summary_large_image",
  },
  alternates: {
    types: {
      "application/rss+xml": [
        { url: "/rss.xml", title: "Kelvin Yelyen's RSS Feed" },
      ],
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(" ")

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        suppressHydrationWarning
        className={cx(GeistSans.variable, GeistMono.variable)}
      >
        <Suspense>
          <GoogleAnalytics GA_MEASUREMENT_ID="G-27MSMZKLNN" />
        </Suspense>
        <body className="flex flex-col min-h-screen">
          <Preloader />
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
          <SpeedInsights />
        </body>
        <Analytics />
      </html>
    </ViewTransitions>
  )
}