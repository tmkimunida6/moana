import { ReactNode } from 'react'

type BoxWithArrowProps = {
  bg: 'accent' | 'white'
  noArrow?: boolean
  children: ReactNode
}

export default function BoxWithArrow({
  bg,
  noArrow = false,
  children,
}: BoxWithArrowProps) {
  return (
    <div
      className={`rounded-sm p-4 grid gap-2 relative ${
        bg === 'accent'
          ? 'bg-brand-accent'
          : 'border border-2 border-brand-accent bg-white'
      }`}
    >
      {children}
      {!noArrow && (
        <div className="bg-brand-accent absolute top-[100%] left-[50%] -translate-x-1/2 w-[48px] h-[16px] [clip-path:polygon(0_0,100%_0,50%_100%)]"></div>
      )}
    </div>
  )
}
