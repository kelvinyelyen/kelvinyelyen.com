import React from "react"
import { MDXRemote } from "next-mdx-remote/rsc"
import * as MDXComponents from "@/components/mdx/mdx-components"
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import rehypePrettyCode from "rehype-pretty-code"

const components = {
  ...MDXComponents
}

const prettyCodeOptions = {
  theme: {
    dark: "github-dark",
    light: "github-light",
  },
  keepBackground: false,
}

export function CustomMDX(props) {
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
