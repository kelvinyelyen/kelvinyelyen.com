import React from "react"
import Link from "next/link"
import Image, { ImageProps } from "next/image"
import { TweetComponent } from "@/components/mdx/tweet/tweet"

import { Icons } from "@/components/icons"
import {
  ArrowInSpace,
  Vector3D,
  UnitVectorDemo
} from "@/components/mdx/vector"

interface TableData {
  headers: string[]
  rows: string[][]
}

export function Table({ data }: { data: TableData }) {
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

export function table(props: React.TableHTMLAttributes<HTMLTableElement>) {
  return (
    <div className="w-full overflow-x-auto my-4 relative">
      <table className="w-full text-left border-collapse min-w-full" {...props} />
    </div>
  )
}

export function CustomLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { href, children, ...rest } = props

  if (href?.startsWith("/")) {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    )
  }

  if (href?.startsWith("#")) {
    return <a {...props} />
  }

  return (
    <a target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  )
}

export function RoundedImage(props: ImageProps) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />
}

export function Callout({ emoji, children }: { emoji: string; children: React.ReactNode }) {
  return (
    <div className="px-4 py-3 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm flex items-center text-neutral-900 dark:text-neutral-100 mb-8">
      <div className="flex items-center w-4 mr-4">{emoji}</div>
      <div className="w-full callout">{children}</div>
    </div>
  )
}

interface FeedbackCardProps {
  title: string
  items: string[]
  type: "pros" | "cons"
}

function FeedbackCard({ title, items, type }: FeedbackCardProps) {
  const isPros = type === "pros"
  const Icon = isPros ? Icons.Check : Icons.Cross
  const containerClass = isPros
    ? "border-emerald-200 dark:border-emerald-900 my-4"
    : "border-red-200 dark:border-red-900 my-6"
  const iconClass = isPros ? "text-emerald-500" : "text-red-500"

  return (
    <div className={`border bg-neutral-50 dark:bg-neutral-900 rounded-lg p-6 w-full ${containerClass}`}>
      <span className="font-semibold">{title}</span>
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

export function ProsCard({ title, pros }: { title: string; pros: string[] }) {
  return <FeedbackCard title={title} items={pros} type="pros" />
}

export function ConsCard({ title, cons }: { title: string; cons: string[] }) {
  return <FeedbackCard title={title} items={cons} type="cons" />
}

function slugify(str: any): string {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
}

export function createHeading(level: number) {
  return ({ children }: { children: React.ReactNode }) => {
    const Tag = `h${level}` as any
    const slug = slugify(children)
    return (
      <Tag id={slug}>
        <a href={`#${slug}`} key={`link-${slug}`} className="anchor" />
        {children}
      </Tag>
    )
  }
}



export function hr(props: React.HTMLAttributes<HTMLHRElement>) {
  return <hr className="my-8 border-stone-200 dark:border-stone-800" {...props} />
}

export {
  TweetComponent,
  ArrowInSpace,
  Vector3D,
  UnitVectorDemo
}
