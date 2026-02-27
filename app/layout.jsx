import "./global.css"
import "katex/dist/katex.min.css"

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Suspense } from "react"
import { STIX_Two_Text } from "next/font/google"
import { ViewTransitions } from "next-view-transitions"

import { cn } from "@/lib/utils"
import { GoogleAnalytics } from "@/components"

const stixTwoText = STIX_Two_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-stix",
})

export const metadata = {
  metadataBase: new URL("https://kelvinyelyen.com"),
  title: {
    default: "Kelvin Yelyen",
    template: "%s | Kelvin Yelyen",
  },
  description: "Software engineer based in Ghana.",
  authors: [{ name: "Kelvin Yelyen" }],
  openGraph: {
    title: "Kelvin Yelyen",
    description: "Software engineer based in Ghana.",
    url: "https://kelvinyelyen.com",
    siteName: "Kelvin Yelyen",
    locale: "en_GH",
    type: "website",
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
    card: "summary_large_image",
    title: "Kelvin Yelyen",
    description: "Software engineer based in Ghana.",
  },
  alternates: {
    types: {
      "application/rss+xml": [
        { url: "/rss.xml", title: "Kelvin Yelyen's RSS Feed" },
      ],
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        suppressHydrationWarning
        className={cn(stixTwoText.variable)}
      >
        <body className="flex flex-col min-h-screen">
          <Suspense>
            <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_ID} />
          </Suspense>
          <Suspense>
            <main className="flex-1" style={{ viewTransitionName: 'main' }}>{children}</main>
          </Suspense>
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </ViewTransitions>
  )
}