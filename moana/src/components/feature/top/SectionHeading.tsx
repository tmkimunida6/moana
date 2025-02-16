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
    <h2 className="mb-8 text-center text-4xl font-bold leading-[1.5]">
      {children}
      <span className="block font-moana text-2xl text-brand-primary">
        ~ {subtext} ~
      </span>
    </h2>
  )
}
