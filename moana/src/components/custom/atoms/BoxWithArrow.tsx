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
      className={`rounded-sm flex flex-col gap-2 justify-center relative ${
        bg === 'accent'
          ? 'bg-brand-accent p-2'
          : 'border border-2 border-brand-accent bg-white p-4 md:flex-1'
      }`}
    >
      {children}
      {!noArrow && (
        <div
          className={`bg-brand-accent absolute top-[100%] left-[50%] -translate-x-1/2 w-[48px] h-[16px] [clip-path:polygon(0_0,100%_0,50%_100%)] ${
            bg !== 'accent'
              ? 'md:[clip-path:polygon(0_0,100%_50%,0_100%)] md:w-[16px] md:h-[48px] md:top-[50%] md:left-[100%] md:-translate-y-1/2 md:translate-x-0'
              : ''
          }`}
        ></div>
      )}
    </div>
  )
}
