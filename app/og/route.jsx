import { ImageResponse } from "next/og"

export const runtime = "edge"

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const postTitle = searchParams.get("title")

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
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            marginLeft: 95,
            marginRight: 500,
            marginTop: 750,
            display: "flex",
            fontSize: "60px",
            letterSpacing: "-0.05em",
            fontStyle: "medium",
            color: "white",
            lineHeight: "95px",
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
    }
  )
}
