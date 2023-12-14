import { ImageResponse } from "next/og"
import { NextRequest } from "next/server"

export const runtime = "edge"

export async function GET(req) {
  const { searchParams } = req.nextUrl
  const postTitle = searchParams.get("title")
  console.log(postTitle)

  return new ImageResponse(
    `<div style="height:100%;width:100%;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;background-image:url(https://kelvinyelyen.com/og-bg.png);">
        <div style="margin-left:190px;margin-right:190px;display:flex;font-size:130px;letter-spacing:-0.05em;font-style:normal;color:white;line-height:120px;white-space:pre-wrap;">
          ${postTitle}
        </div>
      </div>`,
    {
      width: 1920,
      height: 1080,
    }
  )
}
