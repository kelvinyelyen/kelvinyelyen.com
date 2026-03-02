/* eslint-disable react/display-name */
import React from "react"
import Link from "next/link"
import Image from "next/image"
import { TweetComponent } from "@/components/mdx/tweet/tweet"

import { Icons } from "@/components/icons"
import {
  ArrowInSpace,
  Vector3D,
  UnitVectorDemo
} from "@/components/mdx/vector"

function Table({ data }) {
  const headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ))
  const rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ))
  return (
    <div className="w-full overflow-x-auto my-4 relative">
      <table className="w-full text-left border-collapse min-w-full">
        <thead>
          <tr>{headers}</tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  )
}

function table(props) {
  return (
    <div className="w-full overflow-x-auto my-4 relative">
      <table className="w-full text-left border-collapse min-w-full" {...props} />
    </div>
  )
}

function CustomLink(props) {
  const { href, children } = props

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    )
  }

  if (href.startsWith("#")) {
    return <a {...props} />
  }

  return (
    <a target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  )
}

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />
}

function Callout(props) {
  return (
    <div className="px-4 py-3 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm flex items-center text-neutral-900 dark:text-neutral-100 mb-8">
      <div className="flex items-center w-4 mr-4">{props.emoji}</div>
      <div className="w-full callout">{props.children}</div>
    </div>
  )
}

function FeedbackCard({ title, items, type }) {
  const isPros = type === "pros"
  const Icon = isPros ? Icons.Check : Icons.Cross
  const containerClass = isPros
    ? "border-emerald-200 dark:border-emerald-900 my-4"
    : "border-red-200 dark:border-red-900 my-6"
  const iconClass = isPros ? "text-emerald-500" : "text-red-500"

  return (
    <div className={`border bg-neutral-50 dark:bg-neutral-900 rounded-lg p-6 w-full ${containerClass}`}>
      <span>{title}</span>
      <div className="mt-4">
        {items.map((item) => (
          <div key={item} className="flex font-medium items-baseline mb-2">
            <div className="h-4 w-4 mr-2">
              <Icon className={`h-4 w-4 ${iconClass}`} />
            </div>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ProsCard({ title, pros }) {
  return <FeedbackCard title={title} items={pros} type="pros" />
}

function ConsCard({ title, cons }) {
  return <FeedbackCard title={title} items={cons} type="cons" />
}

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
}

function createHeading(level) {
  const Tag = `h${level}`
  return ({ children }) => {
    const slug = slugify(children)
    return (
      <Tag id={slug}>
        <a href={`#${slug}`} key={`link-${slug}`} className="anchor" />
        {children}
      </Tag>
    )
  }
}

export {
  Table,
  table,
  CustomLink,
  RoundedImage,
  Callout,
  ProsCard,
  ConsCard,
  TweetComponent,
  ArrowInSpace,
  Vector3D,
  UnitVectorDemo
}
