import { ImageResponse } from "next/og"

export const runtime = "edge"

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const postTitle = searchParams.get("title")
  const font = fetch(
    new URL("../../public/fonts/kaisei-tokumin-bold.ttf", import.meta.url)
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
            marginLeft: 190, // Adjust as needed
            marginTop: 190,
            marginRight: 190, // Adjust as needed
            display: "flex",
            fontSize: 120,
            fontFamily: "Kaisei Tokumin",
            letterSpacing: "-0.05em",
            fontStyle: "normal",
            color: "white",
            lineHeight: "120px",
            whiteSpace: "pre-wrap",
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
          name: "Kaisei Tokumin",
          data: fontData,
          style: "normal",
        },
      ],
    }
  )
}
