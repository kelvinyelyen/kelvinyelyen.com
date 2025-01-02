import { ImageResponse } from "next/og"
import { GeistMono } from "geist/font/mono"

export const runtime = "edge"

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const postTitle = searchParams.get("title")
  const font = fetch(
    new URL("https://kelvinyelyen.com/fonts/GeistMono-Regular.woff", import.meta.url)
  ).then((res) => res.arrayBuffer())
  const fontData = await font

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundImage: `url(https://kelvinyelyen.com/og-bg.png)`,
        }}
      >
        <div
          style={{
            marginLeft: 180,
            marginRight: 900,
            display: "flex",
            fontSize: 90,
            letterSpacing: "-0.05em",
            fontStyle: "normal",
            color: "white",
            lineHeight: "80px",
            whiteSpace: "pre-wrap",
            fontFamily: "GeistMono",
          }}
        >
          {postTitle}
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: "GeistMono",
          data: fontData,
          style: "normal",
        },
      ],
    }
  )
}
