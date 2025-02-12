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
    <h2 className="text-4xl text-center font-bold mb-8 leading-[1.5]">
      {children}
      <span className="font-moana text-brand-primary text-2xl block">
        ~ {subtext} ~
      </span>
    </h2>
  )
}
