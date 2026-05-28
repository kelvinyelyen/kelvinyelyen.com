import React from "react"
import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc"
import * as MDXComponents from "@/components/mdx/mdx-components"
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import rehypePrettyCode from "rehype-pretty-code"

const components = {
  ...MDXComponents
}

const prettyCodeOptions = {
  theme: "github-dark",
  keepBackground: false,
}

export function CustomMDX(props: MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkMath],
          rehypePlugins: [rehypeKatex, [rehypePrettyCode, prettyCodeOptions]],
        },
      }}
    />
  )
}
