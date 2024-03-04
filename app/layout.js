import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Suspense } from "react"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"

import "@/styles/globals.css"
import GoogleAnalytics from "@/components/google-analytics"
import { Providers } from "../components/providers"
import SiteNav from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import Preloader from "@/components/preloader"

export const metadata = {
  metadataBase: new URL("https://kelvinyelyen.com"),
  title: {
    default: "Kelvin Yelyen",
    template: "%s | Kelvin Yelyen",
  },
  description:
    "Software engineer and designer based in Ghana, currently working independently.",
  openGraph: {
    title: "Kelvin Yelyen",
    description:
      "Software engineer and designer based in Ghana, currently working independently.",
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
        { url: "/rss.xml", title: "Kelvin Yelyen RSS Feed" },
      ],
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Suspense>
        <GoogleAnalytics GA_MEASUREMENT_ID="G-27MSMZKLNN" />
      </Suspense>
      <body className={GeistSans.className}>
        <Preloader />
        <SiteNav />
        {children}
        <SiteFooter />
        <SpeedInsights />
      </body>
      <Analytics />
    </html>
  )
}
