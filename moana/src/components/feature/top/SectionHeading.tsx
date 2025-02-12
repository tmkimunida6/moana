import { ReactNode } from 'react'

type SectionHeadingProps = {
  children: ReactNode
  subtext: string
}

export default function SectionHeading({
  children,
  subtext,
}: SectionHeadingProps) {
  return (
    <h2 className="text-4xl text-center font-bold">
      {children}
      <span className="font-moana text-brand-primary text-2xl block">
        ~ {subtext} ~
      </span>
    </h2>
  )
}
