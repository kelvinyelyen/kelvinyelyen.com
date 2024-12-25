import React from "react"
import { MDXRemote } from "next-mdx-remote/rsc"
import * as MDXComponents from "@/components/mdx/mdx-components"
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"

const components = {
  ...MDXComponents
}

const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [rehypeKatex],
  },
}

export function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
      options={options}
    />
  )
}
