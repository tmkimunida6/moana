import { ReactNode } from 'react'

type HighlightedTextProps = {
  children: ReactNode
}

export default function HighlightedText({ children }: HighlightedTextProps) {
  return (
    <span className="inline-block w-fit bg-white px-2 py-1 font-bold">
      {children}
    </span>
  )
}
