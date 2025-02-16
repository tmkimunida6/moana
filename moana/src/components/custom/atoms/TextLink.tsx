import Link from 'next/link'
import { ReactNode } from 'react'

type TextLinkProps = {
  href: string
  openInNew?: boolean
  children: ReactNode
}

export default function TextLink({ href, openInNew, children }: TextLinkProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1 text-brand-link underline hover:opacity-70"
      target={openInNew ? '_blank' : undefined}
      rel={openInNew ? 'noopener noreferrer' : undefined}
    >
      {children}
    </Link>
  )
}
