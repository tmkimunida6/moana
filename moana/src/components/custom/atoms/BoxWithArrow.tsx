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
      className={`relative flex flex-col justify-center gap-2 rounded-sm ${
        bg === 'accent'
          ? 'bg-brand-accent p-2'
          : 'border border-2 border-brand-accent bg-white p-4 md:flex-1'
      }`}
    >
      {children}
      {!noArrow && (
        <div
          className={`absolute left-[50%] top-[100%] h-[16px] w-[48px] -translate-x-1/2 bg-brand-accent [clip-path:polygon(0_0,100%_0,50%_100%)] ${
            bg !== 'accent'
              ? 'md:left-[100%] md:top-[50%] md:h-[48px] md:w-[16px] md:-translate-y-1/2 md:translate-x-0 md:[clip-path:polygon(0_0,100%_50%,0_100%)]'
              : ''
          }`}
        ></div>
      )}
    </div>
  )
}
